<template>
  <div class="">
    <div class="row">
      <div class="col-md-8">Checkout form</div>
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
export default {
  computed: {
    ...mapGetters(["itemsInBasket"]),
    ...mapState({
      basket: (state) => state.basket.items,
    }),
  },
};
</script>

<style scoped>
.h6-badge {
  font-size: 100%;
}
</style>