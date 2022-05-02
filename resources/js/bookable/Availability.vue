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
          v-model="from"
          class="form-control form-control-sm"
          placeholder="Start date"
          value="Initial"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="to">To</label>
        <input
          type="text"
          name="to"
          v-model="to"
          class="form-control form-control-sm"
          placeholder="End date"
          value="Initial"
        />
      </div>
      <div class="col">
        <button class="btn btn-secondary d-block w-100">Check</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        from: "2022-05-02",
        to: null
    };
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