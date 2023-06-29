import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import { useAuthStore } from "@/stores";
import { getTokenFromLocalStorage } from "@/helpers";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    { 
      path: "/login", 
      name: "login", 
      component: LoginView 
    },

    {
      path: "/clientes",
      name: "clientes",
      component: () => import("../views/ClienteView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/cliente/ClienteList.vue"),
        },
        {
          path: "crear",
          component: () => import("../components/cliente/ClienteCreate.vue"),
        },
        {
          path: "editar/:id",
          component: () => import("../components/cliente/ClienteEdit.vue"),
        },
      ],
    },

    {
      path: "/libros",
      name: "libros",
      component: () => import("../views/LibroView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/libro/LibroList.vue"),
        },
        {
          path: "crear",
          component: () => import("../components/libro/LibroCreate.vue"),
        },
        {
          path: "editar/:id",
          component: () => import("../components/libro/LibroEdit.vue"),
        },
      ],
    },

    {
      path: "/ordenes",
      name: "ordenes",
      component: () => import("../views/OrdenView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/orden/OrdenList.vue"),
        },
        {
          path: "crear",
          component: () => import("../components/orden/OrdenCreate.vue"),
        },
        {
          path: "editar/:id",
          component: () => import("../components/orden/OrdenEdit.vue"),
        },
      ],
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/libro1",
      name: "libro1",
      // route level code-splitting
      // this generates a separate chunk (Libro1.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Libro1View.vue"),
    },

    {
      path: "/libro2",
      name: "libro2",
      // route level code-splitting
      // this generates a separate chunk (Libro2.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Libro2View.vue"),
    },

    {
      path: "/libritos",
      name: "libritos",
      // route level code-splitting
      // this generates a separate chunk (Libro2.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LibritosView.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();
  // DESHABILITA EL LOGUEO DEL USUARIO
  //  if (authRequired && !getTokenFromLocalStorage()) {
  //      if (authStore) authStore.logout();
  //     authStore.returnUrl = to.fullPath;
  //      return "/login";
  //    }
});
export default router
