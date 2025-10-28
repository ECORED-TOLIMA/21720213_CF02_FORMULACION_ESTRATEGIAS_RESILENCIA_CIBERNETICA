<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda el diseño e implementación de estrategias orientadas a garantizar la continuidad del negocio ante incidentes o interrupciones. Se analizan los tipos de estrategias, los criterios técnicos para su selección y las metodologías del Análisis de Impacto al Negocio (BIA) para identificar procesos críticos y definir los tiempos de recuperación (RTO y RPO). Asimismo, se estudian las etapas para la formulación y validación de estrategias efectivas, junto con los elementos esenciales del Plan de Continuidad del Negocio (PCN) y su relación con los planes de contingencia y recuperación. Finalmente, se promueve la aplicación práctica mediante la elaboración de planes y simulaciones, fortaleciendo la resiliencia organizacional y la capacidad de respuesta ante eventos adversos.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt=" En la síntesis se presenta una visión general de los conceptos y procesos clave para la gestión de la continuidad del negocio, destacando la importancia de las estrategias, el análisis de impacto, los tiempos de recuperación y la formulación del plan de continuidad como herramientas fundamentales para fortalecer la resiliencia y asegurar la operación ante eventos disruptivos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
