<script setup lang="ts">
import type { Cliente } from '@/models/cliente'
import http from '@/plugins/axios'
import router from '@/router'
import { onMounted, ref } from 'vue'

const props = defineProps<{
    ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var clientes = ref<Cliente[]>([])

async function getClientes() {
    clientes.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
    router.push(`/clientes/editar/${id}`)
}

async function toDelete(id: number) {
    var r = confirm('¿Está seguro que se desea eliminar el Cliente?')
    if (r == true) {
        await http.delete(`${ENDPOINT}/${id}`).then(() => getClientes())
    }
}

onMounted(() => {
    getClientes()
})
</script>

<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Clientes</li>
            </ol>
        </nav>

        <div class="row">
            <h2>Lista de Clientes</h2>
            <div class="col-12">
                <RouterLink to="/clientes/crear">Crear Nuevo</RouterLink>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Email</th>
                        <th scope="col">Fecha Creacion</th>
                        <th scope="col">Fecha Modificacion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cliente, index) in clientes.values()" :key="cliente.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ cliente.nombre }}</td>
                        <td>{{ cliente.telefono }}</td>
                        <td>{{ cliente.email }}</td>
                        <td>{{ cliente.fechaCreacion }}</td>
                        <td>{{ cliente.fechaModificacion }}</td>
                        <td>
                            <button class="btn btn-link" @click="toEdit(cliente.id)">Editar</button>
                            <button class="btn btn-link" @click="toDelete(cliente.id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>

