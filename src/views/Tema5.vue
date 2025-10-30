<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 5
      h1 Aplicación práctica
    .col.mb-5
      figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema5/img01.png', alt='Imagen decorativa')
    p(data-aos="fade-down") La aplicación práctica de los conocimientos sobre continuidad del negocio, permite consolidar las competencias desarrolladas en las etapas anteriores, trasladando la teoría a contextos reales o simulados. En esta fase, los aprendices ponen en práctica los principios de resiliencia organizacional, la gestión del riesgo y la planificación estratégica mediante el diseño y validación de estrategias adaptadas a las necesidades específicas de una organización.
    p.mb-5(data-aos="fade-down") La práctica incluye tres actividades clave: el desarrollo de estrategias, la formulación de un plan básico de continuidad y la simulación de escenarios de interrupción.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Desarrollo de estrategias de continuidad según requerimientos organizacionales
    p.mb-5(data-aos="fade-down") El desarrollo de estrategias de continuidad del negocio implica adaptar las acciones preventivas, de mitigación y recuperación a las condiciones particulares de cada organización. Este proceso debe basarse en los resultados del Análisis de Impacto al Negocio (BIA) y en la evaluación de riesgos, garantizando que las medidas propuestas sean viables, sostenibles y efectivas ante los escenarios identificados.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p(data-aos="fade-down") Para lograrlo, la organización debe analizar sus procesos críticos, los recursos que los soportan y las vulnerabilidades que pueden afectar su funcionamiento. A partir de esta información, se establecen estrategias diferenciales que respondan a los requerimientos institucionales, considerando aspectos como la naturaleza del negocio, el tamaño de la empresa, la infraestructura tecnológica, la disponibilidad presupuestal y la madurez organizacional en gestión de continuidad.
        br
        br
    p.mb-5(data-aos="fade-down") El proceso de desarrollo de estrategias suele incluir las siguientes fases:
    .row.mb-4
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema5/img03.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h4 Definición de objetivos de continuidad
              p Determinar qué servicios o procesos deben mantenerse operativos y en qué condiciones.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema5/img04.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h4 Selección de estrategias adecuadas
              p Identificar y combinar medidas preventivas, de mitigación, recuperación y transferencia de riesgos, según el nivel de criticidad.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema5/img05.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h4 Asignación de responsables y recursos
              p Designar equipos de trabajo, definir presupuestos y establecer mecanismos de seguimiento y control.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C03.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema5/img06.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h4 Validación y pruebas piloto
              p Verificar la eficacia de las estrategias mediante simulaciones o ejercicios prácticos que permitan ajustar procedimientos.
    p.mb-5(data-aos="fade-down") Con el fin de aclarar la aplicación de este proceso, se presenta a continuación un ejemplo práctico contextualizado:
    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Caso práctico sobre una empresa de servicios tecnológicos
    .row.justify-content-center.mb-5
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        p.mb-5(data-aos="fade-down") Una empresa del sector tecnológico que provee soluciones en la nube a instituciones educativas identifica, a través de su BIA, que sus procesos más críticos son el soporte técnico, la gestión de datos de clientes y la operación de servidores. A partir de este diagnóstico, desarrolla las siguientes estrategias de continuidad:
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema5/img07.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C01
            .p-4
              h4 Estrategias preventivas
              p.mb-0 Implementación de mantenimientos programados, actualizaciones automáticas de <em>software</em> y monitoreo de servidores las 24 horas, con el fin de anticipar posibles fallos.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema5/img08.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C01
            .p-4
              h4 Estrategias de mitigación
              p.mb-0 Establecimiento de copias de respaldo en tres ubicaciones geográficas distintas y configuración de un sistema de redundancia en la nube para garantizar la disponibilidad de los datos.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema5/img09.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C01
            .p-4
              h4 Estrategias de recuperación
              p.mb-0 Creación de un protocolo de restauración de servicios en menos de dos horas (RTO = 2 h) y establecimiento de un RPO de 30 minutos para evitar pérdida significativa de información.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema5/img10.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C01
            .p-4
              h4 Estrategias de comunicación
              p.mb-0 Diseño de un plan de comunicación interna y externa que defina los canales, responsables y mensajes a emitir durante un incidente, garantizando la transparencia y confianza con los clientes.
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Como resultado, la empresa logra mantener la continuidad de sus servicios esenciales incluso ante cortes eléctricos o fallas de red, asegurando la satisfacción del cliente y el cumplimiento de los acuerdos de nivel de servicio (SLA). Además, la organización fortalece su cultura de resiliencia, al integrar la gestión de continuidad como parte de la planeación estratégica y del ciclo de mejora continua de su Sistema de Gestión.
    p.mb-0(data-aos="fade-down") El desarrollo de estrategias de continuidad según los requerimientos organizacionales permite transformar los resultados del análisis de riesgos y del BIA en acciones concretas, priorizadas y adaptadas al contexto de la empresa. De esta manera, se garantiza la sostenibilidad operativa y la capacidad de respuesta ante cualquier eventualidad que pueda comprometer la estabilidad del negocio.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Formulación de un plan básico de continuidad del negocio
    p.mb-5(data-aos="fade-down") La formulación de un Plan de Continuidad del Negocio (PCN) consiste en estructurar un conjunto de procedimientos, recursos y responsabilidades que permitan mantener o restablecer las operaciones críticas ante la ocurrencia de incidentes disruptivos. Su propósito es minimizar los efectos negativos sobre la organización, garantizar la protección de los activos esenciales y preservar la confianza de los clientes y partes interesadas.
    .row.justify-content-center.mb-4
      .col-12
        .row.justify-content-center
          .col-lg-10.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--C01.p-2.mb-5
              .row.justify-content-center.align-items-center
                .col-lg-3.col-8.col-md-7.order-lg-1.order-1.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema5/img11.svg', alt='Imagen decorativa')
                .col-lg-8.col-12.order-lg-2.order-2
                  p.text-bold(data-aos="fade-down") Un PCN básico debe incluir elementos esenciales como:
                  ul.lista-ul--color.mb-0(data-aos="fade-down")
                    li.mb-1
                      i.fas.fa-cog
                      p.mb-0 La identificación de procesos críticos y sus dependencias.
                    li.mb-1
                      i.fas.fa-cog
                      p.mb-0 Los escenarios de riesgo que podrían afectarlos.
                    li.mb-1
                      i.fas.fa-cog
                      p.mb-0 Las estrategias de continuidad seleccionadas.
                    li.mb-1
                      i.fas.fa-cog
                      p.mb-0 La asignación de responsabilidades y equipos de respuesta.
                    li.mb-1
                      i.fas.fa-cog
                      p.mb-0 Los procedimientos de recuperación con sus tiempos de ejecución (RTO y RPO).
                    li.mb-1
                      i.fas.fa-cog
                      p.mb-0 Los canales de comunicación interna y externa.
                    li.mb-1
                      i.fas.fa-cog
                      p.mb-0 El plan de pruebas, mantenimiento y mejora continua.
            p(data-aos="fade-down") A continuación, se presenta un caso práctico que describe la formulación de un PCN en una empresa del sector financiero:
    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Caso práctico sobre la formulación del PCN en una entidad financiera
    p.mb-5(data-aos="fade-down") Una entidad financiera regional identifica, a través del Análisis de Impacto al Negocio (BIA), que sus procesos más críticos son la atención al cliente, la operación de la plataforma de pagos electrónicos y la gestión contable. Con base en este diagnóstico, formula su Plan de Continuidad del Negocio bajo las siguientes fases:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-6.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
        p(data-aos="fade-down") 
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Definición del alcance del plan")
            .col-12.mb-4.mb-md-0
              p.mb-0 El PCN cubrirá las operaciones centrales de la entidad, incluyendo servicios en línea, atención presencial y procesamiento de pagos.
          .row(numero="2" titulo="Establecimiento del comité de continuidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Conformado por representantes de tecnología, operaciones, finanzas, comunicaciones y recursos humanos, responsables de activar y coordinar las acciones del plan.
          .row(numero="3" titulo="Identificación de escenarios de interrupción")
            .col-12.mb-4.mb-md-0
              p.mb-0 Entre ellos, ciberataques, fallas eléctricas, daños en servidores y emergencias naturales que afecten las sucursales.
          .row(numero="4" titulo="Diseño de estrategias y procedimientos")
            .col-12.mb-4.mb-md-0
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 <b>Prevención</b>: fortalecimiento del sistema de seguridad perimetral y respaldo diario de bases de datos.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 <b>Mitigación</b>: contratación de un centro de datos alterno con replicación en tiempo real.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 <b>Recuperación</b>: protocolo de restauración de servicios priorizados con un RTO de 1 hora y RPO de 15 minutos.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 <b>Comunicación</b>: difusión de mensajes automáticos a los clientes a través de la aplicación móvil y página <em>web</em>.
          .row(numero="5" titulo="Asignación de recursos y responsables")
            .col-12.mb-4.mb-md-0
              p.mb-0 Cada área dispone de un plan operativo que detalla las funciones del personal durante la emergencia, los recursos necesarios y los tiempos de respuesta.
          .row(numero="6" titulo="Pruebas y validación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se realizan simulacros semestrales de interrupción tecnológica, evaluando la eficiencia de las estrategias y ajustando los procedimientos de acuerdo con los resultados obtenidos.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema5/img12.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Gracias a la implementación del PCN, la entidad logra reducir significativamente el tiempo de respuesta ante fallos, mantener la confianza del cliente y asegurar la estabilidad operativa de los servicios financieros, incluso en situaciones de alta presión o crisis.
    p.mb-0(data-aos="fade-down") En conclusión, la formulación de un plan básico de continuidad del negocio permite estructurar una respuesta organizada, práctica y alineada con los objetivos estratégicos de la organización. Este documento se convierte en una herramienta clave para garantizar la resiliencia institucional, la protección de los activos críticos y la sostenibilidad del negocio ante cualquier eventualidad.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Simulación de escenarios de interrupción y respuesta organizacional
    p(data-aos="fade-down") La simulación de escenarios de interrupción constituye una herramienta fundamental para evaluar la eficacia del Plan de Continuidad del Negocio (PCN) y medir la capacidad real de respuesta de la organización ante situaciones críticas. Su propósito es verificar si los procedimientos establecidos son funcionales, si los responsables conocen sus roles y si los recursos disponibles permiten cumplir con los tiempos de recuperación definidos.
    p(data-aos="fade-down") Estos ejercicios permiten fortalecer la cultura de resiliencia organizacional, identificar debilidades en los procesos de comunicación, detectar fallas en los sistemas de respaldo y generar oportunidades de mejora continua. Además, promueven la coordinación interdepartamental y la toma de decisiones basada en la experiencia práctica.
    p.mb-5(data-aos="fade-down") Las simulaciones pueden clasificarse en tres tipos principales:
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/img13.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Pruebas de escritorio o teóricas
            h5.t2.mb-2 Pruebas de escritorio o teóricas
            p.mb-0 Se realizan mediante sesiones de análisis en las que los líderes revisan los pasos del plan y evalúan la pertinencia de las acciones ante escenarios hipotéticos.
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/img14.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Simulacros parciales
            h5.t2.mb-2 Simulacros parciales
            p.mb-0 Implican la ejecución de algunas actividades del plan, como el restablecimiento de un servidor o la reubicación temporal de personal.
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/img15.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Simulacros integrales
            h5.t2.mb-2 Simulacros integrales
            p.mb-0 Reproducen un evento disruptivo de forma completa, involucrando a todas las áreas, con el fin de medir tiempos reales de reacción, comunicación y recuperación.
    p.mb-5(data-aos="fade-down") A continuación, se presenta un caso práctico que ejemplifica la aplicación de un ejercicio de simulación:
    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Caso práctico sobre simulación de interrupción tecnológica en una empresa de servicios públicos
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        p(data-aos="fade-down") Una empresa de servicios públicos decide evaluar la efectividad de su Plan de Continuidad del Negocio mediante la simulación de una falla crítica en su sistema central de facturación y atención al usuario. El escenario simulado consiste en una caída total del servidor principal durante la jornada de mayor demanda.
        .col-lg-3.col-md-5.col-auto
          .titulo-sexto.color-secundario.etiqueta01
            h5 Etapas de la simulación
      .col-lg-6.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Activación del escenario")
            .col-12.mb-4.mb-md-0
              p.mb-0 El equipo de continuidad notifica la falla y activa los protocolos definidos.
          .row(numero="2" titulo="Ejecución de estrategias de respaldo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se habilita el servidor alterno y se redirige el tráfico de solicitudes al centro de datos secundario.
          .row(numero="3" titulo="Comunicación interna y externa")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se informa a los empleados sobre el procedimiento de contingencia y se emite un comunicado preventivo a los usuarios por canales oficiales.
          .row(numero="4" titulo="Seguimiento y evaluación")
            .col-12.mb-4.mb-md-0
              p Se registran los tiempos de respuesta, las dificultades técnicas y el cumplimiento de los RTO y RPO definidos en el PCN.
          .row(numero="5" titulo="Retroalimentación y mejora")
            .col-12.mb-4.mb-md-0
              p.mb-0 Finalizado el ejercicio, se elabora un informe con las lecciones aprendidas, ajustes requeridos en la infraestructura y nuevas medidas preventivas.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema5/img16.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") El resultado del ejercicio demuestra que la empresa logró restablecer el servicio en menos de 45 minutos, manteniendo la atención al usuario y evitando pérdidas significativas. Sin embargo, se detectaron deficiencias en la comunicación entre áreas técnicas y administrativas, lo que llevó a incorporar nuevos protocolos de coordinación y capacitación.
    p.mb-0(data-aos="fade-down") La simulación de escenarios de interrupción y respuesta organizacional permite a las entidades pasar de la teoría a la práctica, comprobando la efectividad de sus estrategias de continuidad. Este tipo de ejercicios fortalecen la confianza institucional, optimizan la preparación del personal y aseguran que la organización esté realmente lista para enfrentar cualquier eventualidad con eficiencia y resiliencia.


</template>

<script>
export default {
  name: 'Tema5',
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
