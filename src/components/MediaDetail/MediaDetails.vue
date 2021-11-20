<template>
    <h1>Detail {{ mediaType }} {{ id }}</h1>
</template>

<script>
export default {
    name: "MediaDetails",
    data() {
        return {
            id: this.$route.params.mediaId,
            mediaType: this.$route.params.mediaType,
        };
    },
};
</script>

<style>
</style>