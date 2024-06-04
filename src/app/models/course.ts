export interface Course {
    id: number;
    name: string;
    summary: string;
    description: string;
    imageUrl: string;
    demoUrl: string;
    url: string;
    unitPrice: number;
    difficultyType: number;
    createdDate: Date;
    categoryId: number;
    mentorId: number;
}
