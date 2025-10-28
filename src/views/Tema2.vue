<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Análisis de Impacto al Negocio (BIA)
    p.mb-5(data-aos="fade-down") El Análisis de Impacto al Negocio (BIA, por sus siglas en inglés) constituye una herramienta esencial dentro de la gestión de continuidad del negocio, cuya finalidad es identificar los procesos y recursos críticos de una organización y determinar las consecuencias que tendría su interrupción. A través de este análisis, las entidades pueden comprender la magnitud del impacto que un evento disruptivo puede generar en las operaciones, los ingresos, la reputación o el cumplimiento normativo.
    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2
        p(data-aos="fade-down") El BIA proporciona una base sólida para la toma de decisiones estratégicas en materia de continuidad y recuperación, ya que permite establecer prioridades, definir tiempos máximos de recuperación (RTO), pérdidas máximas de datos aceptables (RPO) y recursos necesarios para garantizar el funcionamiento mínimo de los servicios esenciales.
        p(data-aos="fade-down") Su aplicación contribuye a fortalecer la resiliencia organizacional, ya que permite anticiparse a los efectos de incidentes como fallas tecnológicas, ciberataques, desastres naturales o interrupciones en la cadena de suministro. Además, el BIA sirve como punto de partida para el diseño de estrategias efectivas y planes de continuidad del negocio (PCN), asegurando que las decisiones estén sustentadas en información objetiva y medible.
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Por ejemplo, una empresa de servicios financieros puede utilizar el BIA para determinar que la interrupción del sistema de pagos electrónicos tendría un impacto crítico en menos de una hora, mientras que la suspensión temporal del correo institucional tendría un efecto moderado y una recuperación más flexible. Esta priorización permite asignar recursos de manera eficiente y focalizar las estrategias en los procesos verdaderamente vitales.
      .col-lg-3.order-lg-2.order-1.mb-3.col-md-5.col-7
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En conclusión, el BIA no solo identifica lo que es crítico para la operación, sino que orienta las acciones que permitirán mantener la continuidad, minimizar pérdidas y garantizar la sostenibilidad del negocio ante cualquier eventualidad.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Metodología del BIA y su importancia en la gestión de continuidad
    .tarjeta.tarjeta--BG02.px-lg-5.mb-5
      .row.justify-content-center(data-aos="flip-up")
        .col-lg-6.col-12.order-lg-2.order-2
          p(data-aos="fade-down") La metodología del Análisis de Impacto al Negocio (BIA) proporciona un marco estructurado para identificar los procesos críticos, evaluar las consecuencias de su interrupción y establecer prioridades de recuperación. Este proceso constituye una etapa clave dentro del Sistema de Gestión de Continuidad del Negocio (SGCN), pues traduce los impactos potenciales en información medible y útil para la toma de decisiones estratégicas.
          p.mb-0(data-aos="fade-down") Su importancia radica en que permite comprender la dependencia entre procesos, activos y recursos, así como cuantificar los efectos financieros, operativos, legales y reputacionales que surgirían ante diferentes escenarios de interrupción. De este modo, el BIA se convierte en un insumo fundamental para diseñar estrategias realistas, asignar recursos eficientemente y mantener la resiliencia institucional.
        .col-lg-4.col-md-6.col-12.mb-3.order-lg-1.order-1.mb-4
          .row.justify-content-center(data-aos="flip-up")
            .col
              figure
                img(src='@/assets/curso/temas/tema2/img02.svg', alt='Imagen decorativa')
        .col-lg-10.col-12.order-lg-2.order-2
          p(data-aos="fade-down") A continuación, se describen las principales etapas metodológicas del BIA:
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial
          .row.mb-0(numero="1" titulo="Planificación y alcance")
            .col-12.mb-4
              p(data-aos="fade-down") En esta fase se define el propósito del BIA, los procesos que serán analizados y los responsables de su ejecución. Se establecen los criterios de evaluación, las unidades de medida del impacto y los umbrales de tolerancia de la organización.
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0(data-aos="fade-down")(style="color:#FF85E7")
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 <b>Ejemplo</b>: determinar si el análisis cubrirá solo los procesos misionales o también los de apoyo, y quiénes serán los líderes de cada área involucrada.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img03.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="2" titulo="Identificación de procesos críticos y recursos asociados")
            .col-12.mb-4
              p(data-aos="fade-down") Consiste en listar los procesos operativos, estratégicos y de soporte, junto con los recursos humanos, tecnológicos, financieros e infraestructurales que los sustentan.
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0(data-aos="fade-down")(style="color:#FF85E7")
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 <b>Ejemplo</b>: un proceso crítico como “gestión de pagos” puede depender de servidores financieros, bases de datos, personal contable y proveedores externos.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img04.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="3" titulo="Evaluación de impactos")
            .col-12.mb-4
              p(data-aos="fade-down") En esta etapa se analizan los efectos que tendría la interrupción de cada proceso durante distintos periodos de tiempo (por ejemplo, 2, 8, 24 o 48 horas). Los impactos se clasifican en categorías:
              ul.lista-ul(style="color:#FF85E7")
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 <b>Operativos</b>: pérdida de productividad, atrasos o parálisis de actividades.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 <b>Financieros</b>: pérdida de ingresos, sanciones o costos adicionales.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 <b>Reputacionales</b>: deterioro de la confianza de clientes o aliados.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 <b>Legales</b> o normativos: incumplimiento de leyes, contratos o regulaciones.
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0(data-aos="fade-down")(style="color:#FF85E7")
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 <b>Ejemplo</b>: la interrupción del sistema de facturación por más de 12 horas puede ocasionar sanciones por incumplimiento con la DIAN y pérdida de ventas.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img05.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="4" titulo="Determinación de RTO y RPO")
            p(data-aos="fade-down") Se definen los tiempos máximos de recuperación (RTO) y los niveles de pérdida de datos aceptables (RPO) para cada proceso, lo que orienta las decisiones técnicas y financieras en la implementación de estrategias de continuidad.
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0(data-aos="fade-down")(style="color:#FF85E7")
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 <b>Ejemplo</b>: un área de atención al cliente puede tener un RTO de 6 horas y un RPO de 1 hora, mientras que un sistema de soporte interno puede tolerar tiempos más amplios. 
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img06.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="5" titulo="Priorización y documentación de resultados")
            p(data-aos="fade-down") Con base en los análisis anteriores, se clasifican los procesos según su nivel de criticidad y se elaboran reportes que describen los impactos esperados, las dependencias, los recursos necesarios y los tiempos objetivos de recuperación.
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0(data-aos="fade-down")(style="color:#FF85E7")
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 <b>Ejemplo</b>: elaborar una matriz que relacione los procesos con su nivel de impacto y prioridad de atención, sirviendo como base para los planes de continuidad.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img07.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="6" titulo="Revisión y actualización periódica")
            p(data-aos="fade-down") El BIA no es un documento estático; debe revisarse regularmente o cuando ocurran cambios significativos en la estructura organizacional, los servicios o el entorno tecnológico.
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0(data-aos="fade-down")(style="color:#FF85E7")
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 <b>Ejemplo</b>: actualizar el análisis tras la apertura de una nueva sede o la implementación de un nuevo sistema de gestión documental.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img08.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En conjunto, esta metodología permite establecer un enfoque sistemático para proteger los procesos esenciales, optimizar recursos y fortalecer la capacidad de respuesta institucional. Un BIA correctamente ejecutado asegura que las estrategias de continuidad del negocio estén alineadas con la realidad operativa y los objetivos estratégicos de la organización, convirtiéndose en una herramienta vital para garantizar su sostenibilidad y resiliencia ante cualquier eventualidad.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Identificación y priorización de procesos críticos
    p.mb-5(data-aos="fade-down") La identificación y priorización de procesos críticos es una de las fases más relevantes dentro del Análisis de Impacto al Negocio (BIA), ya que permite determinar cuáles funciones son esenciales para la continuidad operativa de la organización y qué grado de afectación tendría su interrupción. Este proceso facilita enfocar los esfuerzos en aquellas actividades que sustentan la misión institucional, los compromisos legales y la confianza de los clientes o usuarios.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Un proceso crítico se define como aquel cuya interrupción comprometería gravemente la capacidad de la organización para cumplir sus objetivos estratégicos o regulatorios. Para identificarlo, es necesario analizar la interdependencia entre áreas, los recursos que lo soportan y los impactos que se generarían si dejara de operar durante un periodo determinado.
    p.mb-5(data-aos="fade-down") A continuación, se presenta una metodología orientativa para realizar esta identificación y priorización de manera sistemática:
    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Identificación de los procesos organizacionales
              p Se elabora un inventario que incluya los procesos misionales, estratégicos y de apoyo. Esta información suele obtenerse a partir de los mapas de procesos o los sistemas de gestión de calidad existentes.
              p <b>Ejemplo</b>: en una entidad educativa, los procesos misionales podrían ser “gestión académica”, “evaluación del aprendizaje” y “admisiones”; mientras que los procesos de apoyo incluyen “tecnología de la información” o “recursos humanos”.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img09.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Análisis de dependencias internas y externas
              p Cada proceso se analiza en función de los recursos, servicios o proveedores que necesita para operar correctamente, así como de las áreas que dependen de él.
              p <b>Ejemplo</b>: el proceso de “gestión financiera” depende del sistema contable y del acceso a la red bancaria, pero también provee información a “gestión de compras” y “tesorería”.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img10.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Evaluación del impacto ante interrupciones
              p Se evalúan las consecuencias de una interrupción temporal en cada proceso, considerando los impactos operativos, financieros, reputacionales, legales y de seguridad.
              p <b>Ejemplo</b>: la suspensión de la “plataforma de aprendizaje” en un centro de formación tendría un impacto operativo alto por la imposibilidad de impartir formación y evaluaciones virtuales.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img11.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Priorización según el nivel de criticidad
              p Con base en los resultados del análisis, los procesos se clasifican según su nivel de criticidad: crítico, alto, medio o bajo. Este nivel se determina a partir de la magnitud del impacto y del tiempo máximo de recuperación (RTO) que la organización puede tolerar sin comprometer su operatividad.
              p <b>Ejemplo</b>
              ul.lista-ul.mb-0(data-aos="fade-down")(style="color:#FF85E7")
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Crítico: sistema de gestión académica (RTO = 4 horas).
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Alto: gestión de nómina (RTO = 12 horas).
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Medio: atención al público (RTO = 24 horas).
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Bajo: actividades de archivo físico (RTO = 72 horas).
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img12.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Documentación y comunicación de resultados
              p Los resultados se consolidan en una matriz o informe de priorización que servirá como insumo para definir las estrategias de continuidad.
              p Este documento debe ser validado por la alta dirección y compartido con los responsables de cada área.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.jpg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Para dar contexto a la metodología anterior, se presenta el siguiente ejemplo práctico:
    .tarjeta.tarjeta--BG04.px-lg-5.mb-4.py-3
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col-lg-6.col-12.order-lg-2.order-2
          p(data-aos="fade-down") Una empresa del sector logístico realiza un BIA con el fin de fortalecer su sistema de continuidad del negocio. En el proceso de análisis, se identifican los principales procesos que soportan la operación y se evalúan sus interdependencias, recursos asociados e impactos ante una interrupción prolongada.
          p.mb-0(data-aos="fade-down") Entre los resultados se destacan los siguientes procesos críticos:
        .col-lg-4.col-md-6.col-12.mb-3.order-lg-1.order-1.mb-4
          .row.justify-content-center(data-aos="flip-up")
            .col
              figure
                img(src='@/assets/curso/temas/tema2/img14.svg', alt='Imagen decorativa')
      .row.justify-content-center.mb-5
        .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/img15.svg' alt='AvatarTop')
            .tarjeta.tarjeta--C02.shadow
              .p-4
                .row.justify-content-center.mb-3
                  .col-auto
                    .py-2.px-3
                      p.mb-0 Gestión de transporte
                p.text-center.mb-0 Su interrupción impactaría directamente la entrega oportuna de mercancías, ocasionando retrasos, pérdida de contratos y sanciones por incumplimiento. Este proceso depende de sistemas de rastreo satelital, disponibilidad de vehículos, personal operativo y comunicación con clientes.
        .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/img16.svg' alt='AvatarTop')
            .tarjeta.tarjeta--C02.shadow
              .p-4
                .row.justify-content-center.mb-3
                  .col-auto
                    .py-2.px-3
                      p.mb-0 Atención a clientes
                p.text-center.mb-0 Su suspensión generaría pérdida de confianza, deterioro de la reputación e incumplimiento de acuerdos de nivel de servicio (SLA). Depende de plataformas CRM, canales de comunicación y personal capacitado en gestión de reclamos.
        .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/img17.svg' alt='AvatarTop')
            .tarjeta.tarjeta--C02.shadow
              .p-4
                .row.justify-content-center.mb-3
                  .col-auto
                    .py-2.px-3
                      p.mb-0 Gestión de inventarios
                p.text-center.mb-0 Una falla en este proceso afectaría el control de existencias, la trazabilidad de productos y la planeación de despachos, con impacto financiero y operativo significativo.
      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .cajon.cajon.C01.color-primario.p-4.mb-3
            p.mb-0(data-aos="fade-down") Luego del análisis, la organización clasifica estos procesos como críticos, con RTO de entre 4 y 8 horas y establece medidas como respaldo tecnológico, replicación de servidores, capacitación del personal y acuerdos con operadores alternos de transporte.
    p.mb-0(data-aos="fade-down") En conclusión, la identificación y priorización de procesos críticos permiten a las organizaciones enfocar sus esfuerzos en lo verdaderamente esencial, asignar recursos estratégicamente y fortalecer su capacidad de respuesta frente a eventos disruptivos. Este enfoque sistemático no solo mejora la gestión del riesgo, sino que constituye la base para el desarrollo de planes de continuidad del negocio sólidos y sostenibles.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Determinación de RTO y RPO
    p(data-aos="fade-down") La determinación de los tiempos máximos de recuperación constituye un componente esencial del Análisis de Impacto al Negocio (BIA), ya que permite establecer límites temporales aceptables para restablecer los procesos críticos y recuperar la información afectada tras un incidente. Estos tiempos orientan las decisiones técnicas, financieras y operativas relacionadas con las estrategias de continuidad del negocio.
    p.mb-4(data-aos="fade-down") En la práctica, se definen dos parámetros fundamentales:
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img18.svg', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 RTO (Recovery Time Objective)
              p.mb-0 Es el tiempo máximo que un proceso o sistema puede permanecer inactivo antes de que la interrupción afecte gravemente la operación o la sostenibilidad del negocio. Representa el plazo dentro del cual deben restaurarse los servicios críticos para evitar daños significativos.
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img19.svg', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 RPO (Recovery Point Objective)
              p.mb-0 Es la cantidad máxima de datos que la organización puede permitirse perder, medida en tiempo. Determina el momento hasta el cual deben estar disponibles los respaldos o copias de seguridad de la información.
              br
    p(data-aos="fade-down") Ambos parámetros son interdependientes: el RTO se relaciona con el tiempo de recuperación de la operación, mientras que el RPO está vinculado con la pérdida de datos aceptable. Establecerlos correctamente garantiza que las estrategias de respaldo, replicación y recuperación estén alineadas con los requerimientos reales del negocio.
    p.mb-4(data-aos="fade-down") A continuación, se presentan las principales etapas para su determinación:
    .row.justify-content-center
      .col-lg-10.col-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--C01")
          .row.justify-content-center.p-4(titulo="Identificación del impacto temporal")
            .col-lg-5.order-lg-1.order-2
              p Se analiza cómo varía el impacto de la interrupción a medida que transcurre el tiempo. Esto permite establecer puntos críticos en los que las pérdidas se vuelven insostenibles. Por ejemplo, un banco puede tolerar una hora de interrupción en su plataforma de pagos (RTO = 1 hora), pero no más de 15 minutos de pérdida de información (RPO = 15 minutos).
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img20.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="Definición de los niveles de servicio aceptables")
            .col-lg-5.order-lg-1.order-2
              p Se establecen los umbrales de tolerancia que la organización está dispuesta a aceptar antes de que un proceso se considere en falla crítica. Por ejemplo, una empresa de comercio electrónico puede definir que su sitio <em>web</em> debe estar operativo el 99,9 % del tiempo, lo que limita su RTO a menos de 30 minutos.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img21.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="Evaluación de capacidades técnicas y recursos disponibles")
            .col-lg-5.order-lg-1.order-2
              p El RTO y el RPO deben definirse considerando la infraestructura tecnológica, la redundancia de sistemas, las capacidades del personal y los mecanismos de respaldo existentes. Por ejemplo, si la empresa no cuenta con replicación en tiempo real, el RPO podría ampliarse a 4 horas para ajustarse a las capacidades actuales.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img22.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="Documentación y validación")
            .col-lg-5.order-lg-1.order-2
              p Los tiempos definidos se registran en el informe del BIA y deben ser validados por la alta dirección y los responsables de cada área. Además, deben revisarse periódicamente para ajustarse a cambios tecnológicos o de operación.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img23.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Para contextualizar la información, se presenta un ejemplo claro de la determinación de RTO y RPO:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Ejemplo de determinación de RTO y RPO en procesos críticos</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Proceso crítico
                th(data-aos="fade-down")(style= "width: 20%") Impacto ante interrupción
                th(data-aos="fade-down")(style= "width: 20%") RTO (Tiempo máximo de recuperación)
                th(data-aos="fade-down")(style= "width: 20%") RPO (Pérdida máxima de datos aceptable)
                th(data-aos="fade-down")(style= "width: 20%") Estrategias asociadas
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Plataforma de pagos electrónicos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Muy alto (pérdida de ingresos, reputación y cumplimiento legal).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 1 hora
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 15 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Replicación en tiempo real, respaldo automático, servidor alterno.
              tr
                td.text-bold(data-aos="fade-down") Sistema contable y financiero.
                td(data-aos="fade-down") Alto (retraso en reportes y obligaciones fiscales).
                td(data-aos="fade-down") 8 horas
                td(data-aos="fade-down") 2 horas
                td(data-aos="fade-down") Copias de respaldo diarias, almacenamiento seguro en la nube.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Gestión de clientes (CRM).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Medio (afecta atención y seguimiento comercial).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 12 horas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 4 horas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sincronización en la nube y respaldo incremental.
              tr
                td.text-bold(data-aos="fade-down") Portal <em>web</em> institucional.
                td(data-aos="fade-down") Bajo (afecta comunicación externa temporalmente).
                td(data-aos="fade-down") 24 horas
                td(data-aos="fade-down") 12 horas
                td(data-aos="fade-down") Servidor espejo y sistema de monitoreo.
    p(data-aos="fade-down") El análisis de esta información permite comprender cómo las organizaciones pueden establecer parámetros diferenciados de recuperación según la criticidad de sus procesos. Cada proceso presenta características y requerimientos únicos, por lo que los valores de RTO y RPO no deben interpretarse como estándares fijos, sino como referencias personalizadas que orientan la toma de decisiones. Este tipo de análisis facilita priorizar recursos, definir estrategias adecuadas de respaldo y determinar los mecanismos de comunicación y coordinación necesarios durante una contingencia.
    p.mb-5(data-aos="fade-down") Para dar mayor claridad a la metodología, a continuación, se presenta un ejemplo práctico que aclara su aplicación en un entorno real:
    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2
        .tarjeta.tarjeta--C01.p-4
          p.mb-4(data-aos="fade-down") Una empresa de servicios de salud realiza su BIA y determina los tiempos de recuperación de los procesos más sensibles:
          ul.lista-ul.mb-0(data-aos="fade-down") 
            li.mb-4
              i.lista-ul__vineta
              p.mb-0 Para el sistema de historias clínicas electrónicas, define un RTO de 2 horas y un RPO de 30 minutos, debido a la criticidad de la información médica.
            li.mb-4
              i.lista-ul__vineta
              p.mb-0 El proceso de facturación de servicios médicos obtiene un RTO de 8 horas y un RPO de 2 horas, pues una interrupción prolongada afectaría el flujo de ingresos y los reportes regulatorios.
            li.mb-4
              i.lista-ul__vineta
              p.mb-0 En el caso de la plataforma de agendamiento de citas, se establece un RTO de 4 horas y un RPO de 1 hora, ya que su inactividad afecta directamente la atención al paciente.
          p.mb-0(data-aos="fade-down") Con base en estos parámetros, la organización implementa estrategias de replicación en tiempo real, sistemas redundantes y planes de comunicación para garantizar la continuidad operativa.
      .col-lg-3.order-lg-2.order-1.mb-3.col-md-7.col-10
        figure(data-aos="fade-down") 
          img(src='@/assets/curso/temas/tema2/img24.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") En conclusión, la determinación de los tiempos máximos de recuperación (RTO y RPO) es esencial para planificar acciones de respuesta acordes con la capacidad institucional y las necesidades del negocio. Estos indicadores proporcionan un marco objetivo para diseñar estrategias de respaldo, priorizar recursos y fortalecer la resiliencia organizacional ante posibles interrupciones.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Evaluación de impactos operativos, financieros y reputacionales
    p(data-aos="fade-down") La evaluación de impactos constituye una fase fundamental del Análisis de Impacto al Negocio (BIA), ya que permite determinar las consecuencias que tendría la interrupción de los procesos críticos sobre la estabilidad y sostenibilidad de la organización. Este análisis no solo cuantifica las pérdidas económicas, sino que también considera los efectos en la operación, la reputación institucional y el cumplimiento legal o normativo.
    p.mb-5(data-aos="fade-down") El propósito principal de esta evaluación es establecer prioridades de recuperación y orientar la asignación de recursos a las áreas más vulnerables. Para lograrlo, se analizan tres tipos de impacto: operativo, financiero y reputacional, los cuales deben ser valorados de forma integral, considerando su interdependencia.
    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Impacto operativo")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img25.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Hace referencia a la afectación sobre la capacidad de la organización para ejecutar sus funciones esenciales. Una interrupción operativa puede traducirse en retrasos en la producción, pérdida de eficiencia o incumplimiento de compromisos con los clientes. Por ejemplo, si un sistema de gestión logística falla, los pedidos pueden no ser despachados a tiempo, generando retrasos en la cadena de suministro y afectando la satisfacción del cliente.
      .py-3.py-md-4(titulo="Impacto financiero")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img26.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Se relaciona con las pérdidas económicas derivadas de la interrupción, incluyendo costos directos (reparaciones, reemplazos, multas) e indirectos (pérdida de ventas, penalizaciones contractuales o disminución de ingresos). Por ejemplo, en una entidad bancaria, una caída de su plataforma de pagos durante varias horas podría generar pérdidas millonarias por transacciones no procesadas, además de afectar su flujo de caja diario.
      .py-3.py-md-4(titulo="Impacto reputacional")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img27.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Evalúa el efecto que una interrupción o incumplimiento puede tener sobre la imagen y la confianza de clientes, socios y la sociedad en general. En muchos casos, este impacto puede superar las pérdidas económicas iniciales. Por ejemplo, una empresa de servicios públicos que no comunique adecuadamente una falla prolongada podría ver deteriorada su reputación, generando desconfianza y pérdida de usuarios.
    p.mb-5(data-aos="fade-down") Para estructurar la evaluación, se recomienda utilizar una matriz que asigne valores de severidad (alta, media o baja) a cada tipo de impacto, de acuerdo con la duración de la interrupción y la criticidad del proceso afectado.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span <em>Ejemplo de evaluación de impactos en procesos críticos</em>
        .tabla-a.color-primario
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Proceso crítico
                th(data-aos="fade-down")(style= "width: 20%") Impacto operativo
                th(data-aos="fade-down")(style= "width: 20%") Impacto financiero
                th(data-aos="fade-down")(style= "width: 20%") Impacto reputacional
                th(data-aos="fade-down")(style= "width: 20%") Nivel global de impacto
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Sistema de facturación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alto (retraso en pagos y reportes contables).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alto (pérdida de ingresos).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Medio (afecta confianza de proveedores).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alto
              tr
                td.text-bold(data-aos="fade-down") Plataforma <em>web</em> comercial.
                td(data-aos="fade-down") Medio (interrupción temporal de ventas).
                td(data-aos="fade-down") Alto (disminución de ingresos diarios).
                td(data-aos="fade-down") Alto (afecta percepción de clientes).
                td(data-aos="fade-down") Alto
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Gestión de personal.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Medio (demora en pagos o trámites).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Bajo (afecta costos administrativos).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Bajo (impacto interno limitado).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Medio
              tr
                td.text-bold(data-aos="fade-down") Infraestructura tecnológica.
                td(data-aos="fade-down") Alto (afecta todos los sistemas dependientes).
                td(data-aos="fade-down") Alto (costos de recuperación elevados).
                td(data-aos="fade-down") Alto (riesgo reputacional por fallas críticas).
                td(data-aos="fade-down") Crítico
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p(data-aos="fade-down") La información obtenida de esta matriz permite a la organización jerarquizar procesos según su nivel de impacto y establecer estrategias de respuesta más precisas. Por ejemplo, los procesos clasificados como “críticos” deben contar con medidas de respaldo redundantes y protocolos de comunicación específicos para minimizar los daños.
        p.mb-0(data-aos="fade-down") En conclusión, la evaluación de impactos operativos, financieros y reputacionales ofrece una visión integral del riesgo empresarial. Este enfoque facilita la toma de decisiones informadas, fortalece la planificación estratégica y contribuye a consolidar una cultura organizacional orientada a la resiliencia y la continuidad del negocio.
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
