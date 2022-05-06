<template>
    <div class="text-center success">
        <i class="far fa-thumbs-up"></i>
        <h1 class="mt-4">Success!</h1>
        <p class="h2">
            <slot></slot>
        </p>
    </div>
</template>

<style scoped>
.success{
    color: #999;
    font-size: 10rem;
}
</style>