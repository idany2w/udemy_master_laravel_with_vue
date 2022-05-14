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
          />
        </div>
        <div class="col-12">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            class="form-control"
            v-model="password"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary d-block w-100">
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
              class="fw-bold text-decoration-none"
              >Register</router-link
            >
          </div>
          <div class="">
            Forgotten password?
            <router-link
              :to="{ name: 'home' }"
              class="fw-bold text-decoration-none"
              >Reset</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>