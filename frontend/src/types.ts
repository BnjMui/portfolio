export type StudentType = {
  studentName: string;
  degree: string;
  points: number;
  experiences: string[];
  email: string;
};

export type ProjectType = {
  id: string;
  title: string;
  url?: string;
  description: string;
  createdAt: string;
  category?: string;
};
