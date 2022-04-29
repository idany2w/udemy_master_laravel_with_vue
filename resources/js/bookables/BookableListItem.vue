<template>
  <div class="card">
    <div class="card-body">
      <p class="h5 class-title">{{ itemTitle }}</p>
      <p class="card-text">{{ itemContent }}</p>
    </div>
    <h1></h1>
  </div>
</template>

<script>
export default {
  props: {
    itemTitle: String,
    itemContent: String,
    price: Number,
  },
};
</script>
