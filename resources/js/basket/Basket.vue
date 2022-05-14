<template>
  <div class="">
    <div class="row">
      <div class="col-md-8">
        <div class="row g-3">
          <div class="col-md-6">
            <label for="first_name">First name</label>
            <input
              type="text"
              class="form-control bg-white"
              name="first_name"
              v-model="customer.first_name"
            />
          </div>
          <div class="col-md-6">
            <label for="last_name">Last name</label>
            <input
              type="text"
              class="form-control bg-white"
              name="last_name"
              v-model="customer.last_name"
            />
          </div>
          <div class="col-md-12">
            <label for="email">Email</label>
            <input
              type="text"
              class="form-control bg-white"
              name="email"
              v-model="customer.email"
            />
          </div>
          <div class="col-md-6">
            <label for="street">Street</label>
            <input
              type="text"
              class="form-control bg-white"
              name="street"
              v-model="customer.street"
            />
          </div>
          <div class="col-md-6">
            <label for="city">City</label>
            <input
              type="text"
              class="form-control bg-white"
              name="city"
              v-model="customer.city"
            />
          </div>
          <div class="col-md-6">
            <label for="Country">Country</label>
            <input
              type="text"
              class="form-control bg-white"
              name="country"
              v-model="customer.country"
            />
          </div>
          <div class="col-md-4">
            <label for="state">State</label>
            <input
              type="text"
              class="form-control bg-white"
              name="state"
              v-model="customer.state"
            />
          </div>
          <div class="col-md-2">
            <label for="zip">Zip</label>
            <input
              type="text"
              class="form-control bg-white"
              name="zip"
              v-model="customer.zip"
            />
          </div>
          <div class="col-12"><hr /></div>
          <div class="col-12">
            <button
              class="btn btn-secondary d-block w-100"
              @click.prevent="book"
            >
              Book now!
            </button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="d-flex justify-content-between align-items-center">
          <p class="h6 text-uppercase text-secondary fw-bold">Your Cart</p>
          <p class="h6-badge badge bg-secondary text-uppercase">
            <span v-if="itemsInBasket">Items {{ itemsInBasket }}</span>
            <span v-else>Empty</span>
          </p>
        </div>

        <transition-group name="fade" tag="div">
          <div v-for="item in basket" :key="item.bookable.id">
            <div class="py-2 border-top d-flex justify-content-between">
              <span>
                <router-link
                  class="text-dark text-decoration-none"
                  :to="{ name: 'bookable', params: { id: item.bookable.id } }"
                  >{{ item.bookable.title }}</router-link
                >
              </span>
              <span class="fw-bold">${{ item.price.total }}</span>
            </div>

            <div class="py-2 d-flex justify-content-between">
              <span>From {{ item.dates.from }}</span>
              <span>To {{ item.dates.to }}</span>
            </div>

            <div class="py-2 text-end">
              <button
                class="btn btn-sm btn-outline-secondary"
                @click="$store.dispatch('removeFromBasket', item.bookable.id)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import validationErrors from "../shared/mixins/validationErrors";
export default {
  mixins: [validationErrors],
  data() {
    return {
      loading: false,
      customer: {
        first_name: null,
        last_name: null,
        email: null,
        street: null,
        city: null,
        country: null,
        state: null,
        zip: null,
      },
    };
  },
  computed: {
    ...mapGetters(["itemsInBasket"]),
    ...mapState({
      basket: (state) => state.basket.items,
    }),
  },
  methods: {
    async book() {
      this.loading = true;
      try {
        await axios.post(`/api/checkout`, {
          customer: this.customer,
          bookings: this.basket.map((basketItem) => ({
            bookable_id: basketItem.bookable.id,
            from: basketItem.dates.from,
            to: basketItem.dates.to,
          })),
          
        });
      } catch (error) {}
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.h6-badge {
  font-size: 100%;
}
</style>