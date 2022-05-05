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
      return 1;
    },
    fullStars() {
      return 3;
    },
    emptySrats() {
      return 1;
    },
  },
};
</script>