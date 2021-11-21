<template>
    <div class="rating">
        <img
            class="star"
            v-for="index in fullStars"
            :key="`sf-${index}`"
            src="@/assets/star-full.png"
        />
        <img
            class="star"
            v-for="index in emptyStars"
            :key="`se-${index}`"
            src="@/assets/star-empty.png"
        />
    </div>
</template>

<script>
const totalStarNumber = 5;
const translationValue = 2.0;

export default {
    name: "Rating",
    props: {
        rating: {
            type: Number,
            required: true,
        },
    },
    computed: {
        currentRate() {
            return this.rating / translationValue;
        },
        fullStars() {
            return Math.round(this.currentRate);
        },
        emptyStars() {
            return totalStarNumber - this.fullStars;
        },
    },
};
</script>

<style>
.rating {
    display: flex;
    align-items: center;
    justify-content: center;
}

.star {
    width: 25px;
    height: 25px;
    margin-right: 5px;
}
</style>