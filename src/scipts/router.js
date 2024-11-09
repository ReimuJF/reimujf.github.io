import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomePage.vue';
import ContactsView from '../views/ContactsPage.vue';
import ProjectView from '@/views/ProjectPage.vue';
import NotFound from '@/views/NotFoundView.vue';
const routes = [
  { path: '/', component: HomeView, props: true },
  { path: '/project/:id', name: "Project", component: ProjectView, props: true },
  { path: '/contacts', name: "Contacts", component: ContactsView, props: true },
  {path: "/:pathMatch(.*)*", name: "Not Found", component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
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