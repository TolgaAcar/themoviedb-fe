<template>
    <div>
        <filters />
        <media-list />
    </div>
</template>

<script>
import store from "./store/index";
import Filters from "./components/Filters/Filters.vue";
import MediaList from "./components/MediaList/MediaList.vue";

export default {
    name: "App",
    store,
    components: {
        Filters,
        MediaList,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 24px;
    height: 100%;
    width: 100%;
}

html {
    height: 100%;
}

body {
    background-color: #f5f5f5;
    min-height: 100%;
    margin: 0;
    padding: 0;
}

h1 {
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}
</style>
