import type {EducationType, ExperienceType, ProjectType, StackType} from "@libs/portfolio.types.ts";

export const contact = {
    supportContact: "contacto@flangrys.dev",
    professionalContact: "hola@flangrys.dev",
}

export const profile = {
    github: "https://github.com/flangrys",
    linkedin: "https://linkedin.com/in/francisco-matias-prieto-giorgis/",
}

export const stack: StackType[] = [
    {
        group: "Backend",
        items: ["Python", "FastAPI", "Django", "Java", "Spring Boot", "Go", "Gin", "Fiber", "Typescript", "NestJS"]
    },
    {
        group: "Frontend",
        items: ["HTML5", "CSS3", "Javascript", "Typescript", "Vite", "TailwindCSS", "React", "NextJS", "Angular"]
    },
    {group: "IaC", items: ["Open Tofu", "Terraform", "AWS CloudFormation", "Ansible"]},
    {
        group: "Cloud",
        items: ["AWS IAM", "AWS VPC", "AWS Dynamo DB", "AWS S3", "AWS Lambda", "Cloudflare Workers", "Docker", "Kubernetes"]
    },
    {group: "VCS & AI", items: ["Git", "Github", "Gitlab", "Ollama", "OpenCode"]},
]

export const education: EducationType[] = [
    {
        institution: "Universidad Nacional de Río Cuarto",
        degree: "Licenciatura en Ciencias de la Computación"
    },
    {
        institution: 'IPETyM N°257 "Dr. René Favaloro"',
        degree: "Técnico en Programación"
    }
]

export const experience: ExperienceType[] = [
    {
        role: "Software Engineer",
        company: "Whiteboard Studio",
        period: "Febrero 2024 — Presente",
    },
    {
        role: "Full Stack Developer",
        company: "Grupo Penna Servicios logísticos",
        period: "Agosto 2025 — Febrero 2026",
    },
    {
        role: "Software Engineer",
        company: "Instituto Nacional de Tecnología Agropecuaria",
        period: "Agosto 2023 — Diciembre 2023",
    },
];

export const projects: ProjectType[] = [
    {
        name: "Whiteboard Studio – ECC",
        tagline: "Se trata de plataforma de planificacion de recursos empresariales cloud-hybrid, modular" +
            " y open-source.",
        stack: ["SAAS", "ERP", "PWA", "Microservices", "Cloud"],
        year: "2026",
    },
    {
        name: "Agroestim",
        tagline: "Se trata de una herramienta para estimar el rendimiento de la producción agrícola de cultivos" +
            " variados, en colaboración con el Instituto Nacional de Tecnologia Agropecuaria",
        stack: ["Agro", "Data Analysis", "Crop Analysis", "Python", "Django", "SSR"],
        year: "2023",
    },
    {
        name: "blog.flangrys.dev",
        tagline: "Se trata de mi blog personal con el que pretendo compartir mis proyectos, conocimientos y" +
            " experiencias con la comunidad.",
        stack: ["Blog", "NextJS", "TailwindCSS", "SSR", "Cloudflare"],
        url: "https://blog.flangrys.dev",
        year: "2026",
    },
    {
        name: "boomerang.flangrys.dev",
        tagline: "Se trata de un software de servidor de Minecraft, pensado para soportar ambas ediciones del juego, " +
            "con soporte para plugins y altamente personalizable.",
        stack: ["Open Source", "Java", "NIO", "Netty"],
        url: "https://github.com/flangrys/boomerang",
        year: "2025",
    },
    {
        name: "www.flangrys.dev",
        tagline: "Se trata de este mismo portfolio, diseñado para conectar con otros profesionales y desmotra que se" +
            "puede desplegar un viernes. hahan't",
        stack: ["React", "Vite", "TailwindCSS", "Github Actions", "Cloudflare"],
        url: "https://github.com/flangrys/flangrys.dev",
        year: "2023",
    },
]