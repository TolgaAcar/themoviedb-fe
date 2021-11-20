<template>
    <div class="media-item">
        <div class="media-poster-container" v-if="media.poster_path">
            <img class="media-poster" :src="posterUrl" @error="hideImage" />
        </div>
        <div class="media-details-container">
            <div class="media-title">
                {{ media.title }}
            </div>
            <div class="media-overview">
                {{ media.overview }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MediaItem",
    data() {
        return {};
    },
    props: {
        media: {},
    },
    computed: {
        posterUrl() {
            if (this.media.poster_path) {
                return `https://image.tmdb.org/t/p/original/${this.media.poster_path}`;
            }

            return "";
        },
    },
    methods: {
        hideImage({ target }) {
            target.style.display = "none";
        },
    },
};
</script>

<style scoped>
.media-item {
    display: flex;
    align-items: flex-end;
    padding: 10px 20px 10px;
}

.media-poster-container {
    display: flex;
}

.media-poster {
    height: 190px;
    width: 130px;
    border-radius: 15px;
    border-bottom-right-radius: unset;
}

.media-details-container {
    background-color: #ffffff;
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: rgb(0 0 0 / 30%) 0 1px 10px;
}

.media-title {
    font-size: 19px;
    font-weight: bold;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.media-overview {
    font-size: 14px;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>