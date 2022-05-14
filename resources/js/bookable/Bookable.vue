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
        <price-breakdown
          v-if="price"
          :price="price"
          class="mb-3"
        ></price-breakdown>
      </transition>

      <transition name="fade">
        <button
          class="btn btn-outline-secondary d-block w-100 mb-2"
          v-if="price"
          @click="addToBasket"
          :disabled="inBasketAlready"
        >
          Book now
        </button>
      </transition>

      <transition name="fade">
        <button
          class="btn btn-outline-secondary d-block w-100"
          v-if="inBasketAlready"
          @click="removeFromBasket"
        >
          Remove form basket
        </button>
      </transition>

      <transition name="fade">
        <div v-if="inBasketAlready" class="mt-4 text-muted warning">
          Seems like you've added this object to basket already. If you want to
          change dates, remove from the basket first.
        </div>
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
  computed: {
    ...mapState({
      lastSearch: "lastSearch",
    }),
    inBasketAlready() {
      if (null === this.bookable) {
        return false;
      }
      return this.$store.getters.inBasketAlready(this.bookable.id);
    },
  },
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
    addToBasket() {
      this.$store.commit("addToBasket", {
        bookable: this.bookable,
        price: this.price,
        dates: this.lastSearch,
      });
    },
    removeFromBasket() {
      this.$store.commit("removeFromBasket", this.bookable.id);
    },
  },
};
</script>


<style scoped>
.warning {
  font-size: 0.7rem;
}
</style>