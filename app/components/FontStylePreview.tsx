"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type FontStyle = "technical" | "academic";

const FontStyleContext = createContext<{
  fontStyle: FontStyle;
  toggleFontStyle: () => void;
} | null>(null);

// Temporary comparison control: state intentionally resets on a fresh page load.
export function FontStylePreviewProvider({ children }: { children: ReactNode }) {
  const [fontStyle, setFontStyle] = useState<FontStyle>("technical");

  return (
    <FontStyleContext.Provider value={{
      fontStyle,
      toggleFontStyle: () => setFontStyle(current => current === "technical" ? "academic" : "technical"),
    }}>
      <div className="contents" data-font-style={fontStyle}>{children}</div>
    </FontStyleContext.Provider>
  );
}

export function FontStyleToggle() {
  const context = useContext(FontStyleContext);
  if (!context) throw new Error("FontStyleToggle requires FontStylePreviewProvider");

  const { fontStyle, toggleFontStyle } = context;
  const currentLabel = fontStyle === "technical" ? "Technical" : "Academic";
  const nextLabel = fontStyle === "technical" ? "Academic" : "Technical";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="lab-icon-button lab-font-toggle"
          onClick={toggleFontStyle}
          aria-label={`Font: ${currentLabel}. Switch to ${nextLabel}`}
          aria-pressed={fontStyle === "academic"}>
          <span aria-hidden="true">Aa</span>
        </button>
      </TooltipTrigger>
      <TooltipContent className="rounded-md">
        Font: {currentLabel} · Switch to {nextLabel}
      </TooltipContent>
    </Tooltip>
  );
}
