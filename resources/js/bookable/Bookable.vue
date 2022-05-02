<template>
  <div class="row gy-4">
    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <div v-if="loading">Loading ...</div>
          <div v-else>
            <h1 class="h2">{{ bookable.title }}</h1>
            <hr />
            <article>{{ bookable.description }}</article>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <availability></availability>
    </div>
  </div>
</template>

<script>
import Availability from "./Availability";
export default {
  components: {
    Availability,
  },
  data() {
    return {
      bookable: null,
      loading: false,
    };
  },
  created() {
    this.loading = true;
    axios.get(`/api/bookables/${this.$route.params.id}`).then((response) => {
      this.bookable = response.data.data;
      this.loading = false;
    });
  },
};
</script>
