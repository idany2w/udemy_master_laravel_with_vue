<template>
    <div class="">

        <div class="form-group mb-3">
            <label clas="text-muted">Select the star rating (from 1 to 5)</label>
            <star-rating :rating="5" class="fa-3x"></star-rating>
        </div>

        <div class="form-group mb-3">
            <label for="content" class="text-muted">Describe your xp with </label>
            <textarea name="content" cols="30" rows="10" class="form-control"></textarea>
        </div>

        <div class="form-group">
            <button class="btn btn-lg btn-primary w-100">Submit</button>
        </div>
    </div>
</template>

<script>
export default {};
</script>