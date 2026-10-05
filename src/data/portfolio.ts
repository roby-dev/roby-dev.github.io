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
  { value: "Fintech", label: "software bancario regulado en producción desde 2023" },
  { value: "Pagos", label: "integraciones con redes de tarjetas, billeteras y pasarelas" },
  { value: "Líder técnico", label: "code reviews, estándares de arquitectura y supervisión de proyectos" },
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
    problem: "Una red de pagos exigía validar credenciales dinámicas de tarjeta con requisitos de seguridad estrictos.",
    solution: "Diseñé la integración con cifrado y descifrado en un módulo de seguridad de hardware (HSM), sobre Clean Architecture y CQRS.",
    result: "Flujo crítico de tarjetas en producción, cumpliendo las exigencias de seguridad del proveedor.",
    tech: [".NET 8", "HSM", "CQRS", "Clean Architecture"]
  },
  {
    tag: "Integraciones",
    title: "API de recaudación con socios externos",
    problem: "Integrar varios recaudadores externos sin que cada uno obligue a cambiar el núcleo del sistema.",
    solution: "Arquitecté una API en .NET 8 extensible por socio, contenedorizada con Docker y preparada para balanceo de carga.",
    result: "Nueva API en producción con respuestas inferiores a 1 segundo.",
    tech: [".NET 8", "Docker", "Clean Architecture", "Strategy"]
  },
  {
    tag: "Observabilidad",
    title: "Monitoreo y alertas de servicios financieros",
    problem: "Vigilar el estado de los servicios financieros y alertar a tiempo, con reglas distintas para cada servicio.",
    solution: "Desarrollé el backend en microservicios con colas, caché y tareas programadas, y el frontend de gestión en Angular.",
    result: "Sistema interno de monitoreo y alertas construido de punta a punta.",
    tech: [".NET 8", "RabbitMQ", "Redis", "MongoDB", "Angular"]
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
    role: "Analista Arquitecto de Sistemas",
    company: "Entidad financiera regulada",
    period: "Abril 2024 – Presente",
    tasks: [
      "Arquitectura de integraciones críticas: validación de tarjetas con HSM y nueva API de recaudación con respuestas inferiores a 1 s",
      "Establecí y dirijo los code reviews del equipo para sostener estándares de arquitectura y código limpio",
      "Supervisión técnica de proyectos clave: integración con billetera digital y onboarding con biometría facial en Flutter",
      "Sistema interno de monitoreo y alertas: backend en microservicios y frontend en Angular",
      "Pruebas de estrés con Apache JMeter y optimización de Entity Framework: arranque en frío de 45 s a 5 s",
      "CI/CD para compilar y publicar las apps móviles (Android e iOS) de forma automática"
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
