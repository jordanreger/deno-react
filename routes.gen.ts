import { react_serve } from "./server.ts";

import * as $0 from "./pages/index.tsx";
import * as $1 from "./pages/_404.tsx";

const SiteManifest = new Map([["/",$0],["/_404",$1]])

export const run = () => { react_serve(SiteManifest); }