import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import Projects from './pages/Projects.vue';
import ProjectPage from './pages/ProjectPage.vue';
import ContactUs from './pages/ContactUs.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path : '/',
            name : 'home',
            component : HomePage
        },
        {
            path: '/about-us',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/projects/:slug',
            name: 'project-page',
            component: ProjectPage
        },
        {
            path: '/contact-us',
            name: 'contacts',
            component: ContactUs
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export { router }