interface InfoCardProps {
  heading: string;
  text: string;
}

export default function InfoCard({ heading, text }: InfoCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{heading}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}