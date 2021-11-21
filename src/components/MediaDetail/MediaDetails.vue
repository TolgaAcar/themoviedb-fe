<template>
    <div class="media-details">
        <img
            class="back-icon"
            src="../../assets/left-arrow.png"
            @click="goBack"
        />

        <show-details v-if="!isLoading" :details="details" />

        <loading v-if="isLoading" />
    </div>
</template>

<script>
import api from "@/module/api/api";
import ShowDetails from "./components/ShowDetails.vue";
import Loading from "../Loading/Loading.vue";

export default {
    components: { ShowDetails, Loading },
    name: "MediaDetails",
    data() {
        return {
            mediaId: this.$route.params.mediaId,
            mediaType: this.$route.params.mediaType,
            isLoading: true,
            details: {},
        };
    },
    async created() {
        await this.fetchDetails();
    },
    methods: {
        async fetchDetails() {
            this.isLoading = true;

            try {
                this.details = await api.fetchDetailData(
                    this.mediaType,
                    this.mediaId
                );

                this.isLoading = false;
            } catch (error) {
                ("");
            } finally {
                this.isLoading = false;
            }
        },
        goBack() {
            window.history.back();
        },
    },
};
</script>

<style>
.back-icon {
    width: 20px;
    height: 20px;
    top: 20px;
    position: fixed;
}
</style>