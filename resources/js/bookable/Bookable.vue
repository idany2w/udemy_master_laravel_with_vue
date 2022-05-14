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
      <review-list :bookable-id="this.$route.params.id"></review-list>
    </div>
    <div class="col-md-4">
      <availability
        :bookable-id="this.$route.params.id"
        @availability="checkPrice($event)"
        class="mb-3"
      ></availability>

      <transition name="fade">
        <price-breakdown v-if="price" :price="price" class="mb-3"></price-breakdown>
      </transition>

      <transition name="fade">
        <button class="btn btn-outline-secondary d-block w-100" v-if="price">
          Book now
        </button>
      </transition>

    </div>
  </div>
</template>

<script>
import Availability from "./Availability";
import ReviewList from "./ReviewList";
import PriceBreakdown from "./PriceBrreakdown";
import { mapState } from "vuex";

export default {
  components: {
    Availability,
    ReviewList,
    PriceBreakdown,
  },
  data() {
    return {
      bookable: null,
      loading: false,
      price: null,
    };
  },
  created() {
    this.loading = true;
    axios.get(`/api/bookables/${this.$route.params.id}`).then((response) => {
      this.bookable = response.data.data;
      this.loading = false;
    });
  },
  computed: mapState({
    lastSearch: "lastSearch",
  }),
  methods: {
    async checkPrice(hasAvailability) {
      if (!hasAvailability) {
        this.price = null;
        return;
      }

      try {
        this.price = (
          await axios.get(
            `/api/bookables/${this.bookable.id}/price?from=${this.lastSearch.from}&to=${this.lastSearch.to}`
          )
        ).data.data;
      } catch (error) {
        this.price = null;
      }
    },
  },
};
</script>
