import { CourseType } from "@/types/course";
import { UserType } from "@/types/user";

export const mockCourses: CourseType[] = [
    {
        id: '1',
        title: 'Introduction to Web Development',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build responsive websites from scratch.',
        instructor: 'Jane Smith',
        instructorId: '101',
        price: 49.99,
        imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
        categories: ['Programming', 'Web Development'],
        level: 'Beginner',
        duration: '6 weeks',
        enrolledStudents: 1243,
        rating: 4.7,
        createdAt: new Date('2023-01-15').toISOString(),
    },
    {
        id: '2',
        title: 'Advanced React and Redux',
        description: 'Master React hooks, context API, and Redux for building scalable front-end applications.',
        instructor: 'Michael Johnson',
        instructorId: '102',
        price: 79.99,
        imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
        categories: ['Programming', 'React', 'Frontend'],
        level: 'Intermediate',
        duration: '8 weeks',
        enrolledStudents: 952,
        rating: 4.9,
        createdAt: new Date('2023-02-20').toISOString(),
    },
    {
        id: '3',
        title: 'UX/UI Design Fundamentals',
        description: 'Learn the principles of user experience and interface design for creating intuitive digital products.',
        instructor: 'Sarah Chen',
        instructorId: '103',
        price: 59.99,
        imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
        categories: ['Design', 'UX/UI'],
        level: 'Beginner',
        duration: '5 weeks',
        enrolledStudents: 1089,
        rating: 4.6,
        createdAt: new Date('2023-03-10').toISOString(),
    },
    {
        id: '4',
        title: 'Data Science with Python',
        description: 'Explore data analysis, visualization, and machine learning using Python and popular libraries.',
        instructor: 'David Wilson',
        instructorId: '104',
        price: 89.99,
        imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
        categories: ['Data Science', 'Python', 'Machine Learning'],
        level: 'Intermediate',
        duration: '10 weeks',
        enrolledStudents: 765,
        rating: 4.8,
        createdAt: new Date('2023-01-05').toISOString(),
    },
    {
        id: '5',
        title: 'Mobile App Development with Flutter',
        description: 'Build cross-platform mobile applications using Flutter and Dart programming language.',
        instructor: 'Emily Zhang',
        instructorId: '105',
        price: 69.99,
        imageUrl: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
        categories: ['Mobile Development', 'Flutter', 'Dart'],
        level: 'Intermediate',
        duration: '7 weeks',
        enrolledStudents: 612,
        rating: 4.5,
        createdAt: new Date('2023-04-12').toISOString(),
    },
    {
        id: '6',
        title: 'Full Stack JavaScript Development',
        description: 'Master the MERN stack (MongoDB, Express, React, Node.js) to build complete web applications.',
        instructor: 'Alex Rodriguez',
        instructorId: '106',
        price: 99.99,
        imageUrl: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg',
        categories: ['Programming', 'Full Stack', 'JavaScript'],
        level: 'Advanced',
        duration: '12 weeks',
        enrolledStudents: 437,
        rating: 4.9,
        createdAt: new Date('2023-02-28').toISOString(),
    },
];

export const mockEnrolledCourses = [
    {
        courseId: '1',
        enrolledDate: new Date('2023-05-10').toISOString(),
        progress: 0.65,
        status: 'in-progress',
    },
    {
        courseId: '3',
        enrolledDate: new Date('2023-04-22').toISOString(),
        progress: 0.9,
        status: 'in-progress',
    },
];

export const mockUser: UserType = {
    id: '001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'student',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    createdAt: new Date('2023-01-01').toISOString(),
};

export const mockInstructor: UserType = {
    id: '101',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'instructor',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    bio: 'Experienced web developer with over 10 years in the industry. Passionate about teaching and making complex concepts accessible to beginners.',
    createdAt: new Date('2022-06-15').toISOString(),
    courses: ['1'],
};

export function getEnrolledCourses() {
    return mockEnrolledCourses.map((enrollment) => {
        const courseDetails = mockCourses.find(course => course.id === enrollment.courseId);
        return {
            ...courseDetails,
            ...enrollment,
        };
    });
}

export function getAvailableCourses() {
    const enrolledCourseIds = mockEnrolledCourses.map(course => course.courseId);
    return mockCourses.filter(course => !enrolledCourseIds.includes(course.id));
}

export function getInstructorCourses(instructorId: string) {
    return mockCourses.filter(course => course.instructorId === instructorId);
}

export function getCourseById(id: string) {
    return mockCourses.find(course => course.id === id);
}