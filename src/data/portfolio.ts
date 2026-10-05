export const developer = {
  name: "Roby Gerson Zuñiga Silva",
  title: "Arquitecto de Software y Desarrollador Full Stack",
  specialty: "Backend .NET, frontend y entrega de software",
  location: "Tacna, Perú",
  linkedin: "https://www.linkedin.com/in/robzunigas/",
  github: "https://github.com/roby-dev",
  email: "rgersonzs95@gmail.com"
};

export const experiences = [
  {
    role: "Analista Arquitecto de Sistemas",
    company: "Entidad financiera regional",
    period: "Abril 2024 – Presente",
    tasks: [
      "Plataforma de integración con recaudadores externos: arquitectura extensible a N socios (2 activos), contenedorizada con Docker y preparada para balanceo de carga",
      "Sistema de monitoreo para 20 servicios financieros — configuración independiente por servicio, 3 microservicios desacoplados y frontend de gestión",
      "Integración crítica de seguridad para tarjetas con cifrado en módulo dedicado, sobre Clean Architecture y CQRS",
      "Arranque en frío de la capa de datos reducido de 45 s a 3,5 s (92 % de mejora)",
      "Supervisión técnica de aplicaciones móviles y onboarding biométrico en Flutter para el canal digital",
      "CI/CD para releases iOS y Android — automatización de la entrega móvil",
      "Code reviews y pruebas de estrés con Apache JMeter en APIs financieras de alto impacto"
    ]
  },
  {
    role: "Asistente Desarrollador de Sistemas",
    company: "Entidad financiera regional",
    period: "Julio 2023 – Abril 2024",
    tasks: [
      "Migración de lógica de negocio de Stored Procedures a C# en APIs .NET Framework 4.8 — mayor mantenibilidad y cobertura de tests",
      "Comunicación en tiempo real en Flutter con WebSockets + Redis como Message Broker",
      "Funcionalidades transaccionales en Angular integradas al core bancario"
    ]
  },
  {
    role: "Analista Desarrollador",
    company: "Empresa de tecnología y entretenimiento",
    period: "Octubre 2022 – Julio 2023",
    tasks: [
      "Dashboard administrativo unificado en Blazor — consolidación de múltiples herramientas internas en una sola interfaz operativa",
      "Plataforma de recargas con pasarela de pagos y WebSockets — transacciones en tiempo real con conciliación automática",
      "Administración de servidores IIS, certificados SSL y DNS"
    ]
  },
  {
    role: "Desarrollador Full Stack",
    company: "Sector salud, gobierno regional",
    period: "Mayo 2022 – Septiembre 2022",
    tasks: [
      "Digitalización del registro de capacitaciones para 100+ trabajadores del sector salud — eliminación completa del proceso manual en papel"
    ]
  }
];

export const stats = [
  { value: "4+", label: "años construyendo software en producción" },
  { value: "20", label: "servicios financieros monitoreados" },
  { value: "−92 %", label: "tiempo de arranque en una API crítica" },
  { value: "100+", label: "usuarios que dejaron el papel" }
];

export const services = [
  {
    title: "Arquitectura backend",
    description: "APIs en .NET con Clean Architecture y CQRS, pensadas para crecer sin tener que reescribirse."
  },
  {
    title: "Integraciones y tiempo real",
    description: "Colas, mensajería, WebSockets y tareas en segundo plano entre sistemas críticos."
  },
  {
    title: "Entrega y calidad",
    description: "CI/CD, contenedores, pruebas de estrés y revisión de código para llegar a producción sin sobresaltos."
  }
];

export const techStack = [
  {
    category: "Backend y arquitectura",
    items: [
      ".NET Framework 4.8",
      ".NET 8",
      "C#",
      "Entity Framework",
      "Inyección de dependencias",
      "Clean Architecture",
      "CQRS",
      "Strategy Pattern",
      "Factory Pattern",
      "Saga Pattern",
      "Microservicios",
      "NestJS",
      "PHP"
    ]
  },
  {
    category: "Integración y procesamiento",
    items: ["WebSockets", "Redis", "RabbitMQ", "Workers en segundo plano", "Hangfire", "HSM"]
  },
  {
    category: "Frontend y mobile",
    items: ["Angular 21", "Flutter", "Blazor", "TypeScript", "JavaScript", "Swift", "Riverpod", "Drift"]
  },
  {
    category: "Datos",
    items: ["SQL Server", "MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    category: "Calidad, entrega y operaciones",
    items: [
      "xUnit",
      "CI/CD",
      "Docker",
      "Builds y releases",
      "Configuración de servidores",
      "IIS",
      "GitHub Actions",
      "Apache JMeter",
      "fly.io"
    ]
  }
];

export const projects = [
  {
    title: "Ficha Vulnerable",
    description: "App de gestión social que automatiza la importación de fichas desde Excel, con módulos de zona, local, usuario y niños.",
    tech: ["Angular", "NestJS", "MongoDB"],
    type: "personal" as const,
    github: "https://github.com/roby-dev"
  },
  {
    title: "Finance Tracker",
    description: "App Flutter 100% offline para control de finanzas personales. Sin backend, sin conexión requerida.",
    tech: ["Flutter", "Drift", "Riverpod"],
    type: "personal" as const,
    github: "https://github.com/roby-dev"
  },
  {
    title: "Integración con Recaudadores Externos",
    description: "Plataforma extensible para integrar socios de recaudación sin modificar el núcleo del sistema.",
    tech: [".NET 8", "Clean Architecture", "CQRS"],
    type: "professional" as const
  },
  {
    title: "Sistema de Monitoreo",
    description: "Monitoreo de 20 servicios con configuración independiente, sobre microservicios desacoplados.",
    tech: [".NET 8", "RabbitMQ", "Redis", "MongoDB", "Angular"],
    type: "professional" as const
  },
  {
    title: "Credenciales Dinámicas para Tarjetas",
    description: "Integración crítica con cifrado en módulo de seguridad dedicado.",
    tech: [".NET 8", "HSM", "CQRS"],
    type: "professional" as const
  },
  {
    title: "Dashboard Administrativo",
    description: "Dashboard unificado para gestión administrativa con comunicación en tiempo real.",
    tech: ["Blazor", "WebSockets", "SQL Server"],
    type: "professional" as const
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
