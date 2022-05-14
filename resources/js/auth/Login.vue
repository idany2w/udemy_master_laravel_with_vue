<template>
  <div class="w-50 m-auto">
    <div class="card card-body">
      <form class="row g-3">
        <div class="col-12">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            class="form-control"
            v-model="email"
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
            v-model="password"
            :class="[
              {
                'is-invalid': errorFor('password'),
              },
            ]"
          />
          <v-errors :errors="errorFor('password')"></v-errors>
        </div>
        <div class="col-12">
          <button
            type="submit"
            class="btn btn-secondary d-block w-100"
            :disabled="loading"
            @click.prevent="login"
          >
            Log-in
          </button>
        </div>
        <div class="col-12">
          <hr />
        </div>
        <div class="col-12">
          <div class="">
            No account yet?
            <router-link
              :to="{ name: 'home' }"
              class="fw-bold text-decoration-none text-secondary"
              >Register</router-link
            >
          </div>
          <div class="">
            Forgotten password?
            <router-link
              :to="{ name: 'home' }"
              class="fw-bold text-decoration-none text-secondary"
              >Reset</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import validationErrors from "../shared/mixins/validationErrors";

export default {
  mixins: [validationErrors],
  data() {
    return {
      email:  null,
      password:  null,
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.errors = null;

      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/login", {
          email: this.email,
          password: this.password,
        });
        await axios.get("/user");
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }

      this.loading = false;
    },
  },
};
</script>