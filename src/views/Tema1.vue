<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Estrategias de continuidad del negocio
    p.mb-5(data-aos="fade-down") Las estrategias de continuidad del negocio constituyen el conjunto de acciones, políticas y medidas planificadas para garantizar que una organización mantenga sus funciones esenciales durante y después de un evento disruptivo. Su propósito principal es minimizar el impacto de incidentes operativos, tecnológicos o ambientales sobre los procesos críticos, permitiendo una recuperación ordenada y efectiva.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-5
          p.mb-0(data-aos="fade-down") El diseño de estas estrategias parte del conocimiento profundo de los procesos, activos y dependencias de la organización. En este sentido, las estrategias no deben entenderse únicamente como planes de emergencia, sino como un enfoque integral de gestión del riesgo, que promueve la resiliencia organizacional y la capacidad de adaptación frente a cambios o crisis.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p(data-aos="fade-down") Las estrategias de continuidad se aplican en diferentes niveles, dependiendo de la naturaleza y el alcance de los riesgos identificados. A nivel operativo, buscan mantener la disponibilidad de servicios esenciales mediante redundancias tecnológicas, respaldo de datos, infraestructura alterna o personal capacitado. A nivel estratégico, permiten preservar la reputación institucional, el cumplimiento normativo y la confianza de los grupos de interés.
        br
        br
        p.mb-0(data-aos="fade-down") Entre las medidas más comunes se incluyen la implementación de sitios alternos de trabajo, el uso de nubes híbridas o plataformas virtuales de respaldo, la creación de equipos de respuesta ante incidentes, y la definición de protocolos de comunicación y toma de decisiones durante contingencias.
    .row.justify-content-center.mb-5
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema1/img02.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C01
            .p-4
              p.mb-0 Una estrategia de continuidad efectiva debe ser proactiva y dinámica, adaptándose a las condiciones cambiantes del entorno y al crecimiento de la organización. Por ello, su desarrollo requiere de una evaluación continua, acompañada de pruebas, simulaciones y revisiones periódicas que aseguren su eficacia y sostenibilidad en el tiempo.
    p.mb-0(data-aos="fade-down") Las estrategias de continuidad del negocio son un pilar esencial de la resiliencia organizacional, al garantizar la protección de los activos críticos, la estabilidad operativa y la sostenibilidad institucional frente a cualquier tipo de interrupción o crisis.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Tipos de estrategias y su aplicación organizacional
    p(data-aos="fade-down") Las estrategias de continuidad del negocio se clasifican de acuerdo con su propósito, alcance y nivel de intervención dentro de la organización. Estas estrategias buscan prevenir, responder y recuperar las operaciones críticas ante eventos que puedan afectar la disponibilidad de los servicios o la integridad de los activos. Su aplicación depende del tipo de riesgo, la criticidad de los procesos y la capacidad de respuesta institucional.
    p.mb-5(data-aos="fade-down") Entre los tipos más comunes de estrategias se destacan las siguientes:
    .tarjeta.tarjeta--BG01.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4.text-white Estrategias preventivas
            p.text-white Tienen como objetivo reducir la probabilidad de ocurrencia de incidentes mediante la implementación de controles y medidas de protección. Incluyen acciones como el mantenimiento preventivo de equipos, la actualización de sistemas de seguridad, la capacitación del personal, la gestión de proveedores críticos y la redundancia tecnológica. Estas estrategias fortalecen la preparación organizacional y mitigan los efectos de posibles interrupciones.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img03.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4.text-white Estrategias de mitigación
            p.text-white Se enfocan en disminuir el impacto de un evento cuando este ocurre. Implican disponer de respaldos de información, servidores alternos, sistemas de energía ininterrumpida (UPS), o acuerdos con terceros para garantizar la continuidad de servicios esenciales. Su aplicación es clave para asegurar la operación mínima durante una contingencia.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img04.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4.text-white Estrategias de recuperación
            p.text-white Buscan restablecer los servicios y procesos afectados en el menor tiempo posible. Incluyen planes de recuperación ante desastres (DRP), restauración de datos desde copias de seguridad, traslado temporal de operaciones a sitios alternos y procedimientos de comunicación post-incidente. Estas estrategias garantizan el retorno controlado a la normalidad operativa.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img05.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4.text-white Estrategias de transferencia de riesgo
            p.text-white Consisten en delegar parte del riesgo a terceros, generalmente a través de seguros, acuerdos de respaldo mutuo o contratación de servicios especializados. Si bien no eliminan el riesgo, ayudan a mitigar su impacto económico o reputacional.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img06.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4.text-white Estrategias de sustitución temporal
            p.text-white Se aplican cuando no es posible continuar un proceso con los recursos habituales, por lo que se habilitan mecanismos alternativos, como el trabajo remoto, el uso de plataformas en la nube o la externalización de ciertas funciones críticas.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img07.jpg', alt='Imagen decorativa')
    p(data-aos="fade-down") La aplicación organizacional de las estrategias de continuidad requiere un enfoque planificado y transversal, que involucre tanto la alta dirección como las diferentes áreas operativas. Este proceso parte de una evaluación integral de riesgos y del Análisis de Impacto al Negocio (BIA), los cuales permiten determinar qué procesos son críticos, qué recursos los soportan y qué nivel de interrupción puede ser tolerado.
    p.mb-5(data-aos="fade-down") Una vez identificadas estas variables, las estrategias se aplican de forma diferenciada según el contexto de cada organización.
    .row.justify-content-center
      .col-lg-3.col-md-8.col-9.mb-3
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/tema1/img08.svg', alt='Imagen decorativa')
      .col-lg-7.mb-5
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") Por ejemplo, en el área tecnológica, se pueden implementar esquemas de respaldo de datos o replicación de servidores; en la gestión del talento humano, planes de reemplazo de personal clave; y en las operaciones logísticas, acuerdos con proveedores alternos o rutas de distribución contingentes.
    p(data-aos="fade-down") Además, la aplicación efectiva implica establecer responsables, recursos y métricas de desempeño que permitan evaluar su funcionamiento en escenarios reales o simulados. La comunicación interna, la capacitación del personal y la revisión periódica de los planes son elementos indispensables para asegurar que las estrategias mantengan su vigencia frente a cambios en el entorno o en la estructura organizacional.
    p.mb-5(data-aos="fade-down") La aplicación organizacional de las estrategias de continuidad debe abordarse como un proceso estructurado, articulado con el Sistema de Gestión de Continuidad del Negocio (SGCN) y con la estrategia corporativa general. Este proceso se desarrolla en varias etapas:
    .desktop
      .row.mb-5
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Planeación
                p.mb-0 Consiste en definir los objetivos de continuidad, identificar los procesos críticos y seleccionar las estrategias más adecuadas de acuerdo con el análisis de riesgos y el BIA.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img09.svg')})`}")

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img10.svg')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Implementación
                p.mb-0 Incluye la asignación de recursos, la elaboración de procedimientos, la capacitación del personal y la comunicación de las responsabilidades. En esta fase se formalizan los planes y se integran a la operación diaria.

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img11.svg')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Ejecución y monitoreo
                p.mb-0 Corresponde a la puesta en marcha de las estrategias cuando ocurre un evento disruptivo, garantizando la continuidad de los procesos priorizados. Incluye el seguimiento en tiempo real, la toma de decisiones y la activación de los equipos de respuesta.

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img12.svg')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Evaluación y mejora continua
                p.mb-0 Una vez controlado el incidente, se realiza un análisis de desempeño para identificar aciertos, fallas y oportunidades de mejora. Esta retroalimentación fortalece la preparación institucional para futuros eventos.
    .movil
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img09_1.png', alt='Imagen decorativa')
            h4 Planeación
            p.mb-0 Consiste en definir los objetivos de continuidad, identificar los procesos críticos y seleccionar las estrategias más adecuadas de acuerdo con el análisis de riesgos y el BIA.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img10_1.png', alt='Imagen decorativa')
            h4 Implementación
            p.mb-0 Incluye la asignación de recursos, la elaboración de procedimientos, la capacitación del personal y la comunicación de las responsabilidades. En esta fase se formalizan los planes y se integran a la operación diaria.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img11_1.png', alt='Imagen decorativa')
            h4 Ejecución y monitoreo
            p.mb-0 Corresponde a la puesta en marcha de las estrategias cuando ocurre un evento disruptivo, garantizando la continuidad de los procesos priorizados. Incluye el seguimiento en tiempo real, la toma de decisiones y la activación de los equipos de respuesta.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img12_1.png', alt='Imagen decorativa')
            h4 Evaluación y mejora continua
            p.mb-0 Una vez controlado el incidente, se realiza un análisis de desempeño para identificar aciertos, fallas y oportunidades de mejora. Esta retroalimentación fortalece la preparación institucional para futuros eventos.
    //- .row.justify-content-center.mb-4
    //-   .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
    //-     .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
    //-       .indicador--hover(v-if="mostrarIndicador")
    //-       .crd_hover_txt1--img
    //-         figure
    //-           img(src="@/assets/curso/temas/tema1/img09.png", alt="Imagen decorativa")
    //-       .crd_hover_txt1--body
    //-         h5.t1.mb-3 Planeación
    //-         h5.t2.mb-2 Planeación
    //-         p.mb-0 Consiste en definir los objetivos de continuidad, identificar los procesos críticos y seleccionar las estrategias más adecuadas de acuerdo con el análisis de riesgos y el BIA.
    //-   .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
    //-     .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
    //-       .indicador--hover(v-if="mostrarIndicador")
    //-       .crd_hover_txt1--img
    //-         figure
    //-           img(src="@/assets/curso/temas/tema1/img10.png", alt="Imagen decorativa")
    //-       .crd_hover_txt1--body
    //-         h5.t1.mb-3 Implementación
    //-         h5.t2.mb-2 Implementación
    //-         p.mb-0 Incluye la asignación de recursos, la elaboración de procedimientos, la capacitación del personal y la comunicación de las responsabilidades. En esta fase se formalizan los planes y se integran a la operación diaria.
    //-   .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
    //-     .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
    //-       .indicador--hover(v-if="mostrarIndicador")
    //-       .crd_hover_txt1--img
    //-         figure
    //-           img(src="@/assets/curso/temas/tema1/img11.png", alt="Imagen decorativa")
    //-       .crd_hover_txt1--body
    //-         h5.t1.mb-3 Ejecución y monitoreo
    //-         h5.t2.mb-2 Ejecución y monitoreo
    //-         p.mb-0 Corresponde a la puesta en marcha de las estrategias cuando ocurre un evento disruptivo, garantizando la continuidad de los procesos priorizados. Incluye el seguimiento en tiempo real, la toma de decisiones y la activación de los equipos de respuesta.
    //-   .col-xl-3.col-lg-6.col-md-8.col-12.mb-xl-0
    //-     .crd_hover_txt1.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
    //-       .indicador--hover(v-if="mostrarIndicador")
    //-       .crd_hover_txt1--img
    //-         figure
    //-           img(src="@/assets/curso/temas/tema1/img12.png", alt="Imagen decorativa")
    //-       .crd_hover_txt1--body
    //-         h5.t1.mb-3 Evaluación y mejora continua
    //-         h5.t2.mb-2 Evaluación y mejora continua
    //-         p.mb-0 Una vez controlado el incidente, se realiza un análisis de desempeño para identificar aciertos, fallas y oportunidades de mejora. Esta retroalimentación fortalece la preparación institucional para futuros eventos.
    .row.justify-content-center
      .col-lg-10.col-12
        p(data-aos="fade-down") Este enfoque cíclico asegura que las estrategias no sean acciones aisladas, sino parte de un sistema vivo y adaptable. Al integrarlas en la gestión organizacional, se fortalecen la resiliencia, la capacidad de respuesta y la sostenibilidad operativa frente a escenarios cambiantes o de alta incertidumbre.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Criterios técnicos para la selección de estrategias de continuidad
    p(data-aos="fade-down") La selección de estrategias de continuidad del negocio requiere un análisis técnico riguroso que garantice su viabilidad, efectividad y alineación con los objetivos institucionales. Este proceso implica evaluar las condiciones internas y externas de la organización, los recursos disponibles y la capacidad de respuesta ante posibles interrupciones. Una estrategia efectiva no solo debe ser técnicamente sólida, sino también económicamente sostenible y operativamente alcanzable.
    p.mb-5(data-aos="fade-down") Los criterios técnicos que deben considerarse en este proceso incluyen los siguientes:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Matriz de criterios técnicos para la selección de estrategias de continuidad</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Criterio técnico
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo de aplicación
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Análisis costo-beneficio.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evalúa la relación entre el costo de la estrategia y el valor de los activos que protege, priorizando la rentabilidad y sostenibilidad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Implementar un sistema de respaldo automatizado que reduzca el tiempo de inactividad frente al costo de un servidor manual.
              tr
                td.text-bold(data-aos="fade-down") Capacidad tecnológica y operativa.
                td(data-aos="fade-down") Analiza si la infraestructura, el personal y los procesos existentes soportan la estrategia seleccionada.
                td(data-aos="fade-down") Verificar si el ancho de banda y el soporte técnico permiten una migración efectiva a la nube.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Compatibilidad con RTO y RPO.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Asegura que las estrategias respondan a los tiempos máximos de recuperación y pérdida de datos definidos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Configurar respaldos automáticos cada hora para cumplir con un RPO de una hora.
              tr
                td.text-bold(data-aos="fade-down") Cumplimiento normativo y regulatorio.
                td(data-aos="fade-down") Garantiza que las estrategias estén alineadas con las normas ISO y la legislación nacional.
                td(data-aos="fade-down") Alinear el plan de continuidad con los requisitos de la ISO 22301 y la Ley 1581 de 2012.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Escalabilidad y flexibilidad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permite adaptar la estrategia a cambios en la organización o el entorno sin perder eficacia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ampliar la capacidad de almacenamiento en la nube al aumentar el número de usuarios o sedes.
              tr
                td.text-bold(data-aos="fade-down") Integración con otros sistemas de gestión.
                td(data-aos="fade-down") Favorece la coherencia entre los sistemas de calidad, seguridad, riesgos y continuidad.
                td(data-aos="fade-down") Incorporar controles de continuidad en el Sistema de Gestión de la Calidad (ISO 9001).
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Madurez organizacional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evalúa el grado de desarrollo de la cultura de seguridad y gestión del riesgo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  Capacitar al personal y crear comités de continuidad antes de implementar medidas avanzadas.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p(data-aos="fade-down") El cumplimiento de estos criterios permite seleccionar estrategias realistas, sostenibles y coherentes con las capacidades institucionales. La combinación equilibrada entre viabilidad técnica, sostenibilidad económica y cumplimiento normativo garantiza que la organización esté preparada para enfrentar incidentes sin comprometer la estabilidad de sus operaciones.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Validación de estrategias de continuidad del negocio
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La validación de estrategias de continuidad del negocio constituye una fase esencial dentro del ciclo de gestión de la continuidad, ya que permite comprobar la eficacia, pertinencia y capacidad de respuesta de las estrategias implementadas frente a diferentes escenarios de interrupción. Validar implica más que revisar documentos o protocolos; supone verificar, mediante pruebas controladas y análisis de resultados, que las medidas adoptadas realmente funcionan en la práctica.
    p(data-aos="fade-down") El proceso de validación tiene como objetivo asegurar que las estrategias seleccionadas sean viables, actualizadas y acordes con la realidad operativa de la organización. Para ello, se aplican diferentes métodos que permiten evaluar tanto la preparación técnica como la respuesta humana y procedimental ante una crisis.
    p.mb-5(data-aos="fade-down") Entre las principales modalidades de validación se encuentran:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Tipos de pruebas de validación de estrategias de continuidad</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de prueba
                th(data-aos="fade-down")(style= "width: 20%") Descripción
                th(data-aos="fade-down")(style= "width: 20%") Objetivo
                th(data-aos="fade-down")(style= "width: 20%") Frecuencia recomendada
                th(data-aos="fade-down")(style= "width: 20%") Alcance
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Prueba de escritorio.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Simulación teórica basada en escenarios hipotéticos. Se realiza en reuniones con los equipos responsables.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluar la comprensión del plan, los roles y la toma de decisiones.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Al menos una vez al año.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Nivel estratégico y táctico.
              tr
                td.text-bold(data-aos="fade-down") Prueba funcional o parcial.
                td(data-aos="fade-down") Ejecución controlada de componentes específicos del plan, como respaldo de datos o activación de un sistema alterno.
                td(data-aos="fade-down") Comprobar la operatividad de procedimientos o recursos críticos.
                td(data-aos="fade-down") Según criticidad de procesos (cada 6 o 12 meses).
                td(data-aos="fade-down") Nivel operativo.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Prueba integral.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Simulación completa de un evento disruptivo, involucrando todas las áreas relevantes.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluar la efectividad global del plan y la coordinación interdepartamental.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Anual o semestral.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Toda la organización.
              tr
                td.text-bold(data-aos="fade-down") Revisión documental.
                td(data-aos="fade-down") Análisis de políticas, registros y procedimientos actualizados.
                td(data-aos="fade-down") Asegurar coherencia con los cambios normativos y tecnológicos.
                td(data-aos="fade-down") Trimestral o ante cambios relevantes.
                td(data-aos="fade-down") Nivel administrativo.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p(data-aos="fade-down") Una vez finalizadas las pruebas, se debe elaborar un informe de resultados que documente los hallazgos, las lecciones aprendidas y las acciones de mejora necesarias. Este proceso de retroalimentación fortalece el Sistema de Gestión de Continuidad del Negocio (SGCN) y permite ajustar los procedimientos para optimizar la respuesta ante incidentes.
        p(data-aos="fade-down") La validación debe realizarse de manera periódica y planificada, preferiblemente al menos una vez al año o cuando se produzcan cambios significativos en los procesos, la tecnología o el personal clave.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") En síntesis, la validación garantiza que las estrategias de continuidad del negocio no solo existan en papel, sino que sean operativas, confiables y efectivas, consolidando una cultura de mejora continua y resiliencia organizacional frente a situaciones adversas.


</template>

<script>
export default {
  name: 'Tema1',
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
