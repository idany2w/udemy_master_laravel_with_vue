require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./routes";
import Index from "./Index";
import moment from "moment";

window.Vue = require('vue').default;

Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index
    }
});