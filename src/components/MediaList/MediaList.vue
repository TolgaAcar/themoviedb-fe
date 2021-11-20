<template>
    <div class="media-list-wrapper">
        <div v-if="!isLoading" class="media-list">
            <div
                class="media-item-wrapper"
                v-for="(media, index) in filteredMediaList"
                :key="`mi-${index}`"
            >
                <router-link
                    :to="{
                        name: 'MediaDetails',
                        params: {
                            mediaType: media.media_type,
                            mediaId: media.id,
                        },
                    }"
                >
                    <media-item :media="media" />
                </router-link>
            </div>
        </div>

        <loading v-if="isLoading" />
        <no-data v-if="!isLoading && dataState === 'noData'" />
        <error v-if="!isLoading && dataState === 'error'" />
    </div>
</template>

<script>
import api from "@/module/api/api";
import MediaItem from "./components/MediaItem.vue";
import Loading from "../Loading/Loading.vue";
import NoData from "../NoData/NoData.vue";
import Error from "../Error/Error.vue";

export default {
    components: {
        MediaItem,
        Loading,
        NoData,
        Error,
    },
    name: "MediaList",
    data() {
        return {
            mediaList: [],
        };
    },
    async created() {
        this.fetchMediaList("trending/all/day");
    },
    computed: {
        isLoading: {
            get: function () {
                return this.$store.state.isLoading;
            },
            set: function (newValue) {
                this.$store.dispatch("setIsLoading", newValue);
            },
        },
        searchInput() {
            return this.$store.state.searchInput;
        },
        mediaType() {
            return this.$store.state.mediaType;
        },
        dataState() {
            return this.$store.state.dataState;
        },
        filteredMediaList() {
            return this.mediaList.filter(
                (mediaItem) => mediaItem.media_type === this.mediaType
            );
        },
    },
    watch: {
        searchInput: function (val) {
            this.fetchMediaList("search/multi", `&query=${val}`);
        },
        filteredMediaList: function () {
            if (!this.filteredMediaList.length) {
                this.$store.dispatch("setDataState", "noData");
            } else {
                this.$store.dispatch("setDataState", "success");
            }
        },
    },
    methods: {
        async fetchMediaList(searchPath, additionalParams = "") {
            this.isLoading = true;
            this.mediaList = [];

            try {
                this.mediaList = await api.fetchData(
                    searchPath,
                    additionalParams
                );

                if (this.mediaList && this.mediaList.length) {
                    this.$store.dispatch("setDataState", "success");
                } else {
                    this.$store.dispatch("setDataState", "noData");
                }
            } catch (error) {
                this.$store.dispatch("setDataState", "error");
            } finally {
                this.isLoading = false;
            }
        },
    },
};
</script>

<style>
</style>