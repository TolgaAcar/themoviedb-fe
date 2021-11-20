<template>
    <div class="media-list-wrapper">
        <loading v-if="isLoading"></loading>
        <div class="media-list" v-else>
            <media-item
                v-for="(media, index) in filteredMediaList"
                :key="`mi-${index}`"
                :media="media"
            ></media-item>
        </div>
    </div>
</template>

<script>
import api from "@/module/api/api";
import MediaItem from "./components/MediaItem.vue";
import Loading from "../Loading/Loading.vue";

export default {
    components: { MediaItem, Loading },
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
        searchInput() {
            return this.$store.state.searchInput;
        },
        mediaType() {
            return this.$store.state.mediaType;
        },
        isLoading() {
            return this.$store.state.isLoading;
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
    },
    methods: {
        async fetchMediaList(searchPath, additionalParams = "") {
            this.$store.dispatch("setIsLoading", true);
            this.mediaList = await api.fetchData(searchPath, additionalParams);
            this.$store.dispatch("setIsLoading", false);
        },
    },
};
</script>

<style>
</style>