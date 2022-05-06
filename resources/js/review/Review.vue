<template>
  <div class="row">
    <div
      :class="[
        { 'col-md-4': loading || !alreadyReviewed },
        { 'd-none': !loading && alreadyReviewed },
      ]"
    >
      <div class="card">
        <div class="card-body">
          <div v-if="loading">Loading...</div>
          <div v-else>
            <p>
              Stayed at
              <router-link
                :to="{
                  name: 'bookable',
                  params: { id: booking.bookable.bookable_id },
                }"
                >{{ booking.bookable.title }}</router-link
              >
            </p>
            <p>From {{ booking.from }} to {{ booking.to }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="[
        { 'col-md-8': loading || !alreadyReviewed },
        { 'col-md-12': !loading && alreadyReviewed },
      ]"
    >
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-if="alreadyReviewed">
          <p class="h3">You've already left a review for this booking!</p>
        </div>
        <div v-else>
          <div class="form-group mb-3">
            <label clas="text-muted"
              >Select the star rating (from 1 to 5)</label
            >
            <star-rating class="fa-3x" v-model="review.rating"></star-rating>
          </div>

          <div class="form-group mb-3">
            <label for="content" class="text-muted"
              >Describe your xp with
            </label>
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
    // 1. If review already exists (in reviews table by id)
    axios
      .get(`/api/reviews/${this.$route.params.id}`)
      .then((response) => {
        this.existingReview = response.data.data;
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.status &&
          404 === err.response.status
        ) {
          // 2. Fetch a booking by a review key
          return axios
            .get(`/api/booking-by-review/${this.$route.params.id}`)
            .then((response) => {
              this.booking = response.data.data;
            });
        }
      })
      .then(() => {
        this.loading = false;
      });
    // 3. Store the review
  },
  computed: {
    alreadyReviewed() {
      return this.hasReview || !this.booking;
    },
    hasReview() {
      return this.existingReview !== null;
    },
    hasBooking() {
      return this.booking !== null;
    },
  },
};
</script>