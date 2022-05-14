<template>
  <div class="w-50 m-auto">
    <div class="card card-body">
      <form class="row g-3">
        <div class="col-12">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            class="form-control"
            v-model="user.name"
            :class="[
              {
                'is-invalid': errorFor('name'),
              },
            ]"
          />
          <v-errors :errors="errorFor('email')"></v-errors>
        </div>
        <div class="col-12">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            class="form-control"
            v-model="user.email"
            :class="[
              {
                'is-invalid': errorFor('email'),
              },
            ]"
          />
          <v-errors :errors="errorFor('email')"></v-errors>
        </div>
        <div class="col-12">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            class="form-control"
            v-model="user.password"
            :class="[
              {
                'is-invalid': errorFor('password'),
              },
            ]"
          />
          <v-errors :errors="errorFor('password')"></v-errors>
        </div>
        <div class="col-12">
          <label for="password_confirmation">Re-type Password</label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm your password"
            class="form-control"
            v-model="user.password_confirmation"
            :class="[
              {
                'is-invalid': errorFor('password_confirmation'),
              },
            ]"
          />
          <v-errors :errors="errorFor('password_confirmation')"></v-errors>
        </div>
        <div class="col-12">
          <button
            type="submit"
            class="btn btn-secondary d-block w-100"
            :disabled="loading"
            @click.prevent="register"
          >
            Register
          </button>
        </div>
        <div class="col-12">
          <hr />
        </div>
        <div class="col-12">
          <div class="">
            Already have an account?
            <router-link
              :to="{ name: 'login' }"
              class="fw-bold text-decoration-none text-secondary"
              >Log-in</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import validationErrors from "../shared/mixins/validationErrors";
import { logIn } from "../shared/utils/auth";

export default {
  mixins: [validationErrors],
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      loading: false,
    };
  },
  methods: {
    async register() {
      this.loading = true;
      this.errors = null;

      try {
        const response = await axios.post("/register", this.user);

        if (201 == response.status) {
          logIn();
          this.$store.dispatch("loadUser");
          this.$router.push({ name: "home" });
        }
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }

      this.loading = false;
    },
  },
};
</script>