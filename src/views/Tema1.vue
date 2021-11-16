<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Identificación de proveedores

    img(src='@/assets/curso/t1/f1.png' alt='Equipo de contact center').mb-5

    p.mb-5 Al inicio de sus procesos, las organizaciones requieren conseguir insumos, componentes, pólizas, servicios de energía, telecomunicaciones, entre otros, que son absolutamente necesarios para poder realizar sus procesos de producción o de prestación de sus servicios, y los individuos o negocios que participan en los suministros de estos productos o servicios a las otras empresas, son denominados proveedores. 

    .row.align-items-center.justify-content-center.mb-5
      .col-10.mb-5
        h3 Tipos de proveedores
        p Saber elegir correctamente al proveedor es fundamental para el buen funcionamiento de una empresa. Se pueden establecer decenas de clasificaciones de proveedores en función de diversos criterios como:
      
      .col-lg-3
        figure(data-aos='fade-right')
          img(src='@/assets/curso/t1/f2.svg' alt='Productos').mb-4
      .col-lg-3
        figure(data-aos='fade-up')
          img(src='@/assets/curso/t1/f3.svg' alt='Servicio').mb-4
      .col-lg-3
        figure(data-aos='fade-left')
          img(src='@/assets/curso/t1/f4.svg' alt='Recursos').mb-4
      
      .col-10
        p.mb-5 Son estos, entonces, parte clave y fundamental en el proceso de suministro, debido a que se convierten en dinamizadores y aliados estratégicos para las empresas. De ahí, que el personal de compras debe realizar una correcta y minuciosa selección, para trabajar con aquellos proveedores que sean los más adecuados de acuerdo a las necesidades de la compañía, y buscando siempre el acuerdo más beneficioso para obtener excelente calidad, mejores precios, garantías, condiciones de pago, tiempos de entrega, localización, entre otros. 
        .bRadius12.p-4.fcs.mb-0
          h3.texto-blanco.text-center.mb-0 ¿Cómo se realiza una búsqueda de proveedores?
        .contenedor.faclaro.p-5.mb-5
          PasosA.color-primario.mb-5(tipo="n")
            .row.align-items-center
              .col-md-8
                p La primera situación para definir, antes de iniciar con la búsqueda de los proveedores, es que se debe tener muy claras las necesidades de suministro, en cuanto a productos, servicios, calidad y cantidad, para que el listado y la selección de proveedores, se pueda realizar comparando productos y/o servicios con características similares.
              .col-md-4
                figure(data-aos='fade-left')
                  img(src='@/assets/curso/t1/f5.svg' alt='imagen relacionada')
            .row.align-items-center
              .col-md-4
                figure(data-aos='fade-right')
                  img(src='@/assets/curso/t1/f6.svg' alt='imagen relacionada')
              .col-md-8
                p Se recomienda establecer un listado de fabricantes de los productos y/o prestadores de servicios, que son necesarios para la empresa, con el fin de, posteriormente, obtener información que permita realizar comparativos para luego poder establecer las opciones más adecuadas a los intereses y necesidades de la empresa.
            .row.align-items-center
              .col-md-8
                p Cabe destacar que la lista no se deberá reducir a un solo proveedor, ya que, si este último llegase a incumplir, la empresa quedaría totalmente desabastecida, y esto también llevaría al incumplimiento con los clientes. Por lo anterior, es muy recomendable determinar como proveedores principales a varios proveedores.
              .col-md-4
                figure(data-aos='fade-left')
                  img(src='@/assets/curso/t1/f7.svg' alt='imagen relacionada')

    .row.justify-content-center.mb-5
      .col-10
        p Se debe tener presente la evaluación y el seguimiento constante a cada uno de ellos, para medir su desempeño y cumplimiento acorde a las condiciones iniciales pactadas.
        p En el siguiente gráfico podemos observar a manera de resumen, los principales pasos para la selección de los proveedores:

      .col-lg-3
        figure(data-aos='flip-right')
          img(src='@/assets/curso/t1/f16.svg' alt='Determinar producto o servicio').mb-4
      .col-lg-3
        figure(data-aos='flip-right')
          img(src='@/assets/curso/t1/f17.svg' alt='Lista y selección de proveedores').mb-4
      .col-lg-3
        figure(data-aos='flip-right')
          img(src='@/assets/curso/t1/f18.svg' alt='Evaluación y seguimiento').mb-4

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Listado y base de datos de proveedores 

    p.mb-5 Para el establecimiento del listado y base de datos de los proveedores, se pueden plantear distintas situaciones de partida, como pueden ser:

    .row.align-items.center.mb-5
      .col-lg-7
        hr.bcp
        .row.align-items-center.py-2
          .col-auto
            img(src='@/assets/curso/ccp1.svg', data-aos='fade-right').w60px.mx-auto
          .col
            p.mb-0 La empresa apenas está iniciando actividades y por ende debe buscar de todo tipo de proveedores. 
        hr.bcp
        .row.align-items-center.py-2
          .col-auto
            img(src='@/assets/curso/ccp2.svg', data-aos='fade-right').w60px.mx-auto
          .col
            p.mb-0 La empresa ya cuenta con proveedores habituales, pero no está a gusto totalmente con los que tiene.
        hr.bcp
        .row.align-items-center.py-2
          .col-auto
            img(src='@/assets/curso/ccp3.svg', data-aos='fade-right').w60px.mx-auto
          .col
            p.mb-0 La empresa pretende ampliar la base de datos de proveedores, que le permita obtener comparativos que puedan mejorar su oferta. 
        hr.bcp
      .col-lg-5.order-first.order-lg-last
        figure(data-aos='fade-left')
          img(src='@/assets/curso/t1/f11.svg' alt='imagen relacionada')

    p Al tener el listado de los proveedores que mejor respondan a las necesidades de la empresa, es recomendable utilizar acertados criterios de selección que permitan disminuir el listado hasta obtener unos pocos posibles proveedores.
    p.mb-5 El proceso de búsqueda y selección tiene tres fases:

    .col-lg-10.mx-auto.mb-5
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
        .row.justify-content-around.align-items-center(titulo="Búsqueda de información")
          .col-md-8.mb-4.mb-md-0
            p Realizada a través de Internet, prensa, radio y televisión, publicaciones especializadas, ferias y exposiciones, asociaciones empresariales y de profesionales, cámaras de comercio, ferias y exposiciones comerciales especializadas, bases de datos públicas y privadas, anuarios económicos y otras fuentes.
          .col-md-3
            figure(data-aos='fade-left')
              img(src='@/assets/curso/t1/f12.svg' alt='imagen relacionada')
        div(titulo="Solicitud de información")
          p Se inicia el contacto directo con los proveedores para solicitar la información que le interesa conseguir, procurando que respondan a los aspectos que más les convenga conocer, como:  
          .row.justify-content-around.align-items-center
            .col-md-6.mb-4.mb-md-0
              ul.lista-ul
                li
                  i.fas.fa-angle-right.cac 
                  | Condiciones económicas
                li
                  i.fas.fa-angle-right.cac 
                  | Condiciones técnicas
                li
                  i.fas.fa-angle-right.cac 
                  | Servicio postventa
              p Por medio de:  
              ul.lista-ul
                li
                  i.fas.fa-angle-right.cac 
                  | Comunicación escrita
                li
                  i.fas.fa-angle-right.cac 
                  | Representante o intermediario
                li
                  i.fas.fa-angle-right.cac 
                  | Visita personal
            .col-md-6
              figure
                img(src='@/assets/curso/t1/f13.svg' alt='imagen relacionada')
        .row.justify-content-around.align-items-center(titulo="Evaluación y selección del proveedor")
          .col-md-3.mb-4.mb-md-0
            h4 Realización de: 
            ul.lista-ul
              li
                i.fas.fa-angle-right.cac 
                | Una ficha por proveedor 
              li
                i.fas.fa-angle-right.cac 
                | Cuadro comparativo de las condiciones
          .col-md-3
            h4 Criterios de selección: 
            ul.lista-ul
              li
                i.fas.fa-angle-right.cac 
                | Económicos 
              li
                i.fas.fa-angle-right.cac 
                | De calidad
          .col-md-3
            figure
              img(src='@/assets/curso/t1/f14.svg' alt='imagen relacionada')

    p.text-center.mb-5 La siguiente tabla nos presenta un ejemplo de los aspectos sobre los cuales se podría solicitar información a los proveedores.

    .titulo-sexto.color-acento-contenido
      span <b>Tabla 1.</b> Ejemplo aspectos para conocer de los proveedores

    .tabla-a.color-primario.mb-5 
      .p-3.mb-0.fcp
        h3.text-center.mb-0 Aspectos para conocer de los proveedores
      table
        thead
          tr
            th Relativos a la calidad y al servicio
            th Condiciones económicas
            th Otras condiciones
        tbody
          tr
            td Calidad de los productos.
            td Precio unitario.
            td Periodo de validez de la oferta.
          tr
            td Materiales utilizados.
            td Descuento comercial.
            td Causas de rescisión del contrato.
          tr
            td Características técnicas.
            td Descuento por volumen de compras.
            td Circunstancias que pueden dar lugar a revisiones en los precios.
          tr
            td Periodo de garantía.
            td Plazo de pago y forma de pago.
            td Entregas realizadas por terceros.
          tr
            td Formación de los usuarios, si fuese necesario.
            td Precios de envases y embalajes.
            td Plazo de entrega.
          tr
            td Servicio postventa.
            td Pago de seguros y transportes.
            td Embalajes especiales.
          tr
            td Servicio de atención al cliente.
            td Intereses de mora.
            td Devolución de los excedentes.
          tr
            td Otra información de calidad o servicio.
            td Otros aspectos económicos.
            td Cualquier otra información.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Clasificación de proveedores

    p Encontrados los proveedores, se procede a la selección de los más adecuados mediante un análisis exhaustivo y luego a su eliminación, basándose en los criterios de selección que se hayan elegido, hasta reducir la cantidad a unos pocos proveedores.
    p Con la información que se obtenga en el proceso de selección, se crea una ficha por cada proveedor, en la que se plasmarán las características de los artículos que ofrece y las condiciones comerciales que otorga.

    .row.justify-content-center
      .col-md-5
        .titulo-sexto.color-acento-contenido
          span <b>Tabla 2.</b> Ejemplo de ficha de proveedores
        .tabla-a.color-primario.mb-5 
          table.w350px
            thead
              tr(style='background-color: #F4B55B !important')
                th Ficha de proveedores
            tbody
              tr
                td Nombre: 
              tr
                td NIT:
              tr
                td Dirección:
              tr
                td Ciudad:
              tr
                td Teléfono:
              tr
                td Correo electrónico:
              tr
                td Productos o servicios que suministra:
              tr
                td Precio:
              tr
                td Descuento:
              tr
                td Forma de pago:
              tr
                td Plazo de entrega:
      .col-md-5
        figure
          img(src='@/assets/curso/t1/f15.svg' alt='imagen relacionada')

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Matriz de evaluación y selección de proveedores

    .col-lg-10.mx-auto
      p También es necesario establecer un cuadro comparativo por producto donde se puedan observar las diferencias por proveedor.

      .titulo-sexto.color-acento-contenido
        span <b>Tabla 3.</b> Ejemplo diferencias proveedor
      .tabla-a.color-primario.mb-5 
        .p-3.fcp.mb-0
          h3.mb-0.text-center Producto o Servicio
        table
          thead
            tr
              th Características
              th Proveedor A
              th Proveedor B
              th Proveedor C
          tbody
            tr
              td Precio unitario
              td  
              td  
              td  
            tr
              td Descuento comercial
              td  
              td  
              td  
            tr
              td Transporte
              td  
              td  
              td  
            tr
              td Seguros
              td  
              td  
              td  
            tr
              td Volumen de compras
              td  
              td  
              td  
            tr
              td Precio total
              td  
              td  
              td  
            tr
              td Periodo de garantía
              td  
              td  
              td  
            tr
              td Plazo de entrega
              td  
              td  
              td  
            tr
              td Servicio técnico
              td  
              td  
              td  
            tr
              td Forma de pago
              td  
              td  
              td  
            tr
              td Observaciones
              td  
              td  
              td  

      p Se reitera la importancia de no depender de un solo proveedor y por lo tanto se deben utilizar varios que garanticen el suministro, evitando el desabastecimiento de la empresa, generando pérdidas económicas, al tener que parar el proceso productivo o desabastecer a los clientes. 
      p Tener varios proveedores puede generar pérdida de oportunidades, ya que, al distribuir la cantidad comprada entre varios proveedores, no se obtengan descuentos por volumen o la posibilidad de renegociar precios o descuentos por los volúmenes de compra.
      p Se recomienda notificar a los proveedores elegidos, informando las razones de la decisión y también se aconseja informar a los no seleccionados, ya que podría ser un estímulo para estos últimos, que en el futuro permitan nuevas negociaciones comerciales.
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
