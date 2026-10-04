import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const output = resolve("out");
const read = (path) => readFileSync(resolve(output, path), "utf8");
for (const path of ["index.html", "404.html", "robots.txt", "sitemap.xml", "photo.jpg", "cv.pdf"]) {
  assert(existsSync(resolve(output, path)), `Missing export: ${path}`);
}

const html = read("index.html");
const tags = [...html.matchAll(/<(a|img|link|script|meta|section|div)\b[^>]*>/g)].map(([tag, type]) => ({
  type,
  attributes: Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])),
  tag,
}));
const canonical = tags.find(({ type, attributes: a }) => type === "link" && a.rel === "canonical");
assert.equal(canonical?.attributes.href, "https://souuri.ir");
assert.equal((html.match(/<h1\b/g) ?? []).length, 1, "Expected one main heading");

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
assert.equal(new Set(ids).size, ids.length, "Duplicate element IDs");
for (const { type, attributes: a } of tags) {
  if (type === "a" && a.href?.startsWith("#")) {
    assert(ids.includes(a.href.slice(1)), `Broken anchor: ${a.href}`);
  }
  if (type === "a" && a.target === "_blank") {
    const rel = new Set((a.rel ?? "").split(" "));
    assert(rel.has("noopener") && rel.has("noreferrer"), `Unsafe external link: ${a.href}`);
  }
  for (const url of [a.src, a.href]) {
    if (!url?.startsWith("/") || url.startsWith("//")) continue;
    const path = decodeURIComponent(new URL(url, "https://souuri.ir").pathname);
    assert(existsSync(resolve(output, `.${path}`)), `Missing linked asset: ${url}`);
  }
}

const person = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? "null");
assert.equal(person?.name, "Amirhossein Souri");
assert.equal(person?.image, "https://souuri.ir/photo.jpg");
assert(person.alternateName.includes("امیرحسین صوری"), "Missing Persian identity alias");
for (const name of ["og:image", "twitter:image"]) {
  assert.equal(tags.find(({ attributes: a }) => a.property === name || a.name === name)?.attributes.content,
    "https://souuri.ir/photo.jpg", `Incorrect preview image: ${name}`);
}

const disclosure = tags.find(({ attributes: a }) => a.id === "additional-projects");
assert(disclosure && /\bhidden(?:="")?[\s>]/.test(disclosure.tag), "Projects should start collapsed");
const additionalMarkup = html.slice(html.indexOf(disclosure.tag)).split("<button")[0];
assert((additionalMarkup.match(/<h3\b/g) ?? []).length > 0, "Additional projects are absent from exported HTML");
assert.match(read("robots.txt"), /Disallow: \/animations\//);
assert.match(read("robots.txt"), /Sitemap: https:\/\/souuri\.ir\/sitemap\.xml/);
assert.doesNotMatch(read("robots.txt"), /Disallow: \/\s*$/m);
assert.match(read("sitemap.xml"), /<loc>https:\/\/souuri\.ir<\/loc>/);
assert.doesNotMatch(html, /fonts\.(?:googleapis|gstatic)\.com/);
for (const name of readdirSync(resolve(output, "_next/static/chunks")).filter((name) => name.endsWith(".css"))) {
  assert.doesNotMatch(read(`_next/static/chunks/${name}`), /fonts\.(?:googleapis|gstatic)\.com/);
}
console.log("Static export checks passed: identity, metadata, links, assets, fonts, and project HTML.");
