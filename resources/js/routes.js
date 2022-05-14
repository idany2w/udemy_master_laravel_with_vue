import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: require("./bookables/Bookables").default,
        name: "home"
    },
    {
        path: "/bookable/:id",
        component: require("./bookable/Bookable").default,
        name: "bookable"
    },
    {
        path: "/review/:id",
        component: require("./review/Review").default,
        name: "review"
    },
    {
        path: "/basket",
        component: require("./basket/Basket").default,
        name: "basket"
    },
    {
        path: "/auth/login",
        component: require("./auth/Login").default,
        name: "login"
    },
    {
        path: "/auth/register",
        component: require("./auth/Register").default,
        name: "register"
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router;