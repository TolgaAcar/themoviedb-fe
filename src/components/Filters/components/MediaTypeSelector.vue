<template>
    <div class="media-type-selector">
        <div
            class="media-type"
            v-for="(type, index) in mediaTypes"
            :key="`mt-${index}`"
        >
            <label
                class="type-label"
                :class="{ selected: selectedType === type.value }"
            >
                <input
                    class="type-input"
                    type="radio"
                    :id="type.value"
                    :value="type.value"
                    v-model="selectedType"
                />
                <span>{{ type.text }}</span>
            </label>
        </div>
    </div>
</template>

<script>
const mediaTypes = [
    { value: "movie", text: "Movies" },
    { value: "person", text: "Person" },
    { value: "tv", text: "TV" },
];

export default {
    name: "MediaTypeSelector",
    data() {
        return {
            mediaTypes: mediaTypes,
        };
    },
    computed: {
        selectedType: {
            get: function () {
                return this.$store.state.mediaType;
            },
            set: function (newValue) {
                this.$store.dispatch("setMediaType", newValue);
            },
        },
    },
};
</script>

<style>
.media-type-selector {
    margin-top: 20px;
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    background: #dddddd;
    border-radius: 10px;
    font-weight: bold;
    padding: 2px;
    font-size: 14px;
}

.media-type {
    flex: 1;
    height: 100%;
}

.type-label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.type-input {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
}

.selected {
    background-color: #fff;
}
</style>