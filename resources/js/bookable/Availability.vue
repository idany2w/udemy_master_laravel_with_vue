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
        <button class="btn btn-secondary d-block w-100" @click="check">Check</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: "2022-05-02",
      to: null,
    };
  },
  methods: {
    check() {
      alert("I wil check something now");
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