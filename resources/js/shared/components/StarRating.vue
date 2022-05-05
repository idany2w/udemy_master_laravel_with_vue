<template>
  <div class="d-flex">
    <i
      class="fas fa-star"
      v-for="star in fullStars"
      :key="'fullstars' + star"
    ></i>
    <i class="fas fa-star-half-alt" v-if="halfStar"></i>
    <i
      class="far fa-star"
      v-for="star in emptySrats"
      :key="'emptySrats' + star"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number,
  },
  computed: {
    halfStar() {
      const fraction = Math.floor((this.rating - Math.floor(this.rating)) * 100);

      return (fraction > 0 && fraction < 50);
    },
    fullStars() {
      return Math.round(this.rating);
    },
    emptySrats() {
      return 5 - Math.ceil(this.rating);
    },
  },
};
</script>