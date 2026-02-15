import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 flex flex-col items-center gap-4 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-muted-foreground">{subtitle}</p>
      )}
      <Separator className="mt-4 mx-auto h-0.75 w-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
    </div>
  );
}
