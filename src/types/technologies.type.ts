export interface TechnologiesI {
    id: string;
    title: string;
    tech_data: TechnoDataI[];
}

export interface TechnoDataI {
    id: string;
    name: string;
    logo: string;
}
