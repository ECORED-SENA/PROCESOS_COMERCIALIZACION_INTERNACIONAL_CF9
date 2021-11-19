export default {
  global: {
    componenteFormativo: 'Desarrollo de proveedores y canales de distribución',
    descripcionCurso:
      'Bajo las actuales condiciones empresariales y las necesidades para el desarrollo económico del país, se requiere de estrategias para planear las compras y los canales de distribución en un contexto nacional o internacional. Por tanto, una adecuada selección de proveedores, de clientes y escoger adecuadamente los canales de distribución locales y del exterior, son procesos vitales para el óptimo desempeño de los procesos de importación y exportación de bienes.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Identificación de proveedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Listado y base de datos de proveedores',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de proveedores',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Matriz de evaluación y selección de proveedores',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Identificación de canales de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación de clientes según el canal de distribución',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Propuesta de valor',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Matriz de relacionamiento con el cliente',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Anaya Tejero, J. (2009). El transporte de mercancías: Enfoque logístico de la distribución. Madrid, Esic editorial 18-19.',
    },
    {
      referencia:
        'Ballou, R (2004). Logística: administración de la cadena de suministro. México, Editorial Pearson.',
    },
    {
      referencia:
        'Banco Mundial. (2013). Logística y transporte: gran camino por recorrer en Centroamérica. Banco Mundial.',
    },
    {
      referencia:
        'Baquero José Daniel, Rodríguez de Llauder Carlos, Baquero Mario, Huertas Fernando. <em>Marketing</em> de Clientes ¿Quién se ha llevado mi cliente? Mc Graw Hill. Madrid. 2007.',
    },
    {
      referencia:
        'Campos, J., Taboada, C., & Chamelta, R. (2004). Metodología para la Evaluación del Rendimiento de la Cadena Logística. Información tecnológica, 15 (4), 77-84.',
    },
    {
      referencia:
        'Castellanos Ramírez, A, (2009). Manual de la gestión logística del transporte y la distribución de mercancías. Barranquilla: Ediciones Uninorte.',
    },
    {
      referencia:
        'Departamento Administrativo de Estadísticas: DANE (2014). Índice de Costos de Transporte de Carga por Carretera. Índices de Precios y Costos, Bogotá.',
    },
    {
      referencia:
        'Garcés Ramírez, C. D. (2010). Modelo de entregas directas para la reducción de costos logísticos de distribución en empresas de consumo masivo. Aplicación en una empresa piloto de Caldas.',
    },
    {
      referencia:
        'Huertas, I. & Bilbao, E. (2015). Mejoramiento de procedimientos y métodos de despacho de mercancía para la Empresa Gecolsa SA.',
    },
    {
      referencia:
        'Jiménez Sánchez, J. E. (2004). Los factores críticos de éxito de la cadena de suministro, Publicación Técnica, (237), 17-20.',
    },
    {
      referencia:
        'Korpela, J., & Tuominen, M. (1996). <em>A decision aid in warehouse site selection. International Journal of Production Economics</em>, 45(1), 169-180',
    },
    {
      referencia:
        'López González, E. & Cedillo Campos, M. (2011). Consolidación de carga: palanca para la competitividad. E logística.',
    },
    {
      referencia:
        'Lozano Rojo, J.R (2002). Cómo y dónde optimizar los costes logísticos, Madrid, editorial fundación Confemetal, 25-26.',
    },
    {
      referencia:
        'Restrepo, D. L. (2011). Artículo Zona logística, El SCM (<em>Supply Chain Management</em>), 32-35.',
    },
    {
      referencia:
        'Revista Énfasis Logística. (2006). Cómo Abaratar costos en transporte. Énfasis Logística <em>Online</em>.',
    },
    {
      referencia:
        'Rodríguez, M. A. (2015). Director de Operaciones de Zimag Logistics. México.',
    },
    {
      referencia:
        'Saaty, T. L. (1990). <em>How to make a decision: the analytic hierarchy process. European journal of operational research</em>, 48(1), 9-26.',
    },
    {
      referencia:
        'Szymánski, I. (2015). Desarrollo de Negocios de Geodis Logistics de México. México.',
    },
    {
      referencia:
        'Zhou, G., Van Hui, Y., & Liang, L. (2011). <em>Strategic alliance in freight consolidation. Transportation Research Part E: Logistics and Transportation Review</em>, 47(1), 18-29.',
    },
  ],
  glosario: [
    {
      termino: 'Bienes',
      significado:
        'conjunto de propiedades o riquezas que pertenecen a una persona o grupo.',
    },
    {
      termino: 'Bienes de capital',
      significado:
        'bienes que forman parte del patrimonio de una compañía. Asimismo, permite producir un bien de consumo que se venderá al público.',
    },
    {
      termino: 'Bien de consumo',
      significado:
        'es la mercancía final en un proceso de producción. Así, satisface las necesidades de las personas de manera directa.',
    },
    {
      termino: 'Bien intermedio',
      significado:
        'bien que se utiliza para producir otros bienes (ejemplo: materias primas). Su uso determina si es un bien intermedio o de consumo.',
    },
    {
      termino: 'Cheque',
      significado:
        'documento mediante el cual se le solicita al banco que pague una determinada cantidad de dinero a la persona o empresa especificada en el cheque. Para esto, es necesario que el solicitante tenga una cuenta corriente o una cuenta de ahorros con el banco para poder utilizar cheques.',
    },
    {
      termino: 'Compras',
      significado:
        'es el proceso en donde un negocio planifica, adquiere y evalúa el proceso de adquisición de suministros de buena calidad en cantidades adecuadas y al precio adecuado para satisfacer las necesidades de sus clientes.',
    },
    {
      termino: 'Contrato',
      significado:
        'es un acuerdo entre las partes, ya sea escrito o verbal, para realizar o abstenerse de realizar ciertas actividades.',
    },
    {
      termino: 'Equipo',
      significado:
        'toda la maquinaria, herramientas, accesorios de talleres, mobiliario de oficina, etc., que una empresa necesita. El equipo es normalmente caro y se espera que dure por mucho tiempo.',
    },
    {
      termino: 'Inventario',
      significado:
        'es un sistema para contar, medir o pesar todas sus existencias y anotar las cantidades en un listado de inventario (Lista de Inventario).',
    },
    {
      termino: 'Materias primas',
      significado:
        'es todo bien que es transformado durante un proceso de producción hasta convertirse en un bien de consumo.',
    },
  ],
  complementario: [
    {
      texto:
        'Cámara de Comercio de Medellín (2011). La cadena de valor como herramienta para el pensamiento estratégico. Medellín, Colombia.',
      tipo: 'Artículo web',
      link:
        'http://herramientas.camaramedellin.com.co/Inicio/Buenaspracticasempresariales/BibliotecaGerenciaEstrategica/Lacadenadevalorcomoherramientaparaelpensam.aspx',
    },
    {
      texto:
        'Cámara de Comercio de Medellín (2011). El servicio posventa y otras estrategias para mantener la relación con tus clientes. Medellín, Colombia.',
      tipo: 'Artículo web',
      link:
        'http://herramientas.camaramedellin.com.co/Inicio/Accesoamercados/BibliotecaVentas/Elservicioposventayotrasestrategias.aspx',
    },
    {
      texto:
        'Ballou, Ronald H. Logística. Administración de la cadena de suministro. Quinta edición. Pearson Educación, México, 2004. ISBN: 970-26-0540-7.',
      tipo: 'Libro',
      link:
        'https://es.pdfdrive.com/log%C3%ADstica-administraci%C3%B3n-de-la-cadena-de-suministro-e188929651.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Kateryn Valderrama',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Alejandro Acevedo',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      /*{
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
