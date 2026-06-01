export const content = {
  es: {
    header: {
      services: "Qué hacemos",
      process: "Cómo trabajamos",
      portfolio: "Proyectos",
      faq: "Preguntas",
      contact: "Hablemos",
    },

    // HERO — habla de LatamSoft, el estudio.
    hero: {
      eyebrow: "Estudio de software · Latinoamérica",
      title1: "Construimos el sistema",
      title2: "que tu negocio necesita",
      title3: "",
      description:
        "Hacemos software a la medida de cómo trabaja tu negocio y desarrollamos productos propios para sectores que conocemos bien, como las ópticas. La idea es simple: que dejes los cuadernos y el Excel suelto, y tengas todo ordenado en un solo lugar.",
      ctaPrimary: "Cuéntanos tu proyecto",
      ctaSecondary: "Ver lo que hacemos",
      // Etiquetas que rotan en la marquesina del hero (lo que construimos).
      ticker: [
        "Sistemas a la medida",
        "Productos propios",
        "Gestión de ópticas",
        "Plataformas para institutos",
        "Automatización de procesos",
        "Inventario y ventas",
        "Reportes claros",
        "En la nube",
      ],
      // Tarjeta lateral: lo que entregamos, no una ficha de optometría.
      cardTitle: "Lo que recibes",
      cardPoints: [
        "Un sistema ordenado, hecho para ti",
        "Tu equipo capacitado y acompañado",
        "Soporte humano que entiende tu negocio",
      ],
      cardStatus: "Tu operación, en un solo lugar",
    },

    // QUÉ HACEMOS — los dos caminos del estudio.
    services: {
      eyebrow: "Qué hacemos",
      title: "Dos formas de ordenar tu negocio",
      subtitle:
        "Algunos negocios necesitan algo hecho exactamente a su medida. Otros encajan perfecto con un producto que ya conocemos al detalle. Hacemos las dos cosas.",
      items: [
        {
          tag: "A tu medida",
          title: "Software hecho para cómo trabajas tú",
          text: "Si tu negocio se mueve entre Excel, papeles y WhatsApp, construimos el sistema que junte todo en un solo lugar. Partimos de tu forma real de trabajar, no de una plantilla.",
          bullets: [
            "Pensado alrededor de tu operación",
            "Crece contigo, sin rehacerlo",
            "Tú decides qué necesitas, nosotros lo armamos",
          ],
        },
        {
          tag: "Productos propios",
          title: "Sistemas listos para sectores que dominamos",
          text: "Para rubros que conocemos a fondo tenemos productos ya hechos, probados con negocios reales. Empiezas más rápido y con algo que ya resuelve los problemas de tu día a día.",
          bullets: [
            "Listos para usar, no desde cero",
            "Probados con negocios como el tuyo",
            "Se ajustan a tus servicios y sucursales",
          ],
        },
      ],
    },

    // CÓMO TRABAJAMOS — el proceso del estudio (antes era del producto).
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Sin tecnicismos y sin perderte en el camino",
      subtitle:
        "No necesitas saber de tecnología. Nos encargamos de la parte difícil para que tu equipo solo tenga que usar el sistema.",
      steps: [
        {
          n: "01",
          title: "Escuchamos tu caso",
          text: "Nos cuentas cómo trabajas hoy y qué te quita tiempo. Entendemos tu negocio antes de proponer nada.",
        },
        {
          n: "02",
          title: "Lo armamos a tu medida",
          text: "Configuramos o construimos el sistema con tus servicios, tus sucursales y tu forma de trabajar. Tú no tocas nada técnico.",
        },
        {
          n: "03",
          title: "Capacitamos a tu equipo",
          text: "Acompañamos a tu gente hasta que se sienta cómoda. En pocos días lo usan con naturalidad.",
        },
        {
          n: "04",
          title: "Te acompañamos después",
          text: "No desaparecemos al entregar. Seguimos cerca para resolver dudas y mejorar lo que haga falta.",
        },
      ],
    },

    // PORTAFOLIO — el eje de la página.
    portfolio: {
      eyebrow: "Proyectos",
      title: "Algunos sistemas que ya construimos",
      subtitle:
        "Cada proyecto nace del mismo lugar: un negocio cansado del desorden que necesitaba todo en un solo sistema. Estos son algunos.",
      items: [
        {
          badge: "Producto propio",
          tag: "Ópticas y optometría",
          title: "Sistema de gestión para ópticas",
          text: "Reúne pacientes, historia clínica visual, lentes, ventas e inventario en un solo lugar, con recordatorios automáticos por WhatsApp. Es nuestro producto más maduro: te lo mostramos en detalle más abajo.",
          link: "Ver el caso completo",
          anchor: "#caso-opticas",
        },
        {
          badge: "Proyecto",
          tag: "Educación",
          title: "Plataforma para institutos de idiomas",
          text: "Matrículas, asistencia, evaluaciones y cobros de un instituto, ordenados en un mismo sistema y fáciles de seguir para profesores y administración.",
          link: "Ver el caso",
          anchor: "#caso-instituto",
        },
        {
          badge: "A tu medida",
          tag: "Tu sector",
          title: "¿Tu negocio es distinto?",
          text: "Si lo tuyo no es una óptica ni un instituto, igual podemos ayudarte. Cuéntanos cómo trabajas y construimos el sistema que te ordene.",
          link: "Cuéntanos tu caso",
          anchor: "#contacto",
        },
      ],
    },

    // Encabezado del CASO DESTACADO de ópticas (envuelve problem/shift/features/who).
    caseIntro: {
      kicker: "Caso destacado",
      eyebrow: "Producto propio · Ópticas y optometría",
      title: "Así ordenamos una óptica de principio a fin",
      subtitle:
        "Este es nuestro producto más maduro. Lo construimos junto a ópticas reales, así que resuelve los problemas del día a día tal como pasan en el mostrador.",
    },

    // El día a día sin sistema (dentro del caso de ópticas).
    problem: {
      eyebrow: "El problema",
      title: "Una óptica que vive entre cuadernos, Excel y memoria",
      subtitle:
        "No es desorden del dueño: es que cada cosa vive en un lado distinto. Así se ve un día normal cuando la información está suelta.",
      items: [
        {
          title: "La ficha del paciente no aparece",
          text: "El cliente vuelve después de un año y nadie encuentra su fórmula anterior. Toca volver a medir desde cero o adivinar.",
        },
        {
          title: "No sabes en qué va cada lente",
          text: "“¿Ya llegaron los lentes de la señora?” Nadie está seguro. Hay que llamar al laboratorio y revisar papeles.",
        },
        {
          title: "Citas anotadas en cualquier parte",
          text: "Una agenda de papel, un chat, un post-it. Se cruzan turnos, se olvidan controles y el día se desordena.",
        },
        {
          title: "El stock es un misterio",
          text: "Vendes una montura que ya no había, o tienes plata parada en modelos repetidos. Nunca sabes qué hay realmente.",
        },
        {
          title: "Los clientes no vuelven solos",
          text: "Pasa un año del examen y nadie les avisa. Se van a la óptica de la esquina porque allá sí los llamaron.",
        },
        {
          title: "Cada sucursal es un mundo aparte",
          text: "Tienes dos o tres locales y cada uno lleva sus cuentas distinto. Juntar los números del mes es un dolor de cabeza.",
        },
      ],
    },

    shift: {
      eyebrow: "El cambio",
      title: "Del desorden a una sola pantalla",
      beforeLabel: "Hoy",
      afterLabel: "Con el sistema",
      before: [
        "Fichas en papel que se pierden",
        "Excel que solo entiende una persona",
        "“Pregúntale al laboratorio en qué va”",
        "Recordatorios que nadie alcanza a mandar",
        "Cada sucursal con sus propios números",
      ],
      after: [
        "Toda la historia del paciente, siempre a mano",
        "Un sistema que todo el equipo entiende",
        "El estado de cada lente, en tiempo real",
        "Recordatorios automáticos por WhatsApp",
        "Todas tus sucursales en una sola cuenta",
      ],
    },

    features: {
      eyebrow: "Qué hace el sistema",
      title: "Todo lo que una óptica necesita, en un mismo lugar",
      subtitle:
        "Cada parte resuelve un problema concreto del negocio. Sin manuales gruesos ni cosas que solo entiende un técnico.",
      items: [
        {
          tag: "Pacientes",
          title: "La historia visual completa de cada paciente",
          text: "Guarda el examen completo —agudeza visual, refracción, la fórmula final de cada ojo, pruebas, diagnóstico y antecedentes— y lo tienes listo para la próxima visita. Se acabaron las fichas de papel que se pierden.",
          bullets: ["Fórmula de ojo derecho e izquierdo", "Diagnóstico y antecedentes", "Disponible en cada nueva consulta"],
        },
        {
          tag: "Agenda",
          title: "Tu día de trabajo, organizado",
          text: "Agenda los turnos de cada profesional y lleva el estado de cada cita: pendiente, atendido, no asistió. El equipo abre el sistema en la mañana y sabe exactamente cómo viene el día.",
          bullets: ["Citas por profesional", "Estados claros de cada turno", "Menos cruces y olvidos"],
        },
        {
          tag: "Laboratorio",
          title: "Sabes en qué va cada par de lentes",
          text: "Genera la orden de fabricación con todas las medidas y los datos de la montura, y sigue el avance paso a paso: pendiente, enviado, recibido y entregado. Cuando el cliente pregunte, respondes en segundos.",
          bullets: ["Orden con medidas y montura", "Seguimiento en tiempo real", "Nada se queda olvidado"],
        },
        {
          tag: "Ventas",
          title: "De la orden a la venta, sin recalcular nada",
          text: "Convierte la orden en venta, aplica descuentos, calcula el total y emite la factura del cliente. Cuadra solo, sin sumar a mano ni pasar datos de un lado a otro.",
          bullets: ["Totales y descuentos automáticos", "Facturación al cliente", "Cierre de caja más simple"],
        },
        {
          tag: "Inventario",
          title: "Siempre sabes qué tienes y qué se mueve",
          text: "Controla el stock de monturas, lentes y accesorios con cada movimiento e historial de cambios. Sabes qué se vende, qué está quieto y qué necesitas pedir, sin contar a ojo.",
          bullets: ["Stock de monturas y accesorios", "Movimientos e historial", "Descuentos por producto"],
        },
        {
          tag: "Sucursales",
          title: "Varias sucursales, una sola cuenta",
          text: "Si tienes más de un local, los administras todos desde el mismo lugar e incluso transfieres productos entre sucursales. Los números del negocio completo, juntos y claros.",
          bullets: ["Todos tus locales en un panel", "Transfiere stock entre sucursales", "Una sola fuente de verdad"],
        },
        {
          tag: "WhatsApp",
          title: "Tus clientes vuelven, sin que nadie los persiga",
          text: "Envía recordatorios de cita, avisos para renovar el examen cuando ya pasó el tiempo, y campañas promocionales por WhatsApp. Con horario de “no molestar” para no escribir de madrugada. Más clientes de vuelta, cero trabajo manual.",
          bullets: ["Recordatorios de cita automáticos", "Avisos de renovación de examen", "Campañas con horario respetuoso"],
        },
        {
          tag: "Equipo",
          title: "Cada quien ve solo lo que le toca",
          text: "Optómetra, vendedor, administrador: cada uno entra con su usuario y accede únicamente a lo suyo. Tú decides quién puede hacer qué, y tu información queda protegida.",
          bullets: ["Usuarios por persona", "Roles y permisos a tu medida", "Tu información, bajo control"],
        },
      ],
    },

    outcomes: {
      eyebrow: "Por qué importa",
      title: "Menos tiempo perdido, menos errores, más clientes de vuelta",
      items: [
        { stat: "1", label: "Un solo sistema", text: "Paciente, examen, lentes, venta e inventario en el mismo lugar." },
        { stat: "0", label: "Fichas perdidas", text: "Toda la historia de cada paciente queda guardada y a la mano." },
        { stat: "24/7", label: "En la nube", text: "Disponible cuando lo necesites, desde cualquier sucursal." },
        { stat: "Auto", label: "WhatsApp", text: "Recordatorios y renovaciones que traen clientes sin esfuerzo." },
      ],
    },

    who: {
      eyebrow: "Para quién es",
      title: "Pensado para quien atiende la vista de verdad",
      subtitle: "Si tu negocio gira en torno al paciente, el examen y los lentes, este producto es para ti.",
      items: [
        {
          title: "Ópticas",
          text: "Desde un local que recién arranca hasta cadenas con varias sucursales que quieren todo bajo control.",
        },
        {
          title: "Consultorios de optometría",
          text: "Lleva la historia clínica visual completa de cada paciente, ordenada y siempre a la mano.",
        },
        {
          title: "Centros de oftalmología",
          text: "Une la parte clínica con la venta de lentes y el seguimiento del paciente en un mismo flujo.",
        },
      ],
    },

    // Mini-caso: plataforma para institutos de idiomas (sin nombrar el proyecto).
    institute: {
      kicker: "Otro caso",
      eyebrow: "Proyecto · Institutos de idiomas",
      title: "Un instituto de idiomas, todo en un solo sistema",
      summary:
        "Plataforma en línea que centraliza matrículas, asistencia, calificaciones y cobros de un instituto, para dirección, recepción y profesores.",
      beforeLabel: "Antes",
      afterLabel: "Ahora",
      before: [
        "Inscripciones y notas en cuadernos y hojas sueltas",
        "Recibos hechos a mano",
        "Poca visibilidad de quién debía o quién faltaba",
      ],
      after: [
        "Cada estudiante, curso, nota y pago registrado",
        "Recibos numerados automáticamente",
        "Todo a la vista en cualquier momento",
      ],
      featuresLabel: "Lo que resuelve",
      features: [
        {
          title: "Inscribes y matriculas sin papeleo",
          text: "Registras al estudiante, lo asignas a un nivel y a un curso con su horario, todo desde una misma pantalla.",
          bullets: [
            "Ficha completa de cada estudiante en un solo lugar",
            "Reubicas o transfieres estudiantes entre cursos sin rehacer datos",
            "Lista de espera para quienes aún no tienen cupo",
          ],
        },
        {
          title: "Sabes quién asistió y quién no",
          text: "Cada profesor marca la asistencia de su clase (presente, ausente, atrasado o recuperado) y el sistema lleva el conteo.",
          bullets: [
            "Porcentaje de asistencia por estudiante, calculado solo",
            "Alerta de estudiantes con faltas seguidas para actuar a tiempo",
            "Reporte de clases a las que no se les tomó asistencia",
          ],
        },
        {
          title: "Llevas las notas ordenadas por curso",
          text: "Defines cómo se evalúa cada curso (tareas, exámenes, participación) y registras las calificaciones de cada estudiante.",
          bullets: [
            "Notas organizadas por categorías y su peso",
            "Cada estudiante con su historial de evaluaciones",
            "Mismo criterio de calificación para todos los profesores",
          ],
        },
        {
          title: "Controlas pagos y quién te debe",
          text: "Registras cada pago con su recibo numerado y ves al instante el estado de cuenta de cada estudiante.",
          bullets: [
            "Recibos con número correlativo automático",
            "Total pendiente por estudiante, siempre visible",
            "Resumen de cuántos están al día y cuántos no",
          ],
        },
        {
          title: "Organizas horarios, cursos y niveles",
          text: "Creas niveles, cursos y sus horarios, y los conectas con sus profesores y estudiantes.",
          bullets: [
            "Calendario de clases por curso",
            "Manejo de feriados para no programar clases ese día",
            "Cursos activos, próximos o cerrados, bien diferenciados",
          ],
        },
        {
          title: "Manejas cancelaciones y recuperaciones",
          text: "Cuando una clase no se da, la registras con su motivo y coordinas la recuperación.",
          bullets: [
            "Registro del motivo de cada clase cancelada",
            "Seguimiento de clases por recuperar",
            "Historial de cancelaciones por curso",
          ],
        },
        {
          title: "Cada profesor tiene su propio espacio",
          text: "Los profesores entran a su portal y ven solo sus cursos, sus estudiantes y sus tareas del día.",
          bullets: [
            "Toma de asistencia y notas desde su propia vista",
            "Control de horas de clases privadas (pendientes, dictadas o canceladas)",
            "Datos de contacto y estado de cada profesor",
          ],
        },
        {
          title: "Decides quién ve y hace qué",
          text: "Asignas roles y permisos para que recepción, coordinación y dirección accedan solo a lo que les corresponde.",
          bullets: [
            "Perfiles diferenciados (dirección, recepción, coordinación, profesor)",
            "Acceso controlado por permisos",
            "Recepción con su propia pantalla para inscribir y consultar",
          ],
        },
      ],
      whoTitle: "¿Para quién es?",
      who: "Para institutos y academias de idiomas con varios niveles, cursos y profesores, que hoy llevan inscripciones, asistencia y cobros en papel u hojas de cálculo y quieren tenerlo todo en un solo lugar.",
      metricsTitle: "En números",
      metrics: [
        { stat: "1", label: "Un solo sistema", text: "Matrículas, asistencia, notas y pagos juntos (antes, varias hojas separadas)." },
        { stat: "24/7", label: "En la nube", text: "Accesible desde recepción, dirección o el portal del profesor." },
        { stat: "0", label: "Recibos a mano", text: "Cada pago se numera y queda registrado automáticamente." },
      ],
    },

    trust: {
      eyebrow: "Confianza y seguridad",
      title: "Tu información protegida, sin que tengas que pensar en ello",
      subtitle:
        "Todo vive en la nube y lo cuidamos por ti. Tú te dedicas a tu negocio; nosotros nos encargamos de que esté seguro y disponible.",
      items: [
        {
          title: "Tus datos no se pierden",
          text: "Toda la información vive en la nube con respaldos. Si se daña un computador, tu negocio sigue intacto.",
        },
        {
          title: "Cada quien ve solo lo suyo",
          text: "Con usuarios y permisos, controlas quién accede a qué. La información sensible queda protegida.",
        },
        {
          title: "Disponible donde estés",
          text: "Entras desde cualquier sucursal o desde casa. Solo necesitas internet; no instalas nada complicado.",
        },
        {
          title: "Acompañamiento humano",
          text: "Detrás del software hay un equipo en Latinoamérica que responde y entiende tu negocio. No hablas con un robot.",
        },
      ],
    },

    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que suelen preguntarnos",
      items: [
        {
          q: "¿Hacen sistemas a la medida o solo venden productos ya hechos?",
          a: "Las dos cosas. Para sectores que conocemos a fondo, como las ópticas, tenemos productos propios listos para usar. Para el resto, construimos el sistema a la medida de cómo trabajas. En la primera conversación vemos cuál te conviene.",
        },
        {
          q: "No sé nada de tecnología. ¿Igual puedo trabajar con ustedes?",
          a: "Sí. Trabajamos con dueños de negocio y personal de mostrador, no con programadores. Nos encargamos de la parte técnica y capacitamos a tu equipo hasta que se sienta cómodo. Si sabes usar WhatsApp, puedes usar lo que entregamos.",
        },
        {
          q: "¿Tengo que instalar algo o comprar computadores nuevos?",
          a: "No. Nuestros sistemas funcionan en la nube: entras desde el navegador del computador que ya tienes. Solo necesitas internet. Nada de instalaciones complicadas ni equipos especiales.",
        },
        {
          q: "Ya tengo todo en cuadernos y Excel. ¿Pierdo esa información?",
          a: "No. Te ayudamos a pasar tu información actual al sistema para que arranques con tus datos ya cargados, sin empezar de cero.",
        },
        {
          q: "Tengo un negocio con varias sucursales. ¿Lo manejan?",
          a: "Sí, y es donde más se nota. Administras todos tus locales desde una sola cuenta y ves los números del negocio completo, juntos. En el sistema de ópticas, incluso transfieres productos entre sucursales.",
        },
        {
          q: "¿Mis datos y los de mis clientes están seguros?",
          a: "Sí. La información vive en la nube con respaldos, y con usuarios y permisos controlas quién ve qué. Si se daña un computador, no pierdes nada.",
        },
      ],
    },

    cta: {
      eyebrow: "Demos el primer paso",
      title1: "Conversemos sobre tu",
      title2: " negocio",
      description:
        "Cuéntanos un poco de lo que haces y a qué le pierdes tiempo. Te respondemos por WhatsApp, sin compromiso, y vemos juntos cómo ordenarlo.",
      fastResponse: "Te respondemos rápido",
      noCommitment: "Sin compromiso",
      namePlaceholder: "Tu nombre *",
      companyPlaceholder: "Nombre de tu negocio",
      submit: "Conversar por WhatsApp",
      whatsappTemplate:
        "Hola, soy {{name}}{{company}}. Vi la web de LatamSoft y me gustaría conversar sobre un sistema para mi negocio.",
    },

    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Software a la medida y productos propios que ordenan negocios reales, desde Latinoamérica.",
      madeIn: "Hecho en Latinoamérica",
      colsTitle: ["Estudio", "Proyectos", "Contacto"],
    },
  },

  en: {
    header: {
      services: "What we do",
      process: "How we work",
      portfolio: "Projects",
      faq: "FAQ",
      contact: "Let's talk",
    },

    hero: {
      eyebrow: "Software studio · Latin America",
      title1: "We build the system",
      title2: "your business needs",
      title3: "",
      description:
        "We build software tailored to how your business actually works, and we develop our own products for sectors we know well, like optical shops. The idea is simple: leave the notebooks and scattered spreadsheets behind and have everything in one place.",
      ctaPrimary: "Tell us about your project",
      ctaSecondary: "See what we do",
      ticker: [
        "Tailored systems",
        "Our own products",
        "Optical shop management",
        "Platforms for institutes",
        "Process automation",
        "Inventory & sales",
        "Clear reports",
        "In the cloud",
      ],
      cardTitle: "What you get",
      cardPoints: [
        "An orderly system, built for you",
        "Your team trained and supported",
        "Human support that gets your business",
      ],
      cardStatus: "Your operation, in one place",
    },

    services: {
      eyebrow: "What we do",
      title: "Two ways to bring your business into order",
      subtitle:
        "Some businesses need something built exactly to fit them. Others match perfectly with a product we already know inside out. We do both.",
      items: [
        {
          tag: "Tailored",
          title: "Software built for how you work",
          text: "If your business runs on spreadsheets, paper and WhatsApp, we build the system that brings it all into one place. We start from how you actually work, not from a template.",
          bullets: [
            "Designed around your operation",
            "Grows with you, no rebuild",
            "You decide what you need, we build it",
          ],
        },
        {
          tag: "Own products",
          title: "Ready-made systems for sectors we master",
          text: "For fields we know deeply we have products already built and tested with real businesses. You start faster, with something that already solves your day-to-day problems.",
          bullets: [
            "Ready to use, not from scratch",
            "Tested with businesses like yours",
            "Adapts to your services and branches",
          ],
        },
      ],
    },

    process: {
      eyebrow: "How we work",
      title: "No jargon, and you never get lost along the way",
      subtitle:
        "You don't need to know tech. We handle the hard part so your team only has to use the system.",
      steps: [
        {
          n: "01",
          title: "We listen to your case",
          text: "You tell us how you work today and what eats your time. We understand your business before proposing anything.",
        },
        {
          n: "02",
          title: "We build it to fit you",
          text: "We configure or build the system with your services, your branches and your way of working. You touch nothing technical.",
        },
        {
          n: "03",
          title: "We train your team",
          text: "We walk your people through it until they feel comfortable. In a few days they're using it naturally.",
        },
        {
          n: "04",
          title: "We stick around after",
          text: "We don't disappear once it's delivered. We stay close to answer questions and improve whatever's needed.",
        },
      ],
    },

    portfolio: {
      eyebrow: "Projects",
      title: "A few systems we've already built",
      subtitle:
        "Every project starts in the same place: a business tired of the chaos that needed everything in one system. Here are some.",
      items: [
        {
          badge: "Own product",
          tag: "Optical & optometry",
          title: "Management system for optical shops",
          text: "Brings patients, visual health records, lenses, sales and inventory into one place, with automatic WhatsApp reminders. It's our most mature product — we show it in detail below.",
          link: "See the full case",
          anchor: "#caso-opticas",
        },
        {
          badge: "Project",
          tag: "Education",
          title: "Platform for language institutes",
          text: "Enrollments, attendance, assessments and payments for an institute, organized in one system and easy to follow for teachers and admin.",
          link: "See the case",
          anchor: "#caso-instituto",
        },
        {
          badge: "Tailored",
          tag: "Your sector",
          title: "Is your business different?",
          text: "If you're not an optical shop or an institute, we can still help. Tell us how you work and we'll build the system that brings it into order.",
          link: "Tell us your case",
          anchor: "#contacto",
        },
      ],
    },

    caseIntro: {
      kicker: "Featured case",
      eyebrow: "Own product · Optical & optometry",
      title: "How we bring an optical shop into order, end to end",
      subtitle:
        "This is our most mature product. We built it alongside real optical shops, so it solves the day-to-day problems exactly as they happen at the counter.",
    },

    problem: {
      eyebrow: "The problem",
      title: "An optical shop running on notebooks, spreadsheets and memory",
      subtitle:
        "It's not that the owner is disorganized — it's that everything lives somewhere different. Here's what a normal day looks like when the information is scattered.",
      items: [
        {
          title: "The patient's record is missing",
          text: "A client comes back after a year and nobody can find their old prescription. You measure all over again or just guess.",
        },
        {
          title: "Nobody knows where each lens is",
          text: "“Are Mrs. Pérez's lenses ready yet?” No one's sure. Time to call the lab and dig through paperwork.",
        },
        {
          title: "Appointments written everywhere",
          text: "A paper agenda, a chat, a sticky note. Slots overlap, check-ups get forgotten, the day falls apart.",
        },
        {
          title: "Stock is a mystery",
          text: "You sell a frame that was already gone, or have money frozen in repeated models. You never really know what's there.",
        },
        {
          title: "Clients don't come back on their own",
          text: "A year passes and nobody reminds them. They go to the shop down the street — because that one actually called.",
        },
        {
          title: "Each branch is its own world",
          text: "Two or three locations, each keeping its books differently. Putting the month's numbers together is a headache.",
        },
      ],
    },

    shift: {
      eyebrow: "The shift",
      title: "From scattered chaos to a single screen",
      beforeLabel: "Today",
      afterLabel: "With the system",
      before: [
        "Paper records that get lost",
        "A spreadsheet only one person understands",
        "“Ask the lab where it is”",
        "Reminders nobody has time to send",
        "Each branch with its own numbers",
      ],
      after: [
        "Every patient's history, always at hand",
        "A system the whole team understands",
        "The status of each lens, in real time",
        "Automatic WhatsApp reminders",
        "All your branches in one account",
      ],
    },

    features: {
      eyebrow: "What the system does",
      title: "Everything an optical shop needs, in one place",
      subtitle:
        "Each part solves a real business problem. No thick manuals, nothing only a technician understands.",
      items: [
        {
          tag: "Patients",
          title: "Each patient's complete visual history",
          text: "Save the full exam —visual acuity, refraction, the final prescription for each eye, tests, diagnosis and history— and have it ready for the next visit. No more paper records that disappear.",
          bullets: ["Right and left eye prescription", "Diagnosis and history", "Available at every new visit"],
        },
        {
          tag: "Agenda",
          title: "Your workday, organized",
          text: "Schedule each professional's appointments and track the status of every visit: pending, seen, no-show. Your team opens the system in the morning and knows exactly how the day looks.",
          bullets: ["Appointments per professional", "Clear status per slot", "Fewer overlaps and no-shows"],
        },
        {
          tag: "Lab",
          title: "You know where every pair of lenses is",
          text: "Generate the manufacturing order with all the measurements and frame details, and follow the progress step by step: pending, sent, received, delivered. When a client asks, you answer in seconds.",
          bullets: ["Order with measurements and frame", "Real-time tracking", "Nothing gets forgotten"],
        },
        {
          tag: "Sales",
          title: "From order to sale, no recalculating",
          text: "Turn the order into a sale, apply discounts, calculate the total and issue the client's invoice. It adds up on its own — no manual math, no copying data around.",
          bullets: ["Automatic totals and discounts", "Customer invoicing", "Simpler end-of-day close"],
        },
        {
          tag: "Inventory",
          title: "Always know what you have and what's moving",
          text: "Control your stock of frames, lenses and accessories with every movement and a change history. Know what sells, what sits, and what to reorder — without counting by eye.",
          bullets: ["Frame and accessory stock", "Movements and history", "Per-product discounts"],
        },
        {
          tag: "Branches",
          title: "Multiple locations, one account",
          text: "If you have more than one shop, manage them all from the same place and even transfer products between branches. The whole business's numbers, together and clear.",
          bullets: ["All your shops in one panel", "Transfer stock between branches", "A single source of truth"],
        },
        {
          tag: "WhatsApp",
          title: "Your clients come back, without anyone chasing them",
          text: "Send appointment reminders, exam-renewal nudges when enough time has passed, and promo campaigns over WhatsApp — with a “do not disturb” window so you never text at dawn. More returning clients, zero manual work.",
          bullets: ["Automatic appointment reminders", "Exam renewal nudges", "Campaigns with respectful hours"],
        },
        {
          tag: "Team",
          title: "Everyone sees only what they should",
          text: "Optometrist, salesperson, admin: each logs in with their own user and only accesses what's theirs. You decide who can do what, and your information stays protected.",
          bullets: ["A user per person", "Roles and permissions your way", "Your data, under control"],
        },
      ],
    },

    outcomes: {
      eyebrow: "Why it matters",
      title: "Less wasted time, fewer mistakes, more returning clients",
      items: [
        { stat: "1", label: "One system", text: "Patient, exam, lenses, sale and inventory in the same place." },
        { stat: "0", label: "Lost records", text: "Every patient's full history stays saved and within reach." },
        { stat: "24/7", label: "In the cloud", text: "Available whenever you need it, from any branch." },
        { stat: "Auto", label: "WhatsApp", text: "Reminders and renewals that bring clients back effortlessly." },
      ],
    },

    who: {
      eyebrow: "Who it's for",
      title: "Built for those who truly care for people's sight",
      subtitle: "If your business revolves around the patient, the exam and the lenses, this product is for you.",
      items: [
        {
          title: "Optical shops",
          text: "From a shop just starting out to chains with several branches that want everything under control.",
        },
        {
          title: "Optometry practices",
          text: "Keep each patient's complete visual record, organized and always within reach.",
        },
        {
          title: "Ophthalmology centers",
          text: "Connect the clinical side with lens sales and patient follow-up in a single flow.",
        },
      ],
    },

    // Mini-case: platform for language institutes (project not named).
    institute: {
      kicker: "Another case",
      eyebrow: "Project · Language institutes",
      title: "A language institute, all in one system",
      summary:
        "An online platform that centralizes enrollments, attendance, grades and payments for an institute — for directors, front desk and teachers.",
      beforeLabel: "Before",
      afterLabel: "Now",
      before: [
        "Enrollments and grades in notebooks and loose sheets",
        "Receipts written by hand",
        "Little visibility into who owed or who was absent",
      ],
      after: [
        "Every student, course, grade and payment recorded",
        "Receipts numbered automatically",
        "Everything in view at any moment",
      ],
      featuresLabel: "What it solves",
      features: [
        {
          title: "Enroll and register without paperwork",
          text: "Register the student, assign them to a level and a course with its schedule — all from one screen.",
          bullets: [
            "Each student's full profile in one place",
            "Move or transfer students between courses without redoing data",
            "Waitlist for those without a spot yet",
          ],
        },
        {
          title: "You know who showed up and who didn't",
          text: "Each teacher marks their class attendance (present, absent, late or made-up) and the system keeps the count.",
          bullets: [
            "Attendance percentage per student, calculated automatically",
            "Alert for students with repeated absences, to act in time",
            "Report of classes with no attendance taken",
          ],
        },
        {
          title: "Grades kept tidy by course",
          text: "Define how each course is graded (homework, exams, participation) and record each student's marks.",
          bullets: [
            "Grades organized by categories and their weight",
            "Each student with their assessment history",
            "Same grading criteria for every teacher",
          ],
        },
        {
          title: "Control payments and who owes you",
          text: "Record every payment with its numbered receipt and instantly see each student's account status.",
          bullets: [
            "Receipts with automatic sequential numbers",
            "Pending total per student, always visible",
            "Summary of how many are up to date and how many aren't",
          ],
        },
        {
          title: "Organize schedules, courses and levels",
          text: "Create levels, courses and their schedules, and connect them with their teachers and students.",
          bullets: [
            "Class calendar per course",
            "Holiday handling so no classes are scheduled that day",
            "Active, upcoming or closed courses, clearly distinguished",
          ],
        },
        {
          title: "Handle cancellations and make-ups",
          text: "When a class doesn't happen, you log it with its reason and coordinate the make-up.",
          bullets: [
            "Reason logged for each cancelled class",
            "Tracking of classes to be made up",
            "Cancellation history per course",
          ],
        },
        {
          title: "Every teacher has their own space",
          text: "Teachers log into their portal and see only their courses, their students and their tasks for the day.",
          bullets: [
            "Attendance and grades from their own view",
            "Private-class hours (pending, taught or cancelled)",
            "Contact details and status of each teacher",
          ],
        },
        {
          title: "You decide who sees and does what",
          text: "Assign roles and permissions so front desk, coordination and direction only access what's theirs.",
          bullets: [
            "Distinct profiles (direction, front desk, coordination, teacher)",
            "Access controlled by permissions",
            "Front desk with its own screen to enroll and look up courses",
          ],
        },
      ],
      whoTitle: "Who it's for",
      who: "For language institutes and academies with several levels, courses and teachers that today keep enrollments, attendance and payments on paper or spreadsheets and want it all in one place.",
      metricsTitle: "By the numbers",
      metrics: [
        { stat: "1", label: "One system", text: "Enrollments, attendance, grades and payments together (before: separate sheets)." },
        { stat: "24/7", label: "In the cloud", text: "Accessible from front desk, direction or the teacher's portal." },
        { stat: "0", label: "Handwritten receipts", text: "Every payment is numbered and recorded automatically." },
      ],
    },

    trust: {
      eyebrow: "Trust and security",
      title: "Your information protected, without you having to think about it",
      subtitle:
        "It all lives in the cloud and we look after it for you. You focus on your business; we make sure it stays safe and available.",
      items: [
        {
          title: "Your data won't get lost",
          text: "All the information lives in the cloud with backups. If a computer breaks, your business stays intact.",
        },
        {
          title: "Everyone sees only their part",
          text: "With users and permissions, you control who accesses what. Sensitive information stays protected.",
        },
        {
          title: "Available wherever you are",
          text: "Log in from any branch or from home. All you need is internet; nothing complicated to install.",
        },
        {
          title: "Real human support",
          text: "Behind the software there's a team in Latin America that answers and understands your business. You're not talking to a bot.",
        },
      ],
    },

    faq: {
      eyebrow: "Frequently asked",
      title: "What people usually ask us",
      items: [
        {
          q: "Do you build custom systems or just sell ready-made products?",
          a: "Both. For sectors we know deeply, like optical shops, we have our own ready-to-use products. For everything else, we build the system tailored to how you work. In the first conversation we figure out which fits you.",
        },
        {
          q: "I don't know anything about tech. Can I still work with you?",
          a: "Yes. We work with business owners and front-desk staff, not programmers. We handle the technical part and train your team until they're comfortable. If you can use WhatsApp, you can use what we deliver.",
        },
        {
          q: "Do I need to install anything or buy new computers?",
          a: "No. Our systems run in the cloud: you log in from the browser on the computer you already have. All you need is internet — no complicated installs, no special equipment.",
        },
        {
          q: "I already have everything in notebooks and spreadsheets. Do I lose that?",
          a: "No. We help you move your current information into the system so you start with your data already loaded, not from scratch.",
        },
        {
          q: "I run a business with several branches. Do you handle that?",
          a: "Yes, and that's where it shines most. You manage all your locations from one account and see the whole business's numbers together. In the optical system, you can even transfer products between branches.",
        },
        {
          q: "Is my data and my clients' data safe?",
          a: "Yes. The information lives in the cloud with backups, and with users and permissions you control who sees what. If a computer breaks, you lose nothing.",
        },
      ],
    },

    cta: {
      eyebrow: "Let's take the first step",
      title1: "Let's talk about your",
      title2: " business",
      description:
        "Tell us a bit about what you do and where you lose time. We'll reply over WhatsApp, no strings attached, and figure out together how to bring it into order.",
      fastResponse: "We reply fast",
      noCommitment: "No commitment",
      namePlaceholder: "Your name *",
      companyPlaceholder: "Your business name",
      submit: "Chat on WhatsApp",
      whatsappTemplate:
        "Hi, I'm {{name}}{{company}}. I saw the LatamSoft site and I'd like to talk about a system for my business.",
    },

    footer: {
      rights: "All rights reserved.",
      tagline: "Tailored software and our own products that bring real businesses into order, from Latin America.",
      madeIn: "Made in Latin America",
      colsTitle: ["Studio", "Projects", "Contact"],
    },
  },
};

export type Language = "es" | "en";
