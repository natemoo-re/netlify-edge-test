import type { Context } from "netlify:edge";

export default (req) => new Response(JSON.stringify({ headers: req.headers, referrer: req.referrer }, null, 2));

