<script setup lang="ts">
import { computed, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const idCliente = ref(0)
//const nombreCliente = ref('')
const idLibro = ref(0)
//const nombreLibro = ref('')
const cantidad = ref(0)
const precioUnitario = ref(0)
const totalVenta = computed(()=>cantidad.value*precioUnitario.value)
const fechaEmision = ref('')

async function crearOrden() {
  await http
    .post(ENDPOINT, { 
      idCliente: idCliente.value,
      idLibro: idLibro.value,        
      cantidad: cantidad.value, 
      precioUnitario: precioUnitario.value,
      totalVenta: totalVenta.value, 
      fechaEmision: fechaEmision.value,   
    })
    .then(() => router.push('/ordenes'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <!-- MENU inicio/ordenes   crear nuevo-->
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/ordenes">Ordenes</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nueva Orden de Ventas</h2>
    </div>

    <!-- CREACION DE UNA NUEVA ORDEN-->

    <div class="row">
      <form @submit.prevent="crearOrden">

        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="idCliente" placeholder="IdCliente" required />
          <label for="idCliente">Id Cliente</label>
        </div>

        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="idLibro" placeholder="IdLibro" required />
          <label for="idLibro">Id Libro</label>
        </div>

        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="cantidad"
            placeholder="Cantidad"
            required
          />
          <label for="cantidad">Cantidad</label>
        </div>

        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="precioUnitario"
            placeholder="PrecioUnitario"
            required
          />
          <label for="precioUnitario">Precio Unitario</label>
        </div>

        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="totalVenta"
            placeholder="TotalVenta"
            required readonly
          />
          <label for="totalVenta">Total Venta</label>
        </div>

        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            v-model="fechaEmision"
            placeholder="FechaEmision"
            required
          />
          <label for="fechaEmision">Fecha Emision</label>
        </div>

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Crear</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
