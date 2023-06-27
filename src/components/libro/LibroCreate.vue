<script setup lang="ts">
import http from '@/plugins/axios';
import router from '@/router';
import { ref } from 'vue';

const props = defineProps<{
    ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const titulo = ref('')
const autor = ref('')
const fechaPublicacion = ref('')
const editorial = ref('')
const idioma = ref('castellano')
const isbn = ref('')
const url = ref('')
//const tamañoArchivo = ref('')
const numeroPaginas = ref(0)
const stock = ref('')
const precio = ref(0)

async function crearLibro() {
    await http
        .post(ENDPOINT, {
            titulo: titulo.value,
            autor: autor.value,
            fechaPublicacion: fechaPublicacion.value,
            editorial: editorial.value,
            idioma: idioma.value,
            isbn: isbn.value,
            url: url.value,
            //tamañoArchivo: tamañoArchivo.value,
            numeroPaginas: numeroPaginas.value,
            stock: stock.value,
            precio: precio.value,
        })
        .then(() => router.push('/libros'))
}

function goBack() {
    router.go(-1)
}
</script>

<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item">
                    <RouterLink to="/libros">Libros</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Crear</li>
            </ol>
        </nav>

        <div class="row">
            <h2>Crear Nuevo Libro</h2>
        </div>


        <!-- CREACION DE UN NUEVO LIBRO-->
        <div class="row">
            <form @submit.prevent="crearLibro">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" v-model="titulo" placeholder="Titulo" required />
                    <label for="titulo">Titulo</label>
                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" v-model="autor" placeholder="Autor" required />
                    <label for="autor">Autor</label>
                </div>

                <div class="form-floating">
                    <input type="date" class="form-control" v-model="fechaPublicacion" placeholder="FechaPublicacion"
                        required />
                    <label for="fechaPublicacion">Fecha Publicacion</label>
                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" v-model="editorial" placeholder="Editorial" required />
                    <label for="editorial">Editorial</label>
                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" v-model="idioma" placeholder="Idioma" required />
                    <label for="idioma">Idioma</label>
                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" v-model="isbn" placeholder="Isbn" required />
                    <label for="isbn">ISBN</label>
                </div>

                <div class="form-floating">
                    <label for="url">URL</label>
                    <input type="file" @change="" class="form-control-file"/>

                    <!--<input type="text" class="form-control" v-model="url" placeholder="Url" required />
                    <label for="url">URL</label>-->
                </div>

                <div class="form-floating">
                    <input type="number" class="form-control" v-model="numeroPaginas" placeholder="NumeroPaginas" required />
                    <label for="numeroPaginas">Numero Páginas</label>
                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" v-model="stock" placeholder="Stock" required />
                    <label for="stock">Stock</label>
                </div>

                <div class="form-floating">
                    <input type="number" class="form-control" v-model="precio" placeholder="Precio" required />
                    <label for="precio">Precio</label>
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
