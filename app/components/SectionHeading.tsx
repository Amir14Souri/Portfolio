export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
    </div>
  );
}
