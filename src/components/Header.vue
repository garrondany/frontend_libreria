<script setup lang="ts">
import { useAuthStore } from "@/stores/index";
const authStore = useAuthStore();
import { useRoute } from "vue-router";
const location = useRoute();
</script>
<template>
  <header class="site-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12 d-flex flex-wrap">
          <p class="d-flex me-4 mb-0">
            <i class="bi-person custom-icon me-2"></i>
            <strong class="logo m-0 float-start">BIENVENIDO A BOOK</strong>
          </p>
        </div>
      </div>
    </div>
  </header>

  <nav class="navbar navbar-expand-lg" :style="location.path != '/' ? 'background-color: black !important' : ''">
    <div class="container">

      <RouterLink to="/" class="navbar-brand"> BOOK 2023</RouterLink>
      <!--  navbar-brand   -->
      <!-- <a href="#section_1" class="btn custom-btn d-lg-none ms-auto me-4">Iniciar Sesión</a> -->
      <RouterLink v-if="!useAuthStore.token" to="/login" class="btn custom-btn d-lg-none ms-auto me-4">
        Iniciar Sesión
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav align-items-lg-center ms-auto me-lg-5">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link click-scroll">Inicio</RouterLink>
          </li>

          <li class="nav-item">
            <!-- <RouterLink to="/clientes" class="nav-link click-scroll">Clientes</RouterLink> -->
            <RouterLink v-if="authStore.token" to="/clientes" class="nav-link click-scroll">Clientes</RouterLink>
          </li>

          <li class="nav-item">
            <!-- <RouterLink to="/libros" class="nav-link click-scroll">Libros</RouterLink> -->
            <RouterLink v-if="authStore.token" to="/libros" class="nav-link click-scroll">Libros</RouterLink>
          </li>

          <li class="nav-item">
            <!-- <RouterLink to="/ordenes" class="nav-link click-scroll">Ordenes</RouterLink> -->
            <RouterLink v-if="authStore.token" to="/ordenes" class="nav-link click-scroll">Ordenes</RouterLink>

          </li>
          <li class="nav-item">
            <RouterLink to="/libritos" class="nav-link click-scroll">Catálogo</RouterLink>
            <!-- <RouterLink v-if="authStore.token" to="/ordenes" class="nav-link click-scroll">Ordenes</RouterLink> -->
          </li>

          <li class="nav-item">
            <RouterLink to="/about" class="nav-link click-scroll">Acerca De</RouterLink>
          </li>


        </ul>

        <!-- <a href="/" class="btn custom-btn d-lg-block d-none"
          >Iniciar Sesión</a
        > -->

        <RouterLink v-if="!authStore.token" to="/login" class="btn custom-btn d-lg-block d-none">
          Iniciar Sesión
        </RouterLink>
        <a v-else @click="authStore.logout()" class="btn custom-btn d-lg-block d-none">
          Cerrar Sesión
        </a>

      </div>
    </div>
  </nav>
</template>