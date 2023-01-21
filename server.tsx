import { serve } from "https://deno.land/std@0.173.0/http/mod.ts";
import ReactDOMServer from "https://esm.sh/react-dom@18.2.0/server";

const SiteManifest = new Map();

for await (const page of Deno.readDir("./pages")) {
  const path = page.name.split(".")[0] === "index" ? "/" : "/" + page.name.split(".")[0];
  import("./pages/" + page.name).then(res => {
    SiteManifest.set(path, res.default);
  })
}

function handler(req: Request): Response {
  const url = new URL(req.url);
  const path = url.pathname;

  const page = ReactDOMServer.renderToString(SiteManifest.get(path)());
  
  const response = new Response(page, { headers: { "content-type": "text/html; charset=utf-8" }});

  return response;
}

serve(handler);