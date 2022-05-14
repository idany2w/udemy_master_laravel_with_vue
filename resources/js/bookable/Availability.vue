<template>
  <div>
    <p class="h6 text-uppercase text-secondary font-weight-bolder">
      Check Availability
      <transition name="fade">
        <span v-if="noAvailability" class="text-danger">(Not available)</span>
        <span v-if="hasAvailability" class="text-success">(Available)</span>
      </transition>
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
              'is-invalid': errorFor('from'),
            },
          ]"
        />
        <v-errors :errors="errorFor('from')"></v-errors>
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
              'is-invalid': errorFor('to'),
            },
          ]"
        />
        <v-errors :errors="errorFor('to')"></v-errors>
      </div>
      <div class="col">
        <button
          class="btn btn-secondary d-block w-100"
          @click="check"
          :disabled="loading"
        >
          <span v-if="!loading">Check!</span>
          <span v-if="loading"
            ><i class="fas fa-circle-notch fa-spin"></i> Checking...</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { is422 } from "./../shared/utils/response";
import validationErrors from "./../shared/mixins/validationErrors";

export default {
  mixins: [validationErrors],
  props: {
    bookableId: [String, Number],
  },
  data() {
    return {
      from: this.$store.state.lastSearch.from || null,
      to: this.$store.state.lastSearch.to || null,
      loading: false,
      status: null,
    };
  },
  methods: {
    async check() {
      this.loading = true;
      this.errors = null;

      this.$store.dispatch("setLastSearch", {
        from: this.from,
        to: this.to,
      });

      try {
        this.status = (
          await axios.get(
            `/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`
          )
        ).status;

        this.$emit("availability", this.hasAvailability);
      } catch (error) {
        if (is422(error)) {
          this.errors = error.response.data.errors;
        }

        this.status = error.response.status;
        this.$emit("availability", this.hasAvailability);
      }

      this.loading = false;
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
