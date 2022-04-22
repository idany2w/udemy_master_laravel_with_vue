<template>
    <div>
        <router-link v-bind:to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'second', params: {test: 123}}">Second</router-link>
        <router-view></router-view>
    </div>
</template>