<script setup lang="ts">
import type { Cliente } from '@/models/cliente';
import type { Orden } from '@/models/orden'
import http from '@/plugins/axios'
import router from '@/router'
import { onMounted, ref } from 'vue'

const props = defineProps<{
    ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var ordenes = ref<Orden[]>([])

async function getOrdenes() {
    ordenes.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
    router.push(`/ordenes/editar/${id}`)
}

async function toDelete(id: number) {
    var r = confirm('¿Está seguro que se desea eliminar la Venta?')
    if (r == true) {
        await http.delete(`${ENDPOINT}/${id}`).then(() => getOrdenes())
    }
}

onMounted(() => {
    getOrdenes()
})


</script>

<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Ordenes</li>
            </ol>
        </nav>

        <div class="row">
            <h2>Lista de Ordenes</h2>
            <div class="col-12">
                <RouterLink to="/ordenes/crear">Crear Nuevo</RouterLink>
            </div>
        </div>     

        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <!-- encabezados de la lista-->
                        <th scope="col">N°</th>
                        <th scope="col">N° Orden</th>
                        <th scope="col">idCliente</th>
                        <th scope="col">nombreCliente</th>
                        <th scope="col">idLibro</th>
                        <th scope="col">nombreLibro</th>                        
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Total Venta</th>
                        <th scope="col">Fecha Emision</th>
                        <th scope="col">Fecha Creacion</th>
                        <th scope="col">Fecha Modificacion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(orden, index) in ordenes.values()" :key="orden.id">

                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ orden.id }}</td>
                        <td>{{ orden.idCliente }}</td>
                        <td>{{ orden.cliente.nombre }}</td> 
                        <td>{{ orden.idLibro }}</td>
                        <td>{{ orden.libro.titulo }}</td> 
                        <td>{{ orden.cantidad }}</td>
                        <td>{{ orden.precioUnitario }}</td>
                        <td>{{ orden.totalVenta }}</td>
                        <td>{{ orden.fechaEmision }}</td>
                        <td>{{ orden.fechaCreacion }}</td>
                        <td>{{ orden.fechaModificacion }}</td>                  
                                           
                        <td>
                            <button class="btn btn-link" @click="toEdit(orden.id)">Editar</button>
                            <button class="btn btn-link" @click="toDelete(orden.id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>

