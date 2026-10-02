type RGB = [number, number, number];

const rgb = (hex: string): RGB => [1, 3, 5].map((start) =>
  parseInt(hex.slice(start, start + 2), 16)) as RGB;

const luminance = (color: RGB) => color.map((value) => {
  const channel = value / 255;
  return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
}).reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);

// Matches .lab-skill: 65% secondary over the card surface in each theme.
const themes = {
  light: { foreground: rgb("#000000"), chip: [244.35, 244.35, 244.35] as RGB },
  dark: { foreground: rgb("#ffffff"), chip: [18.5, 18.5, 18.5] as RGB },
};

export function skillBrandColors(brand: string) {
  const variant = (theme: keyof typeof themes) => {
    const { foreground, chip } = themes[theme];
    const original = brand === "currentColor" ? foreground : rgb(brand);
    const chipLuminance = luminance(chip);
    // Precomputed during server rendering, with no browser color calculations.
    for (let step = 0; step <= 20; step++) {
      const color = original.map((value, index) =>
        Math.round(value + (foreground[index] - value) * step * 0.05)) as RGB;
      const value = luminance(color);
      const contrast = (Math.max(value, chipLuminance) + 0.05) / (Math.min(value, chipLuminance) + 0.05);
      if (contrast >= 3) return `rgb(${color.join(", ")})`;
    }
    return `rgb(${foreground.join(", ")})`;
  };
  return { light: variant("light"), dark: variant("dark") };
}
