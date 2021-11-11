<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Identificación de canales de distribución 

    img(src='@/assets/curso/t2/f1.png', alt='Vehículos de carga').mb-5

    p Los canales de distribución son los conductos y medios que cada empresa escoge para llevar sus productos al consumidor, de la forma más completa, eficiente y económica posible.

    .bloque-texto-e.color-primario.p-4.mb-4
        .bloque-texto-e__texto
          i.fas.fa-quote-left
          p.mb-0 Un servicio tiene poco valor si no está disponible para los clientes en el momento y en el lugar que ellos desean. Cuando una empresa incurre en el costo de mover el producto hacia el consumidor de manera oportuna, ha creado un valor para el cliente que antes no tenía.
          i.fas.fa-quote-right
        .row.align-items-end
          .col
            .bloque-texto-e__autor 
              .h5.mb-0 Ballou (2004, p. 48)

    p De ahí surge la importancia de la gestión de los canales de distribución, en tanto representan la relación y forma de interacción de la empresa con los usuarios, el cómo y dónde adquieren y utilizan sus productos o servicios y la experiencia de compra. 
    p Entretanto, Anaya Tejero argumenta que: 

    .bloque-texto-e.color-acento-botones.p-4.mb-4
      .bloque-texto-e__texto
        i.fas.fa-quote-left
        p.mb-0 Una correcta gestión del transporte desde el punto de vista logístico obliga a que el responsable del mismo, esté involucrado no solo en las tareas del día a día, como habitualmente ocurre, sino que sea partícipe de los planes estratégicos y tácticos de las empresas, para adaptar sus recursos a las necesidades a medio y largo plazo que la empresa necesite.
        i.fas.fa-quote-right
      .row.align-items-end
        .col
          .bloque-texto-e__autor 
            .h5.mb-0 Anaya Tejero (2009, p.18-19)

    Separador
    #t_2_1.tituo-segundo.color-acento-contenido
      h2 2.1 Clasificación de clientes según el canal de distribución

    p Con la proliferación de la conectividad, las redes sociales y el comercio electrónico, los canales de distribución se van adaptando a las necesidades de un entorno cada vez más tecnológico y digital. Aunque la cercanía entre productores y consumidores finales se va acercando, eliminando los distribuidores e intermediarios, no se deja a un lado que los canales tradicionales continúan en uso.
    p Aunque los desarrollos tecnológicos permitirían la división de los canales en presenciales y virtuales, existen muchos tradicionales en uso, pero principalmente podemos separar los canales de distribución en directo e indirecto, como se presenta a continuación.

    .col-lg-10.mx-auto.mb-5.ofVisible.p-4.fcp20
      .row.ofVisible.pRelative
        .col-lg-7
          h3 Canal directo
          p El productor o fabricante es responsable de la entrega de su producto al consumidor final, sin la utilización de intermediarios. Por lo tanto, no entrega a terceros los procesos de almacenamiento, transporte o servicio al cliente.
        .col-lg-5.offsetTop
          figure
            img(src='@/assets/curso/t2/f2.svg' alt='bodega')

    .col-lg-10.mx-auto.mb-5.ofVisible.p-4.fcab20
      .row.ofVisible.pRelative
        .col-lg-7
          h3 Canal indirecto
          p El fabricante contrata la logística y la comercialización del producto. 
          p En función de la cantidad de participantes, se logran identificar tres clases de distribución externa:
        .col-lg-5.offsetTop
          figure
            img(src='@/assets/curso/t2/f3.svg' alt='bodega')
      LineaTiempoD.color-acento-contenido
        div(titulo='Distribución en corto')
          p Se da cuando el fabricante entrega al minorista y este último al consumidor final.
          p Normalmente utilizado en el comercio electrónico cuando la plataforma de e-commerce conecta con el comprador.
        div(titulo='Distribución en largo')
          p Desde el productor hasta el mayorista, de ahí al minorista y por último al consumidor. 
          p Este tipo de distribución es el más común y es propio de pequeños negocios y tiendas de barrio tradicionales.
        div(titulo='Distribución doble')
          p Aquella en la que además de mayoristas y minoristas, también interviene un tercer agente distribuidor o agente exclusivo que participa en la comercialización de productos.
          p Es propia de franquicias o agencias de viaje.

      p Al momento de elegir el canal más adecuado para una empresa, se deberán tener en cuenta razones de costos, precios de venta, márgenes, estrategias de mercadeo, etc. El tipo de canal brinda un control diferente sobre la logística y la comercialización de los productos.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Propuesta de valor

    .fcab20.p-5.mb-5
      p Se puede decir que, en la propuesta de valor de una empresa, está inmersa la estrategia que tiene la misma para generar elementos diferenciadores sobre su competencia por algún elemento específico y así lograr mayor aceptación por parte del público.
      p.mb-5 Con la propuesta de valor se pretende realizar una distinción categórica de la marca o empresa sobre la competencia, destacando lo que la empresa hace mejor, ofreciendo confianza al público y a sus clientes.

      .px-5.mb-4
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__texto.p-4.bRadius23
            p.mb-0 Para ello, es importante tener en cuenta los puntos fuertes y débiles, a través de la realización de la matriz de Debilidades, Oportunidades, Fortalezas y Amenazas, lo que permite identificar dichos aspectos y generar así estrategias para fomentarlos y publicitarlos.
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2/f4.png')})`}"
          )

      p Esta propuesta de valor debe ser fácil de asimilar por los clientes y el personal de la compañía, y de igual forma, le remarca al consumidor los beneficios que obtiene al utilizar el servicio o producto de la empresa, logrando de esta forma la fidelidad de los mismos, y estableciendo ese diferenciador en el mercado, lo que hace que la empresa sea única.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Matriz de relacionamiento con el cliente

    p La empresa debe estar en contacto permanente con sus clientes para conocer las necesidades y expectativas, y poder ver lo que el cliente requiere a nivel de productos y servicios, a la medida que sean generadores de valor.
    p.mb-5 Para identificar las necesidades de los clientes, es importante conocer quiénes son los compradores a los cuales se les quiere vender, para tener claridad de cómo se comportan frente la empresa y la competencia, como se presenta a comunicación.

    .col-lg-8.mx-auto.mb-5
      LineaTiempoD.color-acento-contenido
        .row.align-items-center.fcp.p-4(numero='1' titulo='Una verdadera orientación al cliente')
          .col
            p Requiere que toda la empresa sienta ese compromiso, dándole una importancia central desde la estrategia de marketing, gestionando la relación de la empresa con los clientes, alcanzando la recompra y la fidelización, para entregar la generación de valor y mejorar la rentabilidad de la empresa. 
          .col-lg-3.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f5.svg')
        .row.align-items-center.fcp.p-4(numero='2' titulo='Modelo estándar para la gestión de clientes')
          .col
            p Este debe ser el resultado de analizar sus clientes, conocer sus necesidades, expectativas y tener en cuenta también a la competencia, los proveedores y el entorno en general. 
          .col-lg-3.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f6.svg')
        .row.align-items-center.fcp.p-4(numero='3' titulo='La mejor forma de fidelizar a un cliente')
          .col
            p Consiste en generar acciones que se integren dentro del servicio ofrecido de forma natural y que faciliten al cliente la repetición. Esta facilitación en ocasiones es ciertamente una obligación, pero si se presenta de forma elegante parecerá más bien una invitación. (Baquero 2007)
          .col-lg-3.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f7.svg')
        .row.align-items-center.fcp.p-4(numero='4' titulo='Al medir el grado de satisfacción del cliente')
          .col
            p Se tiene la percepción sobre el cumplimiento de lo que esperaba recibir de la empresa y esta medición debe considerar indicadores tangibles que logren evaluar la calidad del servicio recibido.
          .col-lg-3.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f8.svg')
        .row.align-items-center.fcp.p-4(numero='5' titulo='Opciones para conocer la percepción del cliente')
          .col
            p Se tienen las entrevistas personales, telefónicas, las encuestas y la evaluación de la calidad del servicio, las cuales se hacen de manera personal, telefónicamente y/o por medio de formularios en línea.
          .col-lg-3.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f9.svg')
        .row.align-items-center.fcp.p-4(numero='6' titulo='La metodología CRM (Customer Relationship Management) o Administración de las Relaciones con los Clientes')
          .col
            p Su objetivo es establecer relaciones de confianza con los consumidores, escuchándolos para conocerlos y para poder satisfacer sus necesidades y deseos, ganando así, su fidelidad y garantizando de esta forma los beneficios futuros para la empresa. 
          .col-lg-3.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f10.svg')

    p.text-cente.mb-5 Finalmente, el siguiente mapa mental detalla los elementos más relevantes estudiados durante el desarrollo del componente formativo.

    .col-lg-7.col-md-9.mx-auto
      img(src='@/assets/curso/t2/f11.svg')

</template>

<script>
export default {
  name: 'Tema2',
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
