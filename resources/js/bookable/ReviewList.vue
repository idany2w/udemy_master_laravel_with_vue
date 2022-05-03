<template>
    <div class="card-body py-4">
        <p class="h6 text-uppercase text-secondary font-wight-bolder">ReviewList</p>

        <div class="border-bottom py-3" v-for="index in 3" :key="'review'+index">
            <div class="row mb-3">
                <div class="col-md-6">John Doe</div>
                <div class="col-md-6 d-flex justify-content-end">STAR RATING</div>
            </div>
            <div class="row">
                <div class="col">Added 5 min. ago</div>
            </div>
            <div class="row">
                <div class="col">Content of the review</div>
            </div>
        </div>
    </div>
</template>