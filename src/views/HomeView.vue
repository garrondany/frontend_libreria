<script setup lang="ts">

</script>

<template>
  <!--SECCION CON FONDO -->
  <section class="about-section section-padding" id="section_2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
          <div class="services-info">
            <h2 class="text-white mb-4">BOOK 2023</h2>

            <p class="text-white">
              “Las librerías son esos territorios mágicos donde, en un acto de inspiración, escuchamos los ecos suaves de
              la memoria desconocida.
            </p>

            <p class="text-white">
              Cuenta a tus amigos sobre nuestra página. Gracias.
            </p>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="about-text-wrap">
            <img src="@/assets/images/libreriamoder.jpg" class="about-image img-fluid" />

            <div class="about-text-info d-flex">
              <!-- <div class="d-flex">
                <i class="about-text-icon bi-person"></i>
              </div> -->

              <div class="ms-4">
                <!-- <h3>a happy moment</h3> -->

                <p class="mb-0">Una experiencia para leer...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!--SECCION DE CUATRO IMAGENES -->
  <section class="section posts-entry posts-entry-sm bg-light">
    <div class="container">

      <div class="col-12 text-justify">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <h2 class="mb-4">Libros de la Semana</h2>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="blog-entry">
            <a href="/libro1" class="img-link">
              <img src="@/assets/images/img_1_vertical.jpg" alt="Image" class="img-fluid">
            </a>
            <span class="date">Jun. 15, 2023</span>
            <h2><a href="/libro1">VER DATOS</a></h2>
            <!-- <p>REFERENCIA LIBRO 1.</p>
						 <p><a href="#" class="read-more">Continue Reading</a></p> -->
          </div>

          <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Comprar
          </button> -->

          <!-- <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
              <RouterLink to="/clientes/crear">Comprar</RouterLink>
            </button> -->


        </div>

        <div class="col-md-6 col-lg-3">
          <div class="blog-entry">
            <a href="/libro2" class="img-link">
              <img src="@/assets/images/img_2_vertical.jpg" alt="Image" class="img-fluid">
            </a>
            <span class="date">Jun. 15, 2023</span>
            <h2><a href="/libro2">VER DATOS</a></h2>
            <!--<p>REFERENCIA LIBRO 2.</p>
						 <p><a href="#" class="read-more">Continue Reading</a></p> -->
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="blog-entry">
            <a href="/libro4" class="img-link">
              <img src="@/assets/images/img_4_vertical.jpg" alt="Image" class="img-fluid">
            </a>
            <span class="date">Jun. 15, 2023</span>
            <h2><a href="/libro4">VER DATOS</a></h2>
            <!-- <p>REFERENCIA LIBRO 3.</p>
						 <p><a href="#" class="read-more">Continue Reading</a></p> -->
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="blog-entry">
            <a href="/libro3" class="img-link">
              <img src="@/assets/images/img_3_vertical.jpg" alt="Image" class="img-fluid">
            </a>
            <span class="date">Jun. 15, 2023</span>
            <h2><a href="/libro3">VER DATOS</a></h2>
            <!--  <p>REFERENCIA LIBRO 4.</p>
						<p><a href="#" class="read-more">Continue Reading</a></p> -->
          </div>
        </div>
      </div>
    </div>

    <!-- DATOS - Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Comprar Libro</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="row g-3 needs-validation" novalidate>
              <!-- nombres -->
              <div class="col-md-10">
                <label for="validationCustom01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationCustom01" value="Nombres y Apellidos" required>
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>
              <!-- telefono -->
              <div class="col-md-4">
                <label for="validationCustom02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationCustom02" value="Telefono" required>
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>
              <!-- email -->
              <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationCustom02" value="Email" required>
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>

              <!-- cantidad -->
              <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationCustom02" value="Cantidad" required>
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Crears
              <RouterLink to="/clientes/crear">Crear Nuevo</RouterLink>
            </button>
            <!-- <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-title="Guardar Orden">              
            </button>
            <RouterLink to="/clientes/crear">Crear Nuevo</RouterLink> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Fin Modal -->

  </section>



  <!--SECCCION 5 IMAGENES UNA CENTRAL Y DOS LATERALES-->
  <section class="section bg-light">
    <div class="container">
      <div class="row align-items-stretch retro-layout">

        <div class="mb-4">
          <h2>LIBROS DE COLECCION</h2>
        </div>

        <div class="col-md-4">
          <a href="single.html" class="h-entry mb-30 v-height gradient">

            <div class="featured-img" style="background-image: url('@/assets/images/img_3_horizontal.jpg');"></div>

            <img src="@/assets/images/img_3_horizontal.jpg" class="featured-img" />
            <!--about-image img-fluid-->

            <div class="text">
              <span class="date">Apr. 20, 2021</span>
              <h2>Harry Potter y la Piedra Filosofal</h2>
            </div>
          </a>
          <a href="single.html" class="h-entry v-height gradient">

            <div class="featured-img" style="background-image: url('@/assets/images/img_2_horizontal.jpg');"></div>

            <img src="@/assets/images/img_2_horizontal.jpg" class="featured-img" />

            <div class="text">
              <span class="date">Apr. 20, 20212</span>
              <h2>Harry Potter y el Caliz de Fuego</h2>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="single.html" class="h-entry img-5 h-100 gradient">

            <div class="featured-img" style="background-image: url('@/assets/images/img_5_vertical.jpg');"></div>
            <img src="@/assets/images/img_5_vertical.jpg" class="featured-img" />

            <div class="text">
              <span class="date">Apr. 20, 2021</span>
              <h2>Harry Potter y la Orden del Fenix</h2>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="single.html" class="h-entry mb-30 v-height gradient">

            <div class="featured-img" style="background-image: url('@/assets/images/img_4_horizontal.jpg');"></div>
            <img src="@/assets/images/img_4_horizontal.jpg" class="featured-img" />


            <div class="text">
              <span class="date">Apr. 20, 2021</span>
              <h2>Harry Potter y el Misterio del Principe</h2>
            </div>
          </a>
          <a href="single.html" class="h-entry v-height gradient">

            <div class="featured-img" style="background-image: url('@/assets/images/img_5_horizontal.jpg');"></div>
            <img src="@/assets/images/img_5_horizontal.jpg" class="featured-img" />

            <div class="text">
              <span class="date">Apr. 20, 2021</span>
              <h2>Harry Potter y las Reliquias de la Muerte</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!--SECCCION 3 IMAGENES UNA CENTRAL Y DOS AL LADO DERECHO-->

  <section class="artists-section section-padding" id="section_3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 class="mb-4">Nuestra infraestructura</h2>
        </div>

        <div class="col-lg-5 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img src="@/assets/images/infraestructura/imagen2.jpg" class="artists-image img-fluid" />
            </div>

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Ambiente 1
              </p>

              <p>
                <strong>Fecha:</strong>
                Junio 16, 2000
              </p>

              <p>
                <strong>Diseño:</strong>
                Minimalista, R&amp;B
              </p>

              <hr />

              <p class="mb-0">
                <strong>Youtube Channel:</strong>
                <a href="#">Book 2023</a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img src="@/assets/images/infraestructura/imagen1.jpg" class="artists-image img-fluid" />
            </div>

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Ambiente 2
              </p>

              <p>
                <strong>Fecha:</strong>
                Junio 16, 217
              </p>

              <p>
                <strong>Diseño:</strong>
                Minimalista
              </p>

              <hr />

              <p class="mb-0">
                <strong>Youtube Channel:</strong>
                <a href="#">Book 2023</a>
              </p>
            </div>
          </div>

          <div class="artists-thumb">
            <img src="@/assets/images/infraestructura/imagen3.jpg" class="artists-image img-fluid" />

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Ambiente 3
              </p>

              <p>
                <strong>Fecha:</strong>
                October 8, 2021
              </p>

              <p>
                <strong>Diseño:</strong>
                Minimalista
              </p>

              <hr />

              <p class="mb-0">
                <strong>Youtube Channel:</strong>
                <a href="#">Book 2023</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!--seccion ultima-->
</template>