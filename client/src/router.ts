import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Settings from './views/Settings.vue';

Vue.use(Router);

// Add support for icon in RouteConfig
interface Route extends RouteConfig {
  icon?: string;
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/settings/',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/login/',
    name: 'login',
    component: Login,
  },
];

export default new Router({
  base: '/',
  routes,
});
