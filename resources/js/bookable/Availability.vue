<template>
  <div>
    <p class="h6 text-uppercase text-secondary font-weight-bolder">
      Check Availability
    </p>

    <div class="row gy-3">
      <div class="form-group col-md-6">
        <label for="from">From</label>
        <input
          type="text"
          name="from"
          class="form-control form-control-sm"
          placeholder="Start date"
          v-model="from"
          value="Initial"
          @keyup.enter="check"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="to">To</label>
        <input
          type="text"
          name="to"
          class="form-control form-control-sm"
          placeholder="End date"
          value="Initial"
          v-model="to"
          @keyup.enter="check"
        />
      </div>
      <div class="col">
        <button
          class="btn btn-secondary d-block w-100"
          @click="check"
          :disabled="loading"
        >
          Check
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: null,
      to: null,
      loading: false,
      status: null,
      errors: null,
    };
  },
  methods: {
    check() {
      this.loading = true;
      this.errors = null;
      
      axios
        .get(
          `/api/bookables/${this.$route.params.id}/availability?from=${this.from}&to=${this.to}`
        )
        .then((response) => {
          this.status = response.status;
        })
        .catch((error) => {
          if (422 == error.response.status) {
            this.errors = error.response.data.errors;
          }

          this.status = error.response.status;
        })
        .then(() => {
          this.loading = false;
        });
    },
  },
};
</script>


<style scoped>
label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: gray;
  font-weight: bolder;
}
</style>