<template>
  <div class="card-body py-4">
    <p class="h6 text-uppercase text-secondary font-wight-bolder">ReviewList</p>

    <div v-if="loading">Loading...</div>
    <div v-else>
      <div
        class="border-bottom py-3"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <div class="row mb-3">
          <div class="col-md-6">John Doe</div>
          <div class="col-md-6 d-flex justify-content-end">
            {{ review.rating }}
            <star-rating></star-rating>
          </div>
        </div>
        <div class="row">
          <div class="col">{{ review.created_at | fromNow }}</div>
        </div>
        <div class="row">
          <div class="col">{{ review.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bookableId: String,
  },
  data() {
    return {
      loading: false,
      reviews: null,
    };
  },
  created() {
    this.loading = true;
    axios
      .get(`/api/bookables/${this.bookableId}/reviews`)
      .then((response) => (this.reviews = response.data.data))
      .then(() => (this.loading = false));
  },
};
</script>