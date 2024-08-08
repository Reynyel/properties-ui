import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue';
import ExclusiveListings from '../views/ExclusiveListings.vue';
import OpenHouses from '../views/OpenHouses.vue';
import SoldListings from '../views/SoldListings.vue';
import Details from '../views/Details.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  
    {
      path: '/exclusivelistings',
      name: 'exclusive_listings',
      component: ExclusiveListings
    }
  
    ,
  
    {
      path: '/openhouses',
      name: 'open_houses',
      component: OpenHouses
    }
  
    ,
  
    {
      path: '/soldlistings',
      name: 'sold_listings',
      component: SoldListings
    },
  
    {
      path: '/details',
      name: 'details',
      component: Details
    }
  ]
})

export default router
