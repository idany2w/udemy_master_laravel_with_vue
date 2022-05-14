<template>
  <div class="">
    <p class="h6 text-uppercase text-secondary fw-bold">Price breakdown</p>

    <div
      v-for="(days, price) in price.breakdown"
      :key="price"
      class="py-2 border-top border-bottom d-flex justify-content-between"
    >
      <span>{{ days }} x ${{ price }}</span>
      <span>${{ days * price }}</span>
    </div>

    <div class="fw-bold mt-2 d-flex justify-content-between">
      <span>Total</span>
      <span>${{ price.total }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: Object,
  },
};
</script>