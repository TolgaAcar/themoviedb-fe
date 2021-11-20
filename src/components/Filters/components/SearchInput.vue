<template>
    <div class="search-input">
        <img
            class="search-icon"
            src="../../../assets/search.png"
            @click="onSave"
        />

        <input
            type="text"
            :value="searchKeyword"
            @input="(e) => (searchKeyword = e.target.value)"
            @keyup.enter="onSave"
            placeholder="Search..."
        />
    </div>
</template>

<script>
export default {
    name: "SearchInput",
    data() {
        return {
            searchKeyword: "",
        };
    },
    created() {
        this.searchKeyword = "";
    },
    methods: {
        onSave() {
            this.$store.dispatch("setSearchInput", this.searchKeyword);
            this.$store.dispatch("setShowMediaTypeSelector", true);
        },
    },
};
</script>

<style scoped>
.search-input {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    background: #dddddd;
    border-radius: 10px;
    padding: 0 10px;
}

input {
    margin: 0px;
    padding: 0px;
    width: 100%;
    outline: none;
    height: 30px;
    border: unset;
    background-color: inherit;
}

.search-icon {
    width: 15px;
    height: 15px;
    margin-right: 10px;
}
</style>