import InfoCard from "../../components/InfoCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        This about page shares more information about my background and work.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <InfoCard
          heading="Education"
          text="Studying web development and building projects with Next.js."
        />
        <InfoCard
          heading="Skills"
          text="HTML, CSS, JavaScript, React, TypeScript, and Tailwind CSS."
        />
      </div>
    </main>
  );
}