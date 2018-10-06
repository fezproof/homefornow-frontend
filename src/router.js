import Vue from 'vue';
import Router from 'vue-router';


import Landing from './views/Landing.vue';

import Home from './components/Landing/Home.vue';
import About from './components/Landing/About.vue';
import TermsOfUse from './components/Landing/TermsOfUse.vue';
import Contact from './components/Landing/Contact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/terms_of_use',
          name: 'terms_of_use',
          component: TermsOfUse,
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact,
        },
      ],
    },
  ],
});
