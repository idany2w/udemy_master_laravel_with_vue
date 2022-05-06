<template>
  <div class="">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="alreadyReviewed">
        <p class="h3">You've already left a review for this booking!</p>
      </div>
      <div v-else>
        <div class="form-group mb-3">
          <label clas="text-muted">Select the star rating (from 1 to 5)</label>
          <star-rating class="fa-3x" v-model="review.rating"></star-rating>
        </div>

        <div class="form-group mb-3">
          <label for="content" class="text-muted">Describe your xp with </label>
          <textarea
            name="content"
            cols="30"
            rows="10"
            class="form-control"
            v-model="review.content"
          ></textarea>
        </div>

        <div class="form-group">
          <button class="btn btn-lg btn-primary w-100">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      review: {
        rating: 5,
        content: null,
      },
      existingReview: null,
      loading: false,
      booking: null,
    };
  },
  created() {
    this.loading = true;
    // 1 check in table
    axios
      .get(`/api/reviews/${this.$route.params.id}`)
      .then((response) => (this.existingReview = response.data.data))
      .catch((error) => {
        if (
          error.response &&
          error.response.status &&
          404 == error.response.status
        ) {
          return axios
            .get(`api/booking-by-review/${this.$route.params.id}`)
            .then((response) => {
              this.booking = response.data.data;
            });
        }
      })
      .then(() => {
        this.loading = false;
      });
    // 2 fetch a booking by a review key
    // 3 store the review
  },
  computed: {
    alreadyReviewed() {
      return this.existingReview != null;
    },
  },
};
</script>