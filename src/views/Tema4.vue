<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Plan de Continuidad del Negocio (PCN)
    p.mb-5(data-aos="fade-down") Es un instrumento estratégico que permite a las organizaciones mantener o restablecer sus operaciones críticas ante incidentes que interrumpan su funcionamiento normal. Su propósito principal es minimizar el impacto de los eventos disruptivos, como fallas tecnológicas, desastres naturales, ataques cibernéticos o crisis operativas, garantizando la sostenibilidad, resiliencia y confianza institucional.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p(data-aos="fade-down") El PCN constituye la materialización práctica del Sistema de Gestión de Continuidad del Negocio (SGCN), ya que traduce las políticas, estrategias y resultados del Análisis de Impacto al Negocio (BIA) y la gestión del riesgo en un conjunto de procedimientos claros y coordinados para actuar antes, durante y después de una interrupción.
        br
        br
        p.mb-0(data-aos="fade-down") Un PCN bien estructurado no se limita a documentar los pasos de recuperación; debe ser un plan dinámico y actualizado, capaz de adaptarse a los cambios organizacionales, tecnológicos y normativos. Además, debe involucrar a todas las áreas de la entidad, desde la alta dirección hasta el personal operativo, integrando la continuidad dentro de la cultura organizacional.
    p.mb-5(data-aos="fade-down") De acuerdo con la norma ISO 22301, el Plan de Continuidad del Negocio debe contener como mínimo los siguientes elementos esenciales:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img02.svg' alt='AvatarTop')
          h4.text-center Alcance y objetivos
          p Definen los procesos, recursos y ubicaciones que cubre el plan, junto con los propósitos que se busca alcanzar.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img03.svg' alt='AvatarTop')
          h4.text-center Estrategias y procedimientos
          p Describen las acciones específicas para mantener la operación o restablecer los servicios en tiempos definidos.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img04.svg' alt='AvatarTop')
          h4.text-center Roles y responsabilidades
          p Asignan funciones claras a cada actor dentro de la organización, garantizando coordinación y rendición de cuentas.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img05.svg' alt='AvatarTop')
          h4.text-center Protocolos de comunicación
          p Establecen los mecanismos para informar oportunamente a empleados, proveedores, clientes y autoridades.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img06.svg' alt='AvatarTop')
          h4.text-center Procedimientos de activación y cierre
          p Definen los criterios para poner en marcha el plan y declarar el retorno a la normalidad.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img07.svg' alt='AvatarTop')
          h4.text-center Mecanismos de evaluación y mejora
          p Permiten revisar el desempeño del plan mediante pruebas, auditorías y lecciones aprendidas.
    p(data-aos="fade-down") En la práctica, el PCN actúa como una guía operativa integral, que orienta la toma de decisiones bajo presión y facilita la recuperación eficiente. Por ejemplo, en una empresa del sector financiero, el PCN puede detallar los pasos para activar un centro de respaldo, transferir servicios críticos a una sede alterna, recuperar datos desde copias de seguridad y establecer canales de comunicación con los clientes durante la contingencia.
    p.mb-5(data-aos="fade-down") La implementación del PCN aporta beneficios tangibles, entre los que se destacan:
    .tarjeta.tarjeta--BG06.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema4/img08.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema4/img09.svg", alt="alt").img100.m-auto
              p Cumplimiento de requisitos regulatorios y estándares internacionales.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema4/img10.svg", alt="alt").img100.m-auto
              p Reducción del tiempo de inactividad y las pérdidas económicas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema4/img11.svg", alt="alt").img100.m-auto
              p Protección de los activos de información y la reputación institucional. 
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema4/img12.svg", alt="alt").img100.m-auto
              p Fortalecimiento de la resiliencia organizacional y la confianza de las partes interesadas.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p(data-aos="fade-down") El Plan de Continuidad del Negocio constituye el pilar operativo de la resiliencia institucional. Su correcta formulación y actualización constante garantizan que la organización esté preparada para responder de manera estructurada ante cualquier evento disruptivo, protegiendo tanto sus recursos esenciales como su sostenibilidad a largo plazo.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Relación entre planes de continuidad, contingencia y recuperación
    p.mb-5(data-aos="fade-down") Dentro de la gestión integral de la continuidad del negocio, los planes de continuidad, contingencia y recuperación cumplen funciones complementarias que, al integrarse, aseguran la resiliencia organizacional ante eventos disruptivos. Aunque estos planes comparten el propósito común de mantener la operación frente a incidentes, difieren en su alcance, enfoque temporal y nivel de intervención.
    .row.justify-content-center.mb-5
      .col-lg-5.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") El Plan de Continuidad del Negocio (PCN) se centra en mantener las operaciones críticas durante y después de una interrupción significativa, garantizando la prestación de servicios esenciales y la protección de los activos. El Plan de Contingencia, por su parte, está orientado a la respuesta inmediata frente a un evento imprevisto, con el fin de controlar la situación y minimizar daños. Finalmente, el Plan de Recuperación ante Desastres (DRP, por sus siglas en inglés) se enfoca en la restauración técnica de sistemas, infraestructura y datos tras un evento que ha comprometido los recursos tecnológicos.
      .col-lg-5.order-lg-1.order-1.mb-3.col-md-5.col-7
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema4/img13.png', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Comprender la relación entre estos tres planes permite establecer una jerarquía lógica de actuación, donde cada uno cumple un papel específico dentro del proceso general de continuidad. Mientras el plan de contingencia aborda la respuesta inicial, el plan de continuidad asegura la operación mínima del negocio, y el plan de recuperación restablece los servicios a su estado normal.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span <em>Relación entre planes de continuidad, contingencia y recuperación</em>
        .tabla-a.tabla-a.responsivecolor-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 15%") Tipo de plan
                th(data-aos="fade-down")(style= "width: 17%") Propósito principal
                th(data-aos="fade-down")(style= "width: 17%") Enfoque temporal
                th(data-aos="fade-down")(style= "width: 17%") Alcance
                th(data-aos="fade-down")(style= "width: 17%") Responsables principales
                th(data-aos="fade-down")(style= "width: 17%") Ejemplo de aplicación
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Plan de Contingencia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Responder de forma inmediata ante un evento inesperado para controlar daños.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Inmediato (durante el incidente).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Personas, instalaciones y entorno.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Equipos de emergencia, líderes operativos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Activación de protocolos ante incendio o falla eléctrica.
              tr
                td.text-bold(data-aos="fade-down") Plan de Continuidad del Negocio (PCN).
                td(data-aos="fade-down") Mantener la operación de los procesos críticos y servicios esenciales.
                td(data-aos="fade-down") Corto y mediano plazo (durante y después del evento).
                td(data-aos="fade-down") Procesos críticos, personal clave, comunicación y operaciones.
                td(data-aos="fade-down") Comité de continuidad, alta dirección.
                td(data-aos="fade-down") Ejecución de operaciones desde un sitio alterno tras un ciberataque.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Plan de Recuperación ante Desastres (DRP).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Restablecer infraestructura tecnológica y sistemas afectados.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Posterior al evento (fase de restauración).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Recursos tecnológicos, datos, redes, aplicaciones.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Personal de TI y administradores de sistemas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Restauración de bases de datos y servidores en un centro alterno.
    .row.justify-content-center
      .col-lg-10.col-12.mb-5
        p.mb-0(data-aos="fade-down") Además de estas características, una estrategia efectiva debe contar con respaldo de la alta dirección, garantizar la comunicación oportuna entre las áreas involucradas y fomentar una cultura de compromiso entre el personal. La efectividad no solo depende de los recursos tecnológicos, sino también del nivel de preparación humana para responder ante emergencias.
    .row.justify-content-center.mb-5
      .col-lg-5.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Por ejemplo, una organización que dispone de sistemas de respaldo automáticos, pero no capacita a su personal para activarlos correctamente, podría fallar en su respuesta ante una contingencia. Por ello, las estrategias deben contemplar tanto los aspectos técnicos como los procedimentales y humanos.
      .col-lg-5.order-lg-2.order-1.mb-3.col-md-5.col-7
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema4/img14.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En conclusión, las estrategias efectivas son aquellas que logran equilibrio entre viabilidad, eficiencia y adaptabilidad, permitiendo a la organización responder de manera ordenada, minimizar pérdidas y mantener la confianza de sus partes interesadas ante cualquier interrupción significativa.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Elementos esenciales para su implementación
    .tarjeta.tarjeta--BG02.px-lg-5.px-4.mb-5
      .row.justify-content-center(data-aos="flip-up")
        .col-12.order-lg-2.order-2
          p(data-aos="fade-down") La implementación efectiva de un Plan de Continuidad del Negocio (PCN) requiere la integración de una serie de elementos estructurales y operativos que garanticen su funcionalidad y sostenibilidad a lo largo del tiempo. Estos elementos conforman el marco metodológico y organizacional necesario para preparar, responder y recuperarse de cualquier evento que interrumpa la operación normal de la entidad.
          p(data-aos="fade-down") Cada elemento cumple un papel específico dentro del sistema, desde la definición de políticas y responsabilidades hasta la ejecución de pruebas y la mejora continua. Su correcta aplicación asegura que el PCN no sea solo un documento formal, sino una herramienta viva y dinámica que fortalece la resiliencia institucional.
          p.mb-0(data-aos="fade-down") A continuación, se presentan los principales elementos esenciales que deben considerarse en la implementación de un plan de continuidad del negocio:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span <em>Elementos esenciales del Plan de Continuidad del Negocio (PCN)</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Elemento
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo de aplicación
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Política de continuidad del negocio.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Define los principios, objetivos y alcance del sistema, aprobados por la alta dirección.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Documento oficial que establece el compromiso institucional con la continuidad y la resiliencia.
              tr
                td.text-bold(data-aos="fade-down") Gobernanza y roles definidos.
                td(data-aos="fade-down") Determina la estructura organizativa, los responsables del plan y las líneas de autoridad.
                td(data-aos="fade-down") Conformar un Comité de Continuidad del Negocio liderado por la alta dirección.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Análisis de impacto al negocio (BIA).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identifica los procesos críticos, tiempos máximos de recuperación y dependencias operativas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Determinar que la plataforma de pagos debe recuperarse en máximo 1 hora.
              tr
                td.text-bold(data-aos="fade-down") Gestión de riesgos.
                td(data-aos="fade-down") Evalúa amenazas, vulnerabilidades y escenarios que puedan afectar la continuidad operativa.
                td(data-aos="fade-down") Analizar el impacto de una falla eléctrica o un ataque cibernético.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Estrategias y procedimientos de continuidad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Establecen las acciones específicas para mantener o restablecer los procesos críticos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Definir alternativas de operación desde un sitio remoto o el uso de servidores redundantes.
              tr
                td.text-bold(data-aos="fade-down") Recursos y capacidades.
                td(data-aos="fade-down") Incluyen los medios tecnológicos, humanos, financieros y logísticos necesarios para ejecutar el plan.
                td(data-aos="fade-down") Contratar servicios de respaldo en la nube o capacitar personal clave.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Protocolos de comunicación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Definen cómo y a quién se informan los incidentes y las decisiones durante una crisis.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Establecer canales de contacto entre líderes de área y voceros institucionales.
              tr
                td.text-bold(data-aos="fade-down") Procedimientos de activación y respuesta.
                td(data-aos="fade-down") Especifican los criterios, pasos y responsables para activar el plan en caso de incidente.
                td(data-aos="fade-down") Iniciar el PCN al detectar una interrupción mayor en los sistemas de información.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Mecanismos de validación y pruebas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permiten verificar la efectividad del plan mediante ejercicios y simulacros.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Realizar pruebas anuales de recuperación de datos.
              tr
                td.text-bold(data-aos="fade-down") Revisión y mejora continua.
                td(data-aos="fade-down") Aseguran la actualización permanente del plan ante cambios internos o del entorno.
                td(data-aos="fade-down") Revisar el PCN tras un cambio tecnológico o una auditoría interna.
    .row.justify-content-center.mb-0
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        p.mb-5(data-aos="fade-down") La implementación de estos elementos debe realizarse de forma gradual y coordinada, garantizando la participación activa de todas las áreas involucradas. Es fundamental que cada procedimiento esté documentado, probado y revisado periódicamente, de modo que el plan evolucione con las necesidades del negocio y los cambios del entorno.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema4/img15.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C01
            .p-4
              p.mb-0 Por ejemplo, en una institución educativa, la implementación del PCN podría incluir la creación de un comité responsable, la definición de estrategias para respaldar los sistemas académicos, la elaboración de un directorio de contactos de emergencia y la realización de simulacros semestrales para validar la capacidad de respuesta.
        p.mb-0(data-aos="fade-down") Los elementos esenciales del PCN constituyen la base operativa de la continuidad del negocio. Su correcta integración garantiza que la organización cuente con los mecanismos necesarios para anticiparse a las crisis, responder eficazmente y mantener la confianza de sus partes interesadas, fortaleciendo así su sostenibilidad a largo plazo.

</template>

<script>
export default {
  name: 'Tema4',
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
