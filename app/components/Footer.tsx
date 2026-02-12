import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-8 px-6 transition-colors">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-3 text-center">
        <p className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
          Built with <Heart size={14} className="text-red-500" /> using Next.js
          &amp; Tailwind CSS
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
