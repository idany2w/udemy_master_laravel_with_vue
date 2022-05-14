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
        <div v-for="item in basket" :key="item.bookable.id">
            
        </div>
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