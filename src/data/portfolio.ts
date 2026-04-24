export const developer = {
  name: "Roby Gerson Zuñiga Silva",
  title: "Arquitecto de Software & Full Stack Developer",
  specialty: "Sector financiero",
  location: "Tacna, Perú",
  linkedin: "https://www.linkedin.com/in/robzunigas/",
  github: "https://github.com/roby-dev",
  email: "rgersonzs95@gmail.com",
  phone: "+51 921 781 680"
};

export const experiences = [
  {
    role: "Analista Arquitecto de Sistemas",
    company: "Caja Tacna",
    period: "Abril 2024 – Presente",
    tasks: [
      "API de Recaudadores Externos en .NET 8",
      "Sistema de monitoreo con microservicios, RabbitMQ, Redis, MongoDB y Angular",
      "Integración Unibanca con cifrado HSM, CQRS y Clean Architecture",
      "Supervisión de BiPay y onboarding biométrico en Flutter",
      "Code Reviews y pruebas de estrés con Apache JMeter",
      "Optimización de EF Core: de 45s a 3.5s en arranque en frío",
      "Pipelines CI/CD en TFS 2017 para iOS y Android"
    ]
  },
  {
    role: "Asistente Desarrollador de Sistemas",
    company: "Caja Tacna",
    period: "Julio 2023 – Abril 2024",
    tasks: [
      "Refactorización de APIs .NET Framework 4.8 (Stored Procs → C#)",
      "WebSockets + Redis como Message Broker en Flutter",
      "Funcionalidades transaccionales en Angular"
    ]
  },
  {
    role: "Analista Desarrollador",
    company: "Soporte Remoto S.A.C.",
    period: "Octubre 2022 – Julio 2023",
    tasks: [
      "Dashboard Administrativo unificado con Blazor",
      "Plataforma de recargas para casino con pasarela Kushki y WebSockets",
      "Administración de servidores IIS, SSL Wildcard, DNS"
    ]
  },
  {
    role: "Desarrollador Full Stack",
    company: "Dirección Regional de Salud Tacna",
    period: "Mayo 2022 – Septiembre 2022",
    tasks: [
      "Digitalización de registro de capacitaciones para 100+ trabajadores",
      "Stack: PHP, JavaScript, Angular, PostgreSQL"
    ]
  }
];

export const techStack = [
  {
    category: "Backend",
    items: [".NET 8", "C#", "NestJS", "PHP", "Microservicios", "CQRS", "Clean Architecture", "Saga Pattern"]
  },
  {
    category: "Frontend & Mobile",
    items: ["Angular", "Flutter", "Blazor", "Swift", "JavaScript", "TypeScript", "Riverpod", "Drift"]
  },
  {
    category: "Infraestructura & Datos",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "fly.io", "GitHub Actions", "Apache JMeter", "CI/CD", "IIS", "HSM"]
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
    title: "API Recaudadores Externos",
    description: "API de alto rendimiento para integración con recaudadores externos en Caja Tacna.",
    tech: [".NET 8", "Clean Architecture", "CQRS"],
    type: "professional" as const
  },
  {
    title: "Sistema de Monitoreo",
    description: "Plataforma interna de monitoreo en tiempo real con arquitectura de microservicios.",
    tech: [".NET 8", "RabbitMQ", "Redis", "MongoDB", "Angular"],
    type: "professional" as const
  },
  {
    title: "Integración Unibanca CVV Dinámico",
    description: "Integración financiera crítica con cifrado HSM para generación de CVV dinámico.",
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
