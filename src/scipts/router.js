import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomePage.vue'
import ContactsView from '../views/ContactsPage.vue'

const routes = [
  { path: '/', component: HomeView, props: true },
  { path: '/contacts', name:"contacts", component: ContactsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, SavedPosition) {
    if (to.hash) {
        return {el: to.hash, behavior: "smooth"};  
    }
    else if (SavedPosition) {
        return SavedPosition;
    }
    return {top: 0};
    }
});

export default router