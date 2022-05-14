<template>
  <div>
    <nav class="navbar bg-white border-bottom navbar-light">
      <router-link
        class="navbar-brand mr-auto btn nav-button"
        :to="{ name: 'home' }"
        >LaravelBnb</router-link
      >

      <router-link class="btn nav-button" :to="{ name: 'home' }">
        Basket
        <span v-if="itemsInBakset" class="badge bg-secondary">{{ itemsInBakset }}</span>
      </router-link>
    </nav>

    <div class="container mt-4 mb-4 pr-4 pl-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      lastSearch: this.$store.state.lastSearch,
    };
  },
  computed: {
    ...mapState({
      lastSearchComputed: "lastSearch",
    }),
    ...mapGetters({
      itemsInBakset: "itemsInBakset",
    }),
    somthingElse() {
      return "foo";
    },
  },
};
</script>