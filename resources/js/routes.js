import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import BookableListItem from "./bookables/BookableListItem";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path: "/second",
        component: Bookables,
        name: "second"
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router;