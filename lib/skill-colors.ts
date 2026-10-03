export function skillBrandColors(brand: string) {
  // Decorative marks retain their brand hue. Only monochrome brands adapt
  // to the theme; the adjacent skill label provides readable text contrast.
  return {
    light: brand === "currentColor" ? "#000000" : brand,
    dark: brand === "currentColor" ? "#ffffff" : brand,
  };
}
