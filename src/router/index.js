import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import(/* webpackChunkName: "about" */ '../views/Main')
    },
    {
        path: '/chart',
        name: 'ToastChart',
        component: () => import(/* webpackChunkName: "about" */ '../views/ToastChart')
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

export default router
