<template>
    <div class="cast-list">
        <div class="cast-list-title">Cast</div>
        <div class="cast-list-container">
            <div
                class="cast-item"
                v-for="(castItem, index) in castList"
                :key="`cli-${index}`"
            >
                <div class="cast-img-container" v-if="castItem.profile_path">
                    <img
                        class="cast-img"
                        :src="getPosterUrl(castItem.profile_path)"
                        @error="hideImage"
                    />
                </div>
                <div class="cast-name">{{ castItem.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CastList",
    props: {
        castList: {
            type: Array,
            required: true,
        },
    },
    methods: {
        hideImage({ target }) {
            target.style.display = "none";
        },
        getPosterUrl(profilePath) {
            if (profilePath) {
                return `https://image.tmdb.org/t/p/original/${profilePath}`;
            }

            return "";
        },
    },
};
</script>

<style scoped>
.cast-list {
    padding: 24px;
}

.cast-list-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 18px;
}

.cast-list-container {
    display: flex;
    overflow: scroll;
    padding: 15px 0;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.cast-list-container::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.cast-list-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

.cast-item {
    margin-right: 16px;
    min-width: 100px;
}

.cast-img-container {
    border-radius: 8px;
    background: #dbdbdb;
    display: flex;
    margin-bottom: 8px;
    height: 150px;
    width: 100px;
}

.cast-img {
    height: 150px;
    width: 100px;
    border-radius: 8px;
    border-bottom-right-radius: unset;
}

.cast-name {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>