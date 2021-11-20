<template>
    <div class="filters">
        <search-input></search-input>
        <media-type-selector></media-type-selector>
    </div>
</template>

<script>
import MediaTypeSelector from "./components/MediaTypeSelector.vue";
import SearchInput from "./components/SearchInput.vue";
export default {
    components: { SearchInput, MediaTypeSelector },
    name: "Filters",
};
</script>

<style>
</style>