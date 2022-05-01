<template>
  <div class="card w-100">
    <div class="card-body">
      <router-link :to="{ name: 'bookable', params: { id} }">
        <p class="h5 class-title">{{ title }}</p>
      </router-link>
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
