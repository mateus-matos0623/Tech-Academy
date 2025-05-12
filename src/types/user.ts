export interface UserType {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'instructor' | 'admin';
    avatar: string;
    bio?: string;
    createdAt: string;
    courses?: string[];
  }