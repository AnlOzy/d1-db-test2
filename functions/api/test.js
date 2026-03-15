export async function onRequest(context) {
  const { request, env } = context;
  const db = env["d1-test1"]; 

  if (request.method === "POST") {
    try {
      const { name } = await request.json();
      if (!name) return new Response("Missing Name", { status: 400 });

      await db.prepare("INSERT INTO users (name) VALUES (?)").bind(name).run();
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      return new Response(err.message, { status: 500 });
    }
  }

  // GET request: list all users
  const { results } = await db.prepare("SELECT * FROM users").all();
  return new Response(JSON.stringify(results), {
    headers: { "Content-Type": "application/json" }
  });
}
