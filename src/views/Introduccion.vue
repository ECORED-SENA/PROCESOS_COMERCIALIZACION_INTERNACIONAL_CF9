<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción 

    p Bienvenidos al contenido de desarrollo de proveedores y canales de distribución, en el cual se abordarán diversas temáticas con aspectos básicos y fundamentales que se deben tener en cuenta cuando se va a realizar una adecuada selección de proveedores, de clientes y de canales de distribución locales y del exterior.
    p.mb-5 Pasemos a conocer un poco más de este componente formativo por medio del siguiente video:
    
    figure.mb-5(data-aos='fade-left')
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Este documento le brindará conceptos pertinentes para realizar una adecuada selección de los proveedores, que le permita comprar bien y obtener mejor rentabilidad, así como se detalla en la siguiente figura:

    //.col-lg-10.mx-auto.pRelative
      figure.mw560px.mx-auto
        img(src='@/assets/curso/if11.svg' alt='Evaluación de proveedores')
      .pAbsolute
        img(src='@/assets/curso/if1.svg' alt='Evaluación de proveedores').if1
      .pAbsolute
        img(src='@/assets/curso/if2.svg' alt='Evaluación de proveedores').if2
      .pAbsolute
        img(src='@/assets/curso/if3.svg' alt='Evaluación de proveedores').if3
      .pAbsolute
        img(src='@/assets/curso/if4.svg' alt='Evaluación de proveedores').if4
      .pAbsolute
        img(src='@/assets/curso/if5.svg' alt='Evaluación de proveedores').if5
      .pAbsolute
        img(src='@/assets/curso/if6.svg' alt='Evaluación de proveedores').if6
      .pAbsolute
        img(src='@/assets/curso/if7.svg' alt='Evaluación de proveedores').if7
      .pAbsolute
        img(src='@/assets/curso/if8.svg' alt='Evaluación de proveedores').if8
      .pAbsolute
        img(src='@/assets/curso/if9.svg' alt='Evaluación de proveedores').if9
      .pAbsolute
        img(src='@/assets/curso/if10.svg' alt='Evaluación de proveedores').if10
    .col-lg-10.mx-auto(data-aos='fade-right')
      img(src='@/assets/curso/if12.svg' alt='Evaluación de proveedores')

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
