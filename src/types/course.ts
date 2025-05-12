export interface CourseType {
    id: string;
    title: string;
    description: string;
    instructor: string;
    instructorId: string;
    price: number;
    imageUrl: string;
    categories: string[];
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    enrolledStudents: number;
    rating: number;
    createdAt: string;
}