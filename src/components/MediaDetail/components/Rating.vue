<template>
    <div class="rating">
        <img
            class="star"
            v-for="index in roundedRate"
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
export default {
    name: "Rating",
    props: {
        rating: {
            type: Number,
            required: true,
        },
    },
    computed: {
        rateInFive() {
            return this.rating / 2.0;
        },
        roundedRate() {
            return Math.round(this.rateInFive);
        },
        emptyStars() {
            return 5 - this.roundedRate;
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