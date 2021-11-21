<template>
    <media-details />
</template>

<script>
import MediaDetails from "../components/MediaDetail/MediaDetails.vue";

export default {
    components: {
        MediaDetails,
    },
    mounted() {
        window.scrollTo(0, 0);
    },
};
</script>

<style>
</style>