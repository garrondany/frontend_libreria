<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
    ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const idCliente = ref(0)
const nombreCliente = ref('')
const idLibro = ref(0)
const nombreLibro = ref('')
const cantidad = ref(0)
const precioUnitario = ref(0)
const totalVenta = ref(0)
const fechaEmision = ref('')
const id = router.currentRoute.value.params['id']

async function editarOrden() {
    await http
        .patch(`${ENDPOINT}/${id}`, {
            idCliente: idCliente.value,
            idLibro: idLibro.value,
            cantidad: cantidad.value,
            precioUnitario: precioUnitario.value,
            totalVenta: totalVenta.value,
            fechaEmision: fechaEmision.value
        })
        .then(() => router.push('/ordenes'))
}

async function getOrden() {
    await http.get(`${ENDPOINT}/${id}`).then((response) => {; 
        (idCliente.value = response.data.idCliente),
        (nombreCliente.value = response.data.nombreCliente),
        (idLibro.value = response.data.idLibro),
        (nombreLibro.value = response.data.nombreLibro),
        (cantidad.value = response.data.cantidad),
        (precioUnitario.value = response.data.precioUnitario),
        (totalVenta.value = response.data.totalVenta),
        (fechaEmision.value = response.data.fechaEmision)
    })
}

function goBack() {
    router.go(-1)
}

onMounted(() => {
    getOrden()
})
</script>

<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item">
                    <RouterLink to="/ordenes">Ordenes</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Editar</li>
            </ol>
        </nav>

        <div class="row">
            <h2>Editar Orden</h2>
        </div>

        <div class="row">
            <form @submit.prevent="editarOrden">

                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model="idCliente" placeholder="IdCliente" required />
                    <label for="idCliente">Id Cliente</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model="idLibro" placeholder="IdLibro" required />
                    <label for="idLibro">Id Libro</label>
                </div>                

                <div class="form-floating">
                    <input type="number" class="form-control" v-model="cantidad" placeholder="Cantidad" required />
                    <label for="cantidad">Cantidad</label>
                </div>

                <div class="form-floating">
                    <input type="number" class="form-control" v-model="precioUnitario" placeholder="PrecioUnitario"
                        required />
                    <label for="precioUnitario">Precio Unitario</label>
                </div>

                <div class="form-floating">
                    <input type="number" class="form-control" v-model="totalVenta" placeholder="TotalVenta" required />
                    <label for="totalVenta">Total Venta</label>
                </div>

                <div class="form-floating">
                    <input type="date" class="form-control" v-model="fechaEmision" placeholder="FechaEmision" required />
                    <label for="fechaEmision">Fecha Emision</label>
                </div>

                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-primary btn-lg">Guardar</button>
                </div>
            </form>
        </div>
        <div class="text-left">
            <button class="btn btn-link" @click="goBack">Volver</button>
        </div>
    </div>
</template>


<style></style>

