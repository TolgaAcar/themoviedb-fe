<template>
    <div class="show-details">
        <div
            class="visual-details-container"
            :style="{ backgroundImage: `url(${backdropUrl})` }"
        >
            <div class="visual-details">
                <div class="media-poster-container" v-if="posterUrl">
                    <img
                        class="media-poster"
                        :src="posterUrl"
                        @error="hideImage"
                    />
                </div>
                <div class="media-title">{{ details.title }}</div>
                <rating
                    v-if="details.vote_average"
                    :rating="details.vote_average"
                />
            </div>
        </div>

        <div class="summary-container" v-if="details.overview">
            <div class="summary-title">Summary</div>
            <div class="summary">{{ details.overview }}</div>
        </div>

        <div class="cast-list-container" v-if="castList.length">
            <cast-list :castList="castList" />
        </div>
    </div>
</template>

<script>
import CastList from "./CastList.vue";
import Rating from "./Rating.vue";

export default {
    components: { CastList, Rating },
    name: "ShowDetails",
    props: {
        details: {
            type: Object,
            required: true,
        },
    },
    computed: {
        backdropUrl() {
            if (this.details.backdrop_path) {
                return `https://image.tmdb.org/t/p/original/${this.details.backdrop_path}`;
            }

            return "";
        },
        posterUrl() {
            if (this.details.poster_path) {
                return `https://image.tmdb.org/t/p/original/${this.details.poster_path}`;
            }

            return "";
        },
        castList() {
            if (
                this.details.credits &&
                this.details.credits.cast &&
                this.details.credits.cast.length
            ) {
                return this.details.credits.cast;
            }

            return [];
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
.visual-details-container {
    width: 100%;
    height: 60%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.visual-details {
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: linear-gradient(
        to right,
        rgba(152, 152, 152, 0.6) 150px,
        rgba(104, 108, 110, 0.8) 100%
    );
}

.media-poster-container {
    border-radius: 8px;
    display: flex;
    padding: 40px 0;
}

.media-poster {
    height: 225px;
    width: 150px;
    border-radius: 8px;
}

.media-title {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

.summary-container {
    padding: 24px;
}

.summary-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 18px;
}
</style>