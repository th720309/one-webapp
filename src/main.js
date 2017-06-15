// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import home from 'components/home/home';
import read from 'components/read/read';
import music from 'components/music/music';
import movie from 'components/movie/movie';
import readcontent from 'components/readcontent/readcontent.vue';
import moviecontent from 'components/moviecontent/moviecontent.vue';
import musiccontent from 'components/musiccontent/musiccontent.vue';
import 'common/stylus/index.styl';
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/home', component: home },
  { path: '/read', component: read },
  { path: '/music', component: music },
  { path: '/movie', component: movie },
  { path: '/readcontent/', component: readcontent },
  { path: '/musiccontent/', component: musiccontent },
  { path: '/moviecontent/', component: moviecontent }
];
let router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app');
/* eslint-disable eol-last */
router.push('/home');
