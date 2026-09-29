import { SITE } from "@/app/portfolio";

export default function Footer() {
  return (
    <footer className="lab-footer px-6">
      <div className="mx-auto max-w-6xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
        <p className="font-mono text-xs">Last Updated: {SITE.footerLastUpdated}</p>
      </div>
    </footer>
  );
}
