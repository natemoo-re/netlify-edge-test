export default (req: Request) => new Response(JSON.stringify({ headers: req.headers, referrer: req.referrer }, null, 2));

