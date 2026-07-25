export type QuestionStepType = string;

export type QuestionPhaseType = "form" | "summary" | "done";

export type QuestionAnswerType = Record<string, string>;

export interface QuestionType {
    stepId: QuestionStepType;
    label: string;
    type: string;
    options?: string[];
    placeholder?: string;
}

export interface StackType {
    group: string;
    items: string[];
}

export interface ExperienceType {
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface ProjectType {
    name: string;
    tagline: string;
    stack: string[];
    url?: string;
    year: string;
}

export const contact = {
    supportContact: "soporte@flangrys.dev",
    professionalContact: "contacto@flangrys.dev",
}

export const profile = {
    name: "Francisco M. Prieto Giorgis",
    title: "Full Stack Software Engineer",
    location: "Rio Cuarto, Cordoba, Argentina",
    summary: "Soy Ingeniero de Software especializado en Backend, Cloud y Platform Engineering, enfocado en diseñar " +
        "sistemas distribuidos, APIs de alto rendimiento e infraestructura escalable para aplicaciones modernas.",
    github: "https://github.com/flangrys",
    linkedin: "https://linkedin.com/in/francisco-matias-prieto-giorgis/",
}

export const stack: StackType[] = [
    {group: "Backend", items: ["Python", "Go", "Java", "FastAPI", "Fiber", "NestJS"]},
    {group: "Frontend", items: ["React", "TailwindCSS", "Vite", "NextJS", "Angular"]},
    {group: "DevOps", items: ["Terraform", "GitHub Actions", "Prometheus", "Grafana"]},
    {group: "Cloud", items: ["AWS", "GCP", "Cloudflare", "Docker", "Kubernetes"]},
]

export const experience: ExperienceType[] = [
    {
        role: "Software Engineer",
        company: "Whiteboard Studio",
        period: "Febrero 2024 — Presente",
        description: "En este puesto lidero al equipo de desarrollo de Whiteboard Studio Designer, una plataforma de" +
            " diseño de aplicaciónes web personalizadas, y hosting autogestionado. Junto a un equipo" +
            " multidisciplinario diseño y planifico la arquitectura y los procesos involucrados desde los casos de" +
            " uso hasta el despluegie y mantenimiento de los servicios."
    },
    {
        role: "Full Stack Developer",
        company: "Grupo Penna Servicios logísticos",
        period: "Agosto 2025 — Febrero 2026",
        description: "En este rol estuve involucrado en el desarrollo de herramientas de medición de métricas de" +
            " logística; e integrar otras soluciones con su ERP interno. Además inmplemente un webscraper pensado" +
            " para ingestar analiticas de viajes de entrega, e integrarlos al pipeline ETL ya existente.",
    },
    {
        role: "Software Engineer",
        company: "Instituto Nacional de Tecnología Agropecuaria",
        period: "Agosto 2023 — Diciembre 2023",
        description: "En esta pasantia tuve la oportunidad de liderar un equipo propio, en el desarrollo de Agrovar," +
            " un data warehouse diseñado para ordenar los estudios del territorio argentino y democratizar el acceso" +
            " libre a la información del instituto.",
    },
];


export const projects: ProjectType[] = [
    {
        name: "Whiteboard Studio ECC",
        tagline: "Se trata de un paquete integral de herramientas que potencian el rendimiento de la empresas." +
            " Gran parte de la infraestructura se constituye por microservicios distribuidos, cada uno responsable" +
            " de cubrir las funciones u caracteristicas de la plataforma.",
        stack: ["SAAS", "Enterprise Resource Planning", "PWA", "Microservices"],
        year: "2024",
    },
    {
        name: "Agroestim",
        tagline: "Se trata de una aplicación web diseñada para estimar el rendimiento de los cultivos atravéz de las" +
            " predicciones del INTA. Este proyecto se constituye por un servicio monolitico modular con un pipeline" +
            " ETL interno que predice al instante el rendimiento de la producción.",
        year: "2023",
        stack: ["AGRO", "Data Analysis", "Crop Analysis", "Python", "React", "Graphql"]
    },
    {
        name: "BoomerangMC",
        tagline: "Se trata de una implementación open-source del software de servidor de Minecraft altamente" +
            " personalizable y que provee una API más sencilla, y completa.",
        stack: ["Open Source", "Minecraft Server Software", "Java", "Concurrent Systems"],
        url: "https://boomerang.flangrys.dev",
        year: "2025",
    },
    {
        name: "flangrys.dev",
        tagline: "Este mismo portfolio, es un medio para que técnicos y no tan técnicos puedan encontrar referencias" +
            " de mi trabajo o visitar algun proyecto. Este sitio ha sufrido grandes cambios desde sus inicios y me" +
            " ha acompañado en el desarrollo de mi perfil técnico, adaptandose a las nuevas ncecesidades del mercado.",
        stack: ["React", "Vite", "TailwindCSS", "Github Actions", "Cloudflare"],
        url: "#",
        year: "2023",
    },
    {
        name: "blog.flangrys.dev",
        tagline: "Este portfolio también esta atado a mi blog, aun se encuentra en desarrollo pero cuenta con fecha" +
            " de estreno, a finales de noviembre del corriente año lanzaré mis primeros articulos.",
        stack: ["Blog", "SSR", "Cloudflare"],
        year: "2026",
    }
]

export const quizQuestions: QuestionType[] = [
    {
        stepId: "role",
        label: "¿Qué tipo de rol estás evaluando?",
        type: "choice",
        options: ["Full Stack", "Backend", "Frontend", "Cloud Platform", "Tech Lead", "Otro"],
    },
    {
        stepId: "mode",
        label: "¿Cuál es la modalidad de trabajo?",
        type: "choice",
        options: ["Remoto", "Híbrido", "On-site"],
    },
    {
        stepId: "notes",
        label: "Contame brevemente sobre la posición o el equipo.",
        type: "text",
        placeholder: "Contexto, stack, timings…",
    },
    {
        stepId: "nombre",
        label: "Comparteme tu correo de contacto.",
        type: "email",
        placeholder: "tu-correo@mail.com",
    }
];