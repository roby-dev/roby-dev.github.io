export const developer = {
  name: "Roby Gerson Zuñiga Silva",
  title: "Arquitecto de Software .NET para fintech y pagos",
  specialty: "Integraciones de pago, arquitectura backend y liderazgo técnico",
  location: "Tacna, Perú",
  linkedin: "https://www.linkedin.com/in/robzunigas/",
  github: "https://github.com/roby-dev",
  email: "rgersonzs95@gmail.com"
};

// Credenciales: lo primero que debe entender un cliente o reclutador internacional.
export const stats = [
  { value: "~7.000", label: "validaciones de tarjeta al mes con cifrado HSM, en producción" },
  { value: "~10", label: "desarrolladores bajo mis code reviews y aprobación de arquitectura" },
  { value: "< 1 s", label: "tiempo de respuesta de la API de recaudación que diseñé" },
  { value: "Remoto", label: "disponible para equipos y clientes internacionales" }
];

// Qué puede contratar alguien: pensado para freelance.
export const services = [
  {
    title: "Integraciones de pago y terceros",
    description: "Conecto tu sistema con redes de tarjetas, pasarelas, billeteras y socios externos, con cifrado y trazabilidad de nivel bancario."
  },
  {
    title: "Arquitectura y modernización .NET",
    description: "Diseño APIs y microservicios con Clean Architecture y CQRS, o saco la lógica de sistemas legacy para que vuelvan a ser mantenibles y testeables."
  },
  {
    title: "Liderazgo técnico y calidad",
    description: "Code reviews, estándares de equipo, pruebas de estrés y CI/CD (también para apps móviles) para llegar a producción sin sorpresas."
  }
];

// Casos profesionales: problema → qué hice → resultado. Sin nombres de clientes ni proveedores.
export const cases = [
  {
    tag: "Pagos · Seguridad",
    title: "Validación de tarjetas con cifrado por hardware",
    problem: "Una red de pagos exigía validar el CVV dinámico de las tarjetas con requisitos de seguridad estrictos.",
    solution: "Integré la validación con cifrado y descifrado en un módulo de seguridad de hardware (HSM), sobre Clean Architecture y CQRS.",
    result: "En producción, con unas 7.000 operaciones al mes.",
    tech: [".NET 8", "HSM", "CQRS", "Clean Architecture"]
  },
  {
    tag: "Integraciones",
    title: "API de recaudación para entidades externas",
    problem: "Permitir que distintas entidades financieras cobren servicios de la institución, como el pago de créditos en línea, a través de una plataforma de pagos externa.",
    solution: "Diseñé un puente en .NET 8 según las especificaciones de la red de pagos, con arquitectura modular por entidad y escalable tras un balanceador de carga.",
    result: "Respuestas inferiores a 1 segundo.",
    tech: [".NET 8", "Clean Architecture", "Balanceo de carga", "Docker"]
  },
  {
    tag: "Observabilidad",
    title: "Monitoreo y alertas de servicios financieros",
    problem: "Detectar caídas y lentitud en servicios financieros, con reglas distintas para cada servicio.",
    solution: "Desarrollé una plataforma de microservicios donde cada servicio se registra con health checks estándar o personalizados, su propia frecuencia y umbrales de caída y lentitud.",
    result: "Alertas por usuario vía email o SMS, con backend y frontend construidos de punta a punta.",
    tech: [".NET 8", "Hangfire", "RabbitMQ", "Redis", "MongoDB", "Angular"]
  },
  {
    tag: "Modernización",
    title: "De procedimientos almacenados a código testeable",
    problem: "La lógica de negocio vivía en stored procedures: difícil de probar, versionar y mantener.",
    solution: "Refactoricé APIs .NET Framework 4.8 moviendo la lógica a C# con inyección de dependencias.",
    result: "Lógica cubierta con pruebas unitarias y mantenimiento más rápido y seguro.",
    tech: [".NET Framework 4.8", "C#", "xUnit"]
  },
  {
    tag: "Pagos · Tiempo real",
    title: "Recargas con tarjeta para máquinas de juego",
    problem: "Permitir recargar saldo con tarjeta de débito o crédito, vinculando al usuario con la máquina mediante un código QR.",
    solution: "Desarrollé la plataforma en solitario: pasarela de pagos, un Worker Service que detecta cambios de saldo y WebSockets que confirman cada recarga.",
    result: "Demostrada en funcionamiento en una máquina de juego durante una feria del sector.",
    tech: ["Blazor WebAssembly", "Pasarela de pagos", ".NET Worker Service", "WebSockets"]
  }
];

export const experiences = [
  {
    role: "Arquitecto de Software",
    company: "Entidad financiera regulada",
    period: "Abril 2024 – Presente",
    tasks: [
      "API de recaudación para entidades externas: modular por entidad, escalable con balanceador y con respuestas inferiores a 1 s",
      "Validación de CVV dinámico con cifrado HSM, en producción con unas 7.000 operaciones al mes",
      "Diseñé la arquitectura de la app móvil Flutter y apruebo cada nueva implementación, incluidas la billetera digital y el onboarding biométrico",
      "Establecí y dirijo los code reviews de un equipo de unos 10 desarrolladores",
      "Plataforma de monitoreo con health checks por servicio y alertas por email o SMS",
      "Optimización de Entity Framework (arranque en frío de 45 s a 5 s), pruebas de estrés con JMeter y CI/CD para apps móviles"
    ]
  },
  {
    role: "Asistente Desarrollador de Sistemas",
    company: "Entidad financiera regulada",
    period: "Julio 2023 – Abril 2024",
    tasks: [
      "Modernización de APIs legacy: lógica de negocio de stored procedures a C# con pruebas unitarias",
      "Comunicación en tiempo real en Flutter con WebSockets y Redis para sincronizar instancias del API Gateway",
      "Funcionalidades transaccionales en Angular conectadas a microservicios y APIs legacy"
    ]
  },
  {
    role: "Analista Desarrollador",
    company: "Empresa de tecnología para el sector entretenimiento",
    period: "Octubre 2022 – Julio 2023",
    tasks: [
      "En un equipo de dos desarrolladores: permisos granulares y tickets acumulables en un integrador central migrado a Blazor Server, con pruebas unitarias y de integración",
      "Plataforma de recargas con tarjeta y QR desarrollada en solitario, demostrada en una feria del sector",
      "Mantenimiento de sistemas legacy en .NET Framework y configuración de un VPS en AWS con IIS, DNS y SSL wildcard"
    ]
  },
  {
    role: "Desarrollador Full Stack",
    company: "Sector salud, gobierno regional",
    period: "Mayo 2022 – Septiembre 2022",
    tasks: [
      "Plataforma de gestión de capacitaciones desarrollada en solitario, integrada con el sistema de RR. HH.; reemplazó el archivo físico y el cálculo manual de horas"
    ]
  }
];

export const techStack = [
  {
    category: "Backend y arquitectura",
    items: [".NET 8", "C#", "ASP.NET Core", "Entity Framework", "Clean Architecture", "CQRS", "Microservicios", "Saga Pattern"]
  },
  {
    category: "Integración y datos",
    items: ["RabbitMQ", "Redis", "WebSockets", "Hangfire", "HSM", "SQL Server", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Frontend, mobile y entrega",
    items: ["Angular", "Flutter", "Blazor", "TypeScript", "Docker", "CI/CD", "xUnit", "Apache JMeter"]
  }
];

export const projects = [
  {
    title: "Ficha Vulnerable",
    description: "App de gestión social que automatiza la importación de fichas desde Excel, con módulos de zona, local, usuario y niños.",
    tech: ["Angular", "NestJS", "MongoDB"],
    github: "https://github.com/roby-dev"
  },
  {
    title: "Finance Tracker",
    description: "App Flutter 100% offline para control de finanzas personales. Sin backend, sin conexión requerida.",
    tech: ["Flutter", "Drift", "Riverpod"],
    github: "https://github.com/roby-dev"
  }
];

export const socials = [
  {
    label: "GitHub",
    url: "https://github.com/roby-dev",
    icon: "github"
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/robzunigas/",
    icon: "linkedin"
  },
  {
    label: "Email",
    url: "mailto:rgersonzs95@gmail.com",
    icon: "email"
  }
];
