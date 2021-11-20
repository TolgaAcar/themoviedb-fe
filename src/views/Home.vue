<template>
    <div class="home">
        <filters />
        <media-list />
    </div>
</template>

<script>
import Filters from "../components/Filters/Filters.vue";
import MediaList from "../components/MediaList/MediaList.vue";

export default {
    components: { Filters, MediaList },
    name: "Home",
};
</script>

<style scoped>
.home {
    padding: 24px;
}
</style>
