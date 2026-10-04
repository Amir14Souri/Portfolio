import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { pipeline } from "node:stream";
import { createGzip } from "node:zlib";

// Local preview only; GitHub Pages serves the exported files in production.
const root = resolve("out");
if (!existsSync(resolve(root, "index.html"))) {
  throw new Error("Build the static export first: npm run build");
}
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json",
  ".txt": "text/plain; charset=utf-8", ".xml": "application/xml",
  ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".pdf": "application/pdf",
  ".mp4": "video/mp4",
};
const server = createServer((request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  let path;
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    path = resolve(root, `.${pathname}`);
    if (path !== root && !path.startsWith(`${root}${sep}`)) throw new Error("Outside export");
    if (existsSync(path) && statSync(path).isDirectory()) path = resolve(path, "index.html");
  } catch {
    response.writeHead(400).end();
    return;
  }
  const found = existsSync(path) && statSync(path).isFile();
  if (!found) path = resolve(root, "404.html");
  const contentType = types[extname(path)] ?? "application/octet-stream";
  const compressed = /\bgzip\b/.test(request.headers["accept-encoding"] ?? "") &&
    /^(text\/|application\/(javascript|json|xml)|image\/svg\+xml)/.test(contentType);
  response.writeHead(found ? 200 : 404, {
    "Content-Type": contentType,
    ...(compressed ? { "Content-Encoding": "gzip" } : { "Content-Length": statSync(path).size }),
    Vary: "Accept-Encoding",
    "Cache-Control": "no-cache",
    "X-Content-Type-Options": "nosniff",
  });
  if (request.method === "HEAD") response.end();
  else {
    const streams = compressed ? [createReadStream(path), createGzip(), response] : [createReadStream(path), response];
    pipeline(streams, (error) => { if (error) response.destroy(error); });
  }
});
const port = Number(process.env.PORT ?? 3000);
server.listen(port, "127.0.0.1", () => console.log(`Static preview: http://localhost:${port}`));
