export default {
  global: {
    componenteFormativo: 'Estrategias y planes de continuidad del negocio',
    descripcionCurso:
      'Este componente formativo explora las estrategias y planes necesarios para garantizar la continuidad del negocio ante interrupciones. Aborda el análisis de impacto, la formulación de estrategias efectivas y el diseño del Plan de Continuidad del Negocio (PCN), fortaleciendo la resiliencia organizacional y la capacidad de recuperación operativa frente a eventos críticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estrategias de continuidad del negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de estrategias y su aplicación organizacional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Criterios técnicos para la selección de estrategias de continuidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Validación de estrategias de continuidad del negocio',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis de Impacto al Negocio (BIA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Metodología del BIA y su importancia en la gestión de continuidad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Identificación y priorización de procesos críticos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Determinación de RTO y RPO',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Evaluación de impactos operativos, financieros y reputacionales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño de estrategias de continuidad del negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características de las estrategias efectivas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Etapas y pasos para la formulación de estrategias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Aplicación de criterios técnicos y de gestión en el diseño',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Pruebas, validación y mejora continua de las estrategias',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan de Continuidad del Negocio (PCN)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Relación entre planes de continuidad, contingencia y recuperación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elementos esenciales para su implementación',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Aplicación práctica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Desarrollo de estrategias de continuidad según requerimientos organizacionales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Formulación de un plan básico de continuidad del negocio',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Simulación de escenarios de interrupción y respuesta organizacional',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_2720213_DU.pdf',
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
  complementario: [
    {
      tema: 'Estrategias de continuidad del negocio',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Elementos de una estrategia SGCN</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=f4gr8Z15bKQ',
    },
    {
      tema: 'Análisis de Impacto al Negocio',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Medición de impacto</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EeSChaxCbkY',
    },
    {
      tema: 'Elementos esenciales para su implementación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>La mejora continua en las organizaciones; generalidades</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Xv6z-0kyTtY',
    },
  ],
  glosario: [
    {
      termino: 'Estrategias de continuidad',
      significado:
        'Acciones planificadas que buscan prevenir, mitigar o recuperar la operación de los procesos esenciales frente a interrupciones, fortaleciendo la resiliencia organizacional.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'Proceso sistemático para identificar, analizar, evaluar y controlar los riesgos que puedan afectar el cumplimiento de los objetivos institucionales o la continuidad operativa.',
    },
    {
      termino: 'Impactos financieros',
      significado:
        'Consecuencias económicas derivadas de una interrupción operativa, como pérdida de ingresos, costos adicionales de recuperación, sanciones contractuales o disminución del valor de los activos.',
    },
    {
      termino: 'Impactos operativos',
      significado:
        'Efectos que una interrupción puede generar sobre la capacidad de una organización para ejecutar sus procesos, cumplir con sus objetivos o mantener la prestación de servicios esenciales.',
    },
    {
      termino: 'Impactos reputacionales',
      significado:
        'Daños en la imagen, confianza o credibilidad de una organización ante clientes, aliados y la opinión pública como resultado de incidentes, fallas o mala gestión de crisis.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso permanente de revisión, evaluación y optimización de los sistemas, procedimientos y estrategias, orientado a incrementar la eficacia, la eficiencia y la capacidad de respuesta de la organización ante cambios o incidentes.',
    },
    {
      termino: 'Plan de Continuidad del Negocio (PCN)',
      significado:
        'Documento que define los procedimientos, recursos y responsables necesarios para mantener o restablecer los procesos críticos de una organización ante una contingencia.',
    },
    {
      termino: 'Proceso crítico',
      significado:
        'Actividad o función esencial cuyo fallo o interrupción puede generar un impacto significativo en la operación, la reputación o las finanzas de la organización.',
    },
    {
      termino: 'Resiliencia organizacional',
      significado:
        'Capacidad de una organización para anticiparse, resistir, adaptarse y recuperarse eficazmente frente a eventos disruptivos, manteniendo la continuidad de sus operaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'ISO. (2015). ISO 9001:2015 - <em>Quality management systems - Requirements</em>. International Organization for Standardization.',
      link: '',
    },
    {
      referencia:
        'ISO. (2019). ISO 22301:2019 - <em>Security and resilience - Business continuity management systems - Requirements</em>. International Organization for Standardization.',
      link: '',
    },
    {
      referencia:
        'ISO. (2022). ISO/IEC 27001:2022 - <em>Information security, cybersecurity and privacy protection - Information security management systems - Requirements</em>. International Organization for Standardization.',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (2012). Ley 1581 de 2012. <em>Por la cual se dictan disposiciones generales para la protección de datos personales</em>. Reglamentario del Sector de Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Ruiz, A., & Rodríguez, M. (2019). El ciclo PHVA como herramienta para la mejora continua en los sistemas de gestión. Revista de Administración y Calidad, 27(3), 45–58.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Armando Javier López Sierra',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
