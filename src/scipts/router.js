import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomePage.vue'
import ContactsView from '../views/ContactsPage.vue'
import ProjectView from '@/views/ProjectPage.vue'
const routes = [
  { path: '', component: HomeView },
  { path: '/', component: HomeView, props: true },
  { path: '/project/:id', name: "Project", component: ProjectView, props: true },
  { path: '/contacts', name: "contacts", component: ContactsView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    else if (SavedPosition) {
      return SavedPosition;
    }
    return { top: 0 };
  }
});

export default router