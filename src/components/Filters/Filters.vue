<template>
    <div class="filters">
        <search-input />
        <media-type-selector v-if="showMediaTypeSelector" />
        <div v-else class="most-populars-title">Most Populars</div>
    </div>
</template>

<script>
import MediaTypeSelector from "./components/MediaTypeSelector.vue";
import SearchInput from "./components/SearchInput.vue";

export default {
    components: {
        SearchInput,
        MediaTypeSelector,
    },
    name: "Filters",
    computed: {
        showMediaTypeSelector() {
            return this.$store.state.showMediaTypeSelector;
        },
    },
};
</script>

<style>
.most-populars-title {
    font-size: 24px;
    font-weight: bold;
    padding: 20px 0 10px;
}
</style>