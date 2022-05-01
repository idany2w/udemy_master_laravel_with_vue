<template>
  <div class="card w-100">
    <div class="card-body">
      <p class="h5 class-title">{{ title }}</p>
      <p class="card-text">{{ description }}</p>
    </div>
    <h1></h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    id: Number,
  },
};
</script>
