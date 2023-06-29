<script setup lang="ts">

import "@/assets/js/jquery.min.js";
import "@/assets/js/bootstrap.min.js";
import "@/assets/js/jquery.sticky.js";
import "@/assets/js/click-scroll.js";
import "./assets/js/custom.js";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
//import { useAuthStore } from "@/stores/index";
//const authStore = useAuthStore();
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <!-- <div class="wrapper">
      <HelloWorld :msg="'SIS257' + (authStore.user ? ' - Hola ' + authStore.user : '')" />

      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink v-if="!authStore.token" to="/login">Iniciar Sesión</RouterLink>
        <span v-else>
          <RouterLink to="/clientes">Clientes</RouterLink>
          <RouterLink to="/about">Acerca De</RouterLink>
          <a @click="authStore.logout()" class="text-danger">Salir</a>
        </span>
      </nav>
    </div> -->
  </main>
  <Footer />
</template>

<style>
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/bootstrap-icons.css";
@import "@/assets/css/templatemo-festava-live.css";
@import "@/assets/css/style.css";
@import "@/assets/css/bootstrap.css";
@import "@/assets/css/templatemo-edu-meeting.css";
@import "@/assets/css/fontawesome.css";
@import "@/assets/css/owl.css";
@import "@/assets/css/lightbox.css";


</style>
