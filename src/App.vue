<template>
    <div>
        <router-view />
    </div>
</template>

<script>
import store from "./store/index";

export default {
    name: "App",
    store,
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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

a {
    color: inherit;
    text-decoration: none;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}
</style>
