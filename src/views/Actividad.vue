<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El objetivo principal de las estrategias de continuidad del negocio, es garantizar la operación de los procesos críticos ante incidentes o interrupciones.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Las estrategias de mitigación buscan evitar completamente que ocurran eventos adversos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El Análisis de Impacto al Negocio (BIA) permite identificar los procesos críticos y priorizar los recursos para su recuperación.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El RTO se refiere al tiempo máximo aceptable que puede estar inactivo un proceso antes de afectar gravemente la operación.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El RPO define el tiempo máximo permitido para recuperar la infraestructura física después de un desastre.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Los planes de continuidad, contingencia y recuperación tienen el mismo propósito y estructura.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La validación de estrategias consiste en probar su efectividad mediante ejercicios o simulaciones controladas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'El Plan de Continuidad del Negocio (PCN) debe actualizarse solo cuando ocurre una interrupción significativa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La gestión del riesgo es una parte fundamental para la formulación de estrategias de continuidad.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'El BIA es un proceso estático que no requiere revisión constante.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Las estrategias de transferencia del riesgo consisten en compartirlo con terceros, por ejemplo, a través de seguros.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La resiliencia organizacional se refiere a la capacidad de prevenir incidentes antes de que ocurran.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Un PCN efectivo define responsables, recursos, procedimientos y tiempos de respuesta ante incidentes.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Las simulaciones de continuidad permiten medir la capacidad real de respuesta de la organización.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La alta dirección no tiene un papel relevante en la implementación del PCN.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La capacitación del personal forma parte de las acciones preventivas dentro de las estrategias de continuidad.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Un RTO más corto implica una recuperación más rápida, pero también mayores costos de implementación.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Las estrategias de sustitución temporal son útiles cuando no se dispone de los recursos habituales para operar.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'El cumplimiento normativo no influye en el diseño de estrategias de continuidad del negocio.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La mejora continua es un principio fundamental del Sistema de Gestión de Continuidad del Negocio.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una sólida comprensión de las estrategias de continuidad del negocio, el análisis de impacto y la gestión de recuperación, reflejando dominio en la aplicación de buenas prácticas para fortalecer la resiliencia organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
