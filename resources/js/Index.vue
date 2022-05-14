<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white border-bottom navbar-light">
      <router-link
        class="navbar-brand mr-auto btn nav-button"
        :to="{ name: 'home' }"
        >LaravelBnb</router-link
      >

      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'basket' }">
            Basket
            <span v-if="itemsInBasket" class="badge bg-secondary">{{ itemsInBasket }}</span>
          </router-link>
        </li>

        <li class="nav-item" v-if="!isLoggedIn">
          <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
        </li>

        <li class="nav-item" v-if="!isLoggedIn">
          <router-link :to="{name: 'login'}" class="nav-link">Sign-in</router-link>
        </li>
        
        <li class="nav-item" v-if="isLoggedIn">
          <a href="#" class="nav-link" @click.prevent="logout">Logout</a>
        </li>
      </ul>

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
      isLoggedIn: "isLoggedIn",
    }),
    ...mapGetters({
      itemsInBasket: "itemsInBasket",
    }),
    somthingElse() {
      return "foo";
    },
  },
  methods: {
    async logout(){
      try {
        axios.post('logout');
        this.$store.dispatch('logout');
      } catch (error) {
        this.$store.dispatch('logout');
      }
    }
  }
};
</script>