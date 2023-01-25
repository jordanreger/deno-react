import { serve } from "https://deno.land/std@0.173.0/http/mod.ts";
import ReactDOMServer from "https://esm.sh/react-dom@18.2.0/server";

export function react_serve(manifest: any) {
  const SiteManifest = manifest;

  function handler(req: Request): Response {
    const url = new URL(req.url);
    const path = url.pathname;

    let page;

    try {
      page = ReactDOMServer.renderToString(SiteManifest.get(path).default());
    } catch(_) {
      page = ReactDOMServer.renderToString(SiteManifest.get("/_404").default());
    }
    
    const response = new Response(page, { headers: { "content-type": "text/html; charset=utf-8" }});
  
    return response;
  }

  serve(handler);
}