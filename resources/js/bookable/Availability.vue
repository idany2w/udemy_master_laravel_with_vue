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
        />
      </div>
      <div class="form-group col-md-6">
        <label for="to">To</label>
        <input
          type="text"
          name="to"
          class="form-control form-control-sm"
          placeholder="End date"
        />
      </div>
      <div class="col">
        <button class="btn btn-secondary d-block w-100">Check</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: gray;
  font-weight: bolder;
}
</style>