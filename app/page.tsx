import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Snake Game',
    description: 'A classic Snake game built with Java.',
    technologies: ['Java'],
    link: 'https://github.com/Jctman5/SnakeGame.git'
  },
  {
    title: 'Simple Dungeon Crawler Game',
    description: 'A simple dungeon crawler game built with C# in Godot.',
    technologies: ['C#', 'Godot'],
    link: 'https://github.com/Jctman5/CSE341PROJECT2.git'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}