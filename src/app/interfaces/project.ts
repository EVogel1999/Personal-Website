export class Project {
    name: string;
    description: string;
    start: Date;
    end?: Date;
    image: string;
    tags: string[];
    repository?: string;
}