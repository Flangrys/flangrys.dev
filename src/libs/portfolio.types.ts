export interface StackType {
    group: string;
    items: string[];
}

export interface EducationType {
    degree: string;
    institution: string;
}

export interface ExperienceType {
    role: string;
    company: string;
    period: string;
}

export interface ProjectType {
    name: string;
    tagline: string;
    stack: string[];
    url?: string;
    year: string;
}


export type Question = number;

export interface Answers {
    work_position_id: number;
    work_arrangement_id: number;
    work_summary: string;
    email: string;
}