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
      <Badge
        variant="muted"
        className="tracking-[0.35em] text-[11px] text-muted-foreground">
        {title}
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-muted-foreground">{subtitle}</p>
      )}
      <Separator className="w-16" />
    </div>
  );
}
