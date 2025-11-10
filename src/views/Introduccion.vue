<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") Este componente formativo aborda las estrategias y planes que permiten garantizar la continuidad operativa de una organización ante incidentes, crisis o desastres. Se orienta al diseño, validación e implementación de estrategias de continuidad del negocio, considerando criterios técnicos, organizacionales y de gestión del riesgo.
    .row.justify-content-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-8.col-md-7.order-lg-1.order-1.mb-3
              figure
                img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
            .col-lg-9.col-12.order-lg-2.order-2
              p(data-aos="fade-down") El propósito es que los aprendices comprendan la importancia del Análisis de Impacto al Negocio (BIA), la formulación de estrategias efectivas y la estructuración del Plan de Continuidad del Negocio (PCN) como herramientas clave para fortalecer la resiliencia organizacional y asegurar la recuperación oportuna de los servicios críticos.
              p(data-aos="fade-down") A lo largo del componente, se analizan diferentes tipos de estrategias, sus etapas de desarrollo, la aplicación de indicadores técnicos como RTO y RPO, y los beneficios que aportan los planes de continuidad en la sostenibilidad empresarial. Además, se incluyen actividades prácticas que permitirán aplicar los conceptos a contextos reales mediante la simulación de escenarios de interrupción y respuesta.
        p.mb-0(data-aos="fade-down") Para comprender mejor la relevancia del tema y su aplicación en la gestión moderna, se recomienda acceder al siguiente video introductorio.
    
    .row.justify-content-center.align-items-center.mb-0        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/1PdXnorZ-uI?si=-BMq8AKJiFvvOU1f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
