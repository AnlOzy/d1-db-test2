export async function onRequest(context) {
  const { env } = context;
  const db = env["d1-test1"]; // Make sure this matches your Binding name

  try {
    // 1. Fetch the real rows from your D1 tables
    const people = await db.prepare("SELECT * FROM People").all();
    const visits = await db.prepare("SELECT * FROM Visit").all();
    const items = await db.prepare("SELECT * FROM ItemTaken").all();

    // 2. Return the real results
    return new Response(JSON.stringify({
      people: people.results || [],
      visits: visits.results || [],
      items: items.results || []
    }), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      error: "Database Query Failed", 
      message: error.message 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
