import type { Request } from "netlify:edge";

export default (req: Request) => new Response(JSON.stringify({ headers: req.headers, referrer: req.referrer }, null, 2));

