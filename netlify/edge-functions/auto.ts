export default (req: Request) => {
    const headers = {};
    req.headers.forEach((value, key) => headers[key] = value);
    return new Response(JSON.stringify({ headers: headers }, null, 2));
}

