<template>
  <div>
    <p class="h6 text-uppercase text-secondary font-weight-bolder">
      Check Availability
      <span v-if="noAvailability" class="text-danger">(Not available)</span>
      <span v-if="hasAvailability" class="text-success">(Available)</span>
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
          :class="[
            {
              'is-invalid': this.errorFor('from'),
            },
          ]"
        />
        <div
          class="invalid-feedback"
          v-for="(error, index) in this.errorFor('from')"
          :key="'from' + index"
        >{{ error }}</div>
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
          :class="[
            {
              'is-invalid': this.errorFor('to'),
            },
          ]"
        />
        <div
          class="invalid-feedback"
          v-for="(error, index) in this.errorFor('to')"
          :key="'to' + index"
        >{{ error }}</div>
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
    errorFor(field) {
      return this.hasErrors && this.errors[field] ? this.errors[field] : null;
    },
  },
  computed: {
    hasErrors() {
      return 422 == this.status && this.errors != null;
    },
    hasAvailability() {
      return 200 == this.status;
    },
    noAvailability() {
      return 404 == this.status;
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

.is-invalid {
  transform: rotate(360deg);
  transition: transform 0.25s;
}
</style>