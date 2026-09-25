// This service acts as an abstraction layer for fetching data.
// As you learn backend (Node.js/Postgres), you can replace these mock functions 
// with actual fetch calls to your API endpoints or direct Prisma queries.

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Frontend" | "Backend" | "Full Stack";
  icon: string;
  stack: string[];
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Design System Library",
    description: "A reusable component library built with React and TypeScript, documented with Storybook.",
    category: "Frontend",
    icon: "🎨",
    stack: ["React", "TypeScript", "Storybook"]
  },
  {
    id: "2",
    title: "Auth Service API",
    description: "A standalone authentication microservice with registration, login, and role-based access control.",
    category: "Backend",
    icon: "🔐",
    stack: ["Node.js", "Express", "JWT"]
  }
];

export async function getProjects(): Promise<Project[]> {
  // Simulate network delay
  return new Promise((resolve) => setTimeout(() => resolve(mockProjects), 500));
}
