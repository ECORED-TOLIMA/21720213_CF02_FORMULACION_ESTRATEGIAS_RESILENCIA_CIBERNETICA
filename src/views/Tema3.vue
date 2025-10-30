<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Diseño de estrategias de continuidad del negocio
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p(data-aos="fade-down") El diseño de estrategias de continuidad del negocio constituye una de las fases más críticas dentro de la gestión de la resiliencia organizacional, ya que permite transformar los resultados del Análisis de Impacto al Negocio (BIA) y la evaluación de riesgos en acciones concretas que garanticen la operación continua de los procesos esenciales. En esta etapa, se definen las medidas, recursos y procedimientos necesarios para prevenir interrupciones, mitigar sus efectos y asegurar la recuperación oportuna de los servicios críticos.
        br
        br
    p(data-aos="fade-down") El diseño de una estrategia efectiva debe responder a tres principios fundamentales: prevención, mitigación y recuperación. Esto implica anticipar los posibles escenarios de interrupción, definir cómo mantener las funciones esenciales durante la crisis y establecer mecanismos para restaurar la normalidad en el menor tiempo posible.
    p.mb-5(data-aos="fade-down") En la práctica, el proceso de diseño parte de la información obtenida del BIA, donde se identifican los procesos críticos, los tiempos máximos de recuperación (RTO), la pérdida de datos aceptable (RPO) y los impactos asociados. Con base en estos datos, se seleccionan las estrategias más adecuadas según el contexto, los recursos disponibles y las capacidades tecnológicas y humanas de la organización.
    .tarjeta.tarjeta--BG07.px-lg-5.px-4.mb-4.py-4
      .row.justify-content-center
        .col-lg-3.col-md-8.col-9.mb-3.order-lg-2.order-1
          figure(data-aos="fade-up")
            img(src='@/assets/curso/temas/tema3/img02.svg', alt='Imagen decorativa')
        .col-lg-7.mb-5.order-lg-1.order-2
          .tarjeta.tarjeta--C01.p-4
            p.mb-0(data-aos="fade-down") Por ejemplo, una empresa de servicios financieros puede diseñar estrategias basadas en la replicación de datos en tiempo real, el uso de servidores espejo y la implementación de centros alternos de operaciones, para garantizar la continuidad de sus servicios ante una falla tecnológica o desastre natural. Por su parte, una institución educativa puede definir estrategias de plataformas virtuales de respaldo, docencia remota y comunicación digital de emergencia, para mantener la prestación del servicio formativo ante contingencias.
      .row.justify-content-center
        .col-lg-10.col-12
          p(data-aos="fade-down") El diseño también requiere establecer los niveles de responsabilidad, las líneas de comunicación y los recursos necesarios para la ejecución de las estrategias. Es indispensable que estas medidas sean realistas, sostenibles y verificables, es decir, que puedan ponerse en práctica con los medios existentes y ajustarse a los cambios del entorno o de la estructura organizacional.
          p.mb-0(data-aos="fade-down") Asimismo, el diseño de estrategias debe estar alineado con la política de continuidad del negocio, los planes de gestión de riesgos, y los sistemas de gestión integrados (como ISO 22301, ISO 27001 o ISO 9001), para garantizar coherencia y cumplimiento normativo.
    p.mb-0(data-aos="fade-down") Finalmente, las estrategias diseñadas deben someterse a procesos de validación, prueba y mejora continua, asegurando que respondan eficazmente a los escenarios previstos y que se actualicen conforme evolucionan las tecnologías, las amenazas o las condiciones del negocio. Su éxito depende de la correcta interpretación de la información del BIA, la articulación interinstitucional y la capacidad de anticipar los posibles impactos, fortaleciendo así la resiliencia y sostenibilidad de la organización frente a cualquier eventualidad.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Características de las estrategias efectivas
    p.mb-5(data-aos="fade-down") Las estrategias de continuidad del negocio son efectivas cuando logran garantizar que los procesos críticos puedan mantenerse o restablecerse dentro de los tiempos definidos (RTO y RPO), con el menor impacto posible para la organización. Su eficacia depende no solo de la solidez técnica de las medidas implementadas, sino también de su alineación con la estructura organizacional, los recursos disponibles y la cultura de resiliencia institucional.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Una estrategia efectiva debe ser integral, práctica y adaptable. Su diseño debe contemplar tanto los aspectos tecnológicos como los humanos, logísticos y comunicacionales, asegurando que la organización esté preparada para actuar antes, durante y después de una interrupción.
    p.mb-5(data-aos="fade-down") A continuación, se presentan las principales características que debe cumplir una estrategia de continuidad efectiva:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span <em>Criterios y ejemplos de estrategias de continuidad efectivas</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Característica
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo de aplicación
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Integración.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") La estrategia debe estar alineada con los sistemas de gestión existentes (calidad, seguridad de la información, riesgos, etc.) y con los objetivos institucionales.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Integrar las medidas de continuidad dentro del Sistema de Gestión de Seguridad de la Información (SGSI) basado en la ISO 27001.
              tr
                td.text-bold(data-aos="fade-down") Viabilidad técnica y económica.
                td(data-aos="fade-down") Debe ser factible de implementar con los recursos y capacidades reales de la organización, sin generar sobrecostos o complejidades innecesarias.
                td(data-aos="fade-down") Implementar respaldos automáticos en la nube, en lugar de montar un centro de datos alterno de alto costo.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Flexibilidad y escalabilidad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Debe poder adaptarse a cambios en la estructura organizacional, la tecnología o el entorno operativo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ampliar la capacidad del sistema de respaldo a medida que aumentan los usuarios o los servicios digitales.
              tr
                td.text-bold(data-aos="fade-down") Simplicidad operativa.
                td(data-aos="fade-down") Debe ser clara y comprensible para todos los niveles de la organización, evitando procedimientos excesivamente técnicos o difíciles de ejecutar.
                td(data-aos="fade-down") Incluir protocolos paso a paso en el Plan de Continuidad para facilitar su ejecución por cualquier responsable.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Medibilidad y control.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Debe permitir evaluar su desempeño mediante indicadores o métricas que reflejen su efectividad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Medir el tiempo real de recuperación de un servidor frente al RTO establecido.
              tr
                td.text-bold(data-aos="fade-down") Enfoque preventivo.
                td(data-aos="fade-down") Prioriza la anticipación y mitigación del riesgo antes de que ocurra la interrupción.
                td(data-aos="fade-down") Mantener mantenimiento preventivo y actualizaciones de <em>software</em> para evitar fallas críticas.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Actualización continua.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Debe revisarse y mejorarse regularmente según los resultados de pruebas, auditorías y cambios en el entorno.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Revisar las estrategias anualmente o tras eventos relevantes como ciberataques o cambios regulatorios.
    p.mb-5(data-aos="fade-down") Además de estas características, una estrategia efectiva debe contar con respaldo de la alta dirección, garantizar la comunicación oportuna entre las áreas involucradas y fomentar una cultura de compromiso entre el personal. La efectividad no solo depende de los recursos tecnológicos, sino también del nivel de preparación humana para responder ante emergencias.
    .row.justify-content-center.mb-0
      .col-lg-6.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Por ejemplo, una organización que dispone de sistemas de respaldo automáticos, pero no capacita a su personal para activarlos correctamente, podría fallar en su respuesta ante una contingencia. Por ello, las estrategias deben contemplar tanto los aspectos técnicos como los procedimentales y humanos.
        p(data-aos="fade-down") En conclusión, las estrategias efectivas son aquellas que logran equilibrio entre viabilidad, eficiencia y adaptabilidad, permitiendo a la organización responder de manera ordenada, minimizar pérdidas y mantener la confianza de sus partes interesadas ante cualquier interrupción significativa.
      .col-lg-4.order-lg-2.order-1.mb-3.col-md-5.col-7
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema3/img03.png', alt='Imagen decorativa')
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Etapas y pasos para la formulación de estrategias
    p(data-aos="fade-down") La formulación de estrategias de continuidad del negocio constituye un proceso sistemático que permite diseñar y estructurar acciones concretas para garantizar la recuperación y sostenibilidad operativa ante interrupciones. Su desarrollo debe seguir una secuencia lógica que asegure la coherencia entre los resultados del Análisis de Impacto al Negocio (BIA), la evaluación de riesgos y los objetivos institucionales.
    p.mb-5(data-aos="fade-down") El proceso se organiza generalmente en etapas interdependientes, cada una con actividades específicas orientadas a construir un plan de acción sólido y realista. Estas etapas son:
    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Diagnóstico y análisis preliminar
              p En esta etapa se recopila la información clave sobre los procesos críticos, activos de información, riesgos asociados y tiempos máximos de recuperación (RTO y RPO). El propósito es conocer la situación actual de la organización y sus vulnerabilidades. Por ejemplo, identificar que el sistema financiero depende de un único servidor central sin respaldo en la nube.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img04.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Definición de objetivos y alcance
              p Se establecen los propósitos de la estrategia, los procesos incluidos y los límites operativos. El alcance puede abarcar toda la organización o concentrarse en áreas críticas. Por ejemplo, formular una estrategia específica para asegurar la continuidad del servicio al cliente y la facturación electrónica.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img05.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Selección de alternativas de continuidad
              p A partir de los riesgos identificados, se evalúan distintas opciones de respuesta y recuperación, tales como sitios alternos, respaldo en la nube, redundancia de servidores, planes de reemplazo de personal o acuerdos con terceros. Por ejemplo, contratar un centro de datos externo como respaldo ante fallos en la infraestructura principal.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img06.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Evaluación técnica, financiera y operativa
              p Cada alternativa debe analizarse en función de su viabilidad técnica, costo-beneficio y compatibilidad con las capacidades organizacionales. Se priorizan las soluciones que ofrezcan equilibrio entre eficiencia y sostenibilidad.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img07.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Diseño y documentación de la estrategia
              p En esta fase se formalizan los procedimientos, responsables, recursos y cronogramas. La documentación debe incluir protocolos de activación, comunicación, seguimiento y retorno a la normalidad.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img08.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Validación y aprobación
              p La estrategia diseñada se presenta a la alta dirección para su revisión, prueba y validación. Es importante que su aprobación esté acompañada de la asignación de recursos y compromisos institucionales.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img09.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-1.order-2
              h4 Implementación y mejora continua
              p Finalmente, las estrategias se ponen en marcha mediante simulaciones, capacitaciones y ejercicios prácticos. Los resultados obtenidos permiten identificar oportunidades de mejora, fortaleciendo la capacidad de respuesta y la cultura de resiliencia organizacional.
            .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img10.jpg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Para una mejor comprensión del proceso, a continuación, se presenta una tabla que resume las etapas, objetivos, actividades y resultados esperados en la formulación de estrategias de continuidad del negocio. Este formato permite demostrar de forma estructurada los pasos necesarios para diseñar e implementar estrategias efectivas.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span <em>Etapas del proceso de formulación de estrategias de continuidad del negocio</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Etapa
                th(data-aos="fade-down")(style= "width: 25%") Objetivo principal
                th(data-aos="fade-down")(style= "width: 25%") Actividades clave
                th(data-aos="fade-down")(style= "width: 25%") Resultado esperado
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Diagnóstico y análisis preliminar.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identificar el contexto y vulnerabilidades.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Revisión del BIA, análisis de riesgos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mapa de procesos y riesgos críticos.
              tr
                td.text-bold(data-aos="fade-down") Definición de objetivos y alcance.
                td(data-aos="fade-down") Determinar prioridades y límites.
                td(data-aos="fade-down") Reuniones con líderes de proceso.
                td(data-aos="fade-down") Documento de alcance y objetivos.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Selección de alternativas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Elegir opciones de continuidad adecuadas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluación técnica y operativa.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Lista de estrategias viables.
              tr
                td.text-bold(data-aos="fade-down") Evaluación técnica y financiera.
                td(data-aos="fade-down") Analizar viabilidad y costos.
                td(data-aos="fade-down") Estimación de recursos y beneficios.
                td(data-aos="fade-down") Estrategia priorizada por factibilidad.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Diseño y documentación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Formalizar la estrategia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Elaboración de procedimientos y protocolos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Documento de estrategia validado.
              tr
                td.text-bold(data-aos="fade-down") Validación y aprobación.
                td(data-aos="fade-down") Garantizar respaldo institucional.
                td(data-aos="fade-down") Revisión por la alta dirección.
                td(data-aos="fade-down") Estrategia aprobada e institucionalizada.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Implementación y mejora continua.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ejecutar y optimizar la estrategia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Simulacros, capacitaciones y auditorías.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Estrategia operativa y actualizada.
    p.mb-0(data-aos="fade-down") La formulación de estrategias de continuidad del negocio no debe entenderse como una tarea aislada, sino como un proceso cíclico y colaborativo que involucra a todas las áreas de la organización. Cada etapa aporta información y decisiones clave que, en conjunto, permiten construir una respuesta sólida frente a contingencias, garantizando la resiliencia institucional y la continuidad de los servicios esenciales.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Aplicación de criterios técnicos y de gestión en el diseño
    .tarjeta.tarjeta--BG02.px-lg-5.px-4.mb-5
      .row.justify-content-center(data-aos="flip-up")
        .col-lg-7.col-12.order-lg-2.order-2
          p(data-aos="fade-down") El diseño de estrategias de continuidad del negocio requiere un equilibrio entre los criterios técnicos y de gestión, de manera que las soluciones planteadas sean viables, sostenibles y coherentes con la realidad operativa de la organización. Estos criterios garantizan que las estrategias no solo respondan a los riesgos identificados, sino que también se integren de manera efectiva en la estructura organizacional, la cultura institucional y los sistemas de gestión existentes.
          .cajon.cajon.C02.color-secundario.p-4.mb-3
            p.mb-0(data-aos="fade-down") Los criterios técnicos se enfocan en la capacidad de los recursos tecnológicos, la infraestructura y los mecanismos de respaldo para soportar las estrategias definidas. Por su parte, los criterios de gestión están orientados a la planeación, asignación de responsabilidades, coordinación interdepartamental, seguimiento y mejora continua de las acciones de continuidad.
          p(data-aos="fade-down") Entre los principales criterios aplicables al diseño se destacan los siguientes:
        .col-lg-3.col-md-6.col-12.mb-3.order-lg-1.order-1.mb-4
          .row.justify-content-center(data-aos="flip-up")
            .col
              figure
                img(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span <em>Criterios técnicos y de gestión en el diseño de estrategias de continuidad</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Tipo de criterio
                th(data-aos="fade-down")(style= "width: 25%") Criterio específico
                th(data-aos="fade-down")(style= "width: 25%") Descripción
                th(data-aos="fade-down")(style= "width: 25%") Ejemplo de aplicación
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Técnico
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Viabilidad tecnológica.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evalúa la compatibilidad de la estrategia con los sistemas y recursos existentes.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Implementar replicación en la nube solo si la infraestructura actual soporta el volumen de datos.
              tr
                td.text-bold(data-aos="fade-down") Técnico
                td(data-aos="fade-down") Capacidad de recuperación.
                td(data-aos="fade-down") Determina si los mecanismos de respaldo y recuperación cumplen con los tiempos definidos (RTO y RPO).
                td(data-aos="fade-down") Configurar copias automáticas cada hora para garantizar una pérdida máxima de una hora de datos.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Técnico
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Redundancia y disponibilidad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Asegura que existan recursos alternos para continuar la operación ante fallas del sistema principal.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tener servidores espejo en otra sede o proveedor externo.
              tr
                td.text-bold(data-aos="fade-down") De gestión
                td(data-aos="fade-down") Gobernanza y roles definidos.
                td(data-aos="fade-down") Establece responsables y procedimientos claros para la activación y control de las estrategias.
                td(data-aos="fade-down") Designar un líder de continuidad en cada área crítica.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") De gestión
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Comunicación y coordinación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Define protocolos de comunicación interna y externa durante incidentes.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Crear una cadena de comunicación institucional ante emergencias.
              tr
                td.text-bold(data-aos="fade-down") De gestión
                td(data-aos="fade-down") Evaluación costo-beneficio.
                td(data-aos="fade-down") Analiza la relación entre la inversión en la estrategia y los beneficios esperados en reducción de riesgos.
                td(data-aos="fade-down") Invertir en respaldo en la nube que reduce el tiempo de recuperación en un 80 %.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") De gestión
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alineación normativa.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Garantiza que las estrategias cumplan con los estándares ISO y la legislación nacional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alinear el plan de continuidad con la ISO 22301 y la Ley 1581 de 2012.
              tr
                td.text-bold(data-aos="fade-down") De gestión
                td(data-aos="fade-down") Mejora continua.
                td(data-aos="fade-down") Asegura la revisión y actualización periódica de las estrategias según cambios organizacionales o tecnológicos.
                td(data-aos="fade-down") Realizar simulacros anuales y ajustar procedimientos según resultados.
    .row.justify-content-center.mb-0
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema3/img12.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C01
            .p-4
              p.mb-0 La aplicación práctica de estos criterios debe integrarse dentro de un proceso estructurado que combine la evaluación técnica, el análisis de riesgos, la asignación de recursos y la toma de decisiones basada en evidencia. Por ejemplo, una organización que identifique la vulnerabilidad de su infraestructura tecnológica puede aplicar criterios técnicos para evaluar la capacidad del sistema de respaldo y criterios de gestión para priorizar la inversión más rentable y sostenible.
        p(data-aos="fade-down") Asimismo, la participación activa de la alta dirección resulta fundamental, ya que permite garantizar la asignación de recursos, el respaldo institucional y la incorporación de las estrategias en la política global de continuidad del negocio. La gestión debe orientarse no solo a la reacción frente a incidentes, sino también a la prevención, mediante la creación de una cultura organizacional resiliente.
        p.mb-0(data-aos="fade-down") En conclusión, la aplicación equilibrada de criterios técnicos y de gestión en el diseño de estrategias de continuidad del negocio permite crear soluciones realistas, adaptadas a las necesidades y capacidades de la organización. Este enfoque integral asegura que las estrategias sean sostenibles, auditables y efectivas, fortaleciendo la capacidad institucional para enfrentar y superar eventos disruptivos.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Pruebas, validación y mejora continua de las estrategias
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img13.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las pruebas, la validación y la mejora continua son fases fundamentales dentro del ciclo de gestión de la continuidad del negocio, ya que permiten comprobar la eficacia real de las estrategias diseñadas, identificar brechas y fortalecer la capacidad de respuesta de la organización ante situaciones críticas. Sin estos procesos, los planes de continuidad se convierten en documentos teóricos sin garantía de aplicación práctica.
    p(data-aos="fade-down") Las pruebas de continuidad del negocio tienen como propósito verificar que las estrategias funcionen adecuadamente en escenarios reales o simulados. Su ejecución debe ser planificada, documentada y evaluada con base en objetivos claros y medibles. De acuerdo con la ISO 22301, estas pruebas deben realizarse de forma periódica y abarcar diferentes niveles de complejidad.
    p.mb-5(data-aos="fade-down") A continuación, se presentan los principales tipos de pruebas utilizadas en la gestión de continuidad:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span <em>Tipos de pruebas de continuidad del negocio</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de prueba
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo de aplicación
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Prueba de escritorio o revisión documental.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Consiste en revisar el plan de continuidad en sesiones de trabajo, verificando que la información sea completa y actualizada.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El comité de continuidad revisa los procedimientos de recuperación de sistemas críticos y los contactos de emergencia.
              tr
                td.text-bold(data-aos="fade-down") Simulación o ejercicio teórico.
                td(data-aos="fade-down") Recrea un escenario hipotético para evaluar la toma de decisiones y la coordinación entre áreas.
                td(data-aos="fade-down") Simular una falla en el servidor principal y analizar cómo cada equipo aplica el plan.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Prueba técnica o funcional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evalúa el desempeño real de los sistemas, respaldos y recursos durante una interrupción controlada.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Desconectar temporalmente un servidor secundario para verificar la activación del servidor espejo.
              tr
                td.text-bold(data-aos="fade-down") Prueba integral o de campo.
                td(data-aos="fade-down") Involucra a toda la organización en la ejecución práctica del plan, bajo condiciones simuladas.
                td(data-aos="fade-down") Realizar un simulacro de evacuación y continuidad operativa por un corte de energía prolongado.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Prueba de recuperación total.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Valida la capacidad de restablecer por completo las operaciones en un entorno alterno.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Trasladar temporalmente los servicios críticos a un centro de datos externo y comprobar la operatividad total.
    p(data-aos="fade-down") La validación de las estrategias se realiza mediante la comparación de los resultados obtenidos con los objetivos establecidos en el plan, analizando la efectividad, los tiempos de respuesta, la coordinación y la disponibilidad de los recursos. Este proceso permite confirmar que las estrategias cumplen con los niveles de servicio definidos (RTO y RPO) y con los requisitos normativos aplicables.
    p.mb-5(data-aos="fade-down") En caso de detectarse desviaciones, debe generarse un informe de resultados y acciones correctivas, en el que se especifiquen los hallazgos, las oportunidades de mejora y las lecciones aprendidas. Estos informes constituyen un insumo esencial para la siguiente etapa de mejora continua.
    .row.justify-content-center.mb-5
      .col-12.movil
        figure
          img(src='@/assets/curso/temas/tema3/img15.svg', alt='Imagen decorativa')
      .col-lg-10.col-12.desktop
        ImagenInfografica.color-acento-botones(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img14.svg', alt="Imagen decorativa")
          .tarjeta.color-acento-botones.p-3(x="20.5%" y="82%" numero="+")
            p Aplicar acciones correctivas y de mejora basadas en los hallazgos, garantizando la actualización constante del sistema.
          .tarjeta.color-acento-botones.p-3(x="20.5%" y="33%" numero="+")
            p Definir objetivos, políticas, estrategias y recursos necesarios para la continuidad del negocio.
          .tarjeta.color-acento-botones.p-3(x="80%" y="82%" numero="+")
            p Evaluar los resultados obtenidos en las pruebas, auditorías o incidentes reales.
          .tarjeta.color-acento-botones.p-3(x="80%" y="33%" numero="+")
            p Implementar las estrategias, ejecutar las pruebas y poner en marcha los procedimientos definidos.
    p.mb-5(data-aos="fade-down") La mejora continua implica revisar, actualizar y optimizar las estrategias con base en la información obtenida de las pruebas, auditorías internas, cambios tecnológicos o lecciones aprendidas tras incidentes reales. Este principio asegura que el Sistema de Gestión de Continuidad del Negocio (SGCN) evolucione junto con la organización y mantenga su vigencia ante nuevos riesgos o contextos.
    .row.justify-content-center.mb-0
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema3/img16.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C01
            .p-4
              p.mb-0 Por ejemplo, una empresa que detecte durante una prueba técnica que sus respaldos automáticos no se ejecutan correctamente debe ajustar su configuración, documentar el cambio y programar una nueva validación. De igual forma, si una simulación revela fallas en la comunicación interna, se deben actualizar los protocolos y reforzar la capacitación del personal.
        p.mb-0(data-aos="fade-down") Las pruebas, la validación y la mejora continua son pilares esenciales para garantizar la efectividad y sostenibilidad de las estrategias de continuidad del negocio. A través de un proceso cíclico y sistemático, las organizaciones pueden asegurar que sus planes sean dinámicos, confiables y estén preparados para responder de forma eficiente ante cualquier contingencia.

</template>

<script>
export default {
  name: 'Tema3',
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
