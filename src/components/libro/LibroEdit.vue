<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const titulo = ref('')
const autor = ref('')
const fechaPublicacion = ref('') 
const editorial = ref('')
const idioma = ref('')
const isbn = ref('')
const url = ref('')
//const tamañoArchivo = ref('')
const numeroPaginas = ref(0)
const stock = ref('')
const precio = ref(0)
const id = router.currentRoute.value.params['id']

async function editarLibro() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
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

async function getLibro() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {;
    (titulo.value = response.data.titulo), 
    (autor.value = response.data.autor),
    (fechaPublicacion.value = response.data.fechaPublicacion), 
    (editorial.value = response.data.editorial),
    (idioma.value = response.data.idioma),
    (isbn.value = response.data.isbn),
    (url.value = response.data.url),
    //(tamañoArchivo.value = response.data.tamañoArchivo),
    (numeroPaginas.value = response.data.numeroPaginas),
    (stock.value = response.data.stock), 
    (precio.value = response.data.precio)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getLibro()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/libros">Libros</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Libro</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarLibro">
        <div class="form-floating mb-3">
          <input 
          type="text" 
          class="form-control" 
          v-model="titulo" 
          placeholder="Titulo" required />
          <label for="titulo">Titulo</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="autor"
            placeholder="Autor"
            required
          />
          <label for="autor">Autor</label>
        </div>

        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            v-model="fechaPublicacion"
            placeholder="FechaPublicacion"
            required
          />
          <label for="fechaPublicacion">Fecha Publicacion</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="editorial"
            placeholder="Editorial"
            required
          />
          <label for="editorial">Editorial</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="idioma"
            placeholder="Idioma"
            required
          />
          <label for="idioma">Idioma</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="isbn"
            placeholder="Isbn"
            required
          />
          <label for="isbn">ISBN</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="url"
            placeholder="Url"
            required
          />
          <label for="url">URL</label>
        </div>

        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="numeroPaginas"
            placeholder="NumeroPaginas"
            required
          />
          <label for="numeroPaginas">Numero Paginas</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="stock"
            placeholder="Stock"
            required
          />
          <label for="stock">Stock</label>
        </div>

        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="precio"
            placeholder="Precio"
            required
          />
          <label for="precio">Precio</label>
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

