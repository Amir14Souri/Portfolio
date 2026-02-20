import { SITE } from "@/app/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 py-5 px-6 transition-colors">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-2 text-center">
        <p className="flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Last Updated: {SITE.footerLastUpdated}
        </p>
      </div>
    </footer>
  );
}
