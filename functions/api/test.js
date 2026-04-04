export async function onRequest(context) {
  const { request, env } = context;
  const db = env["d1-test1"]; 

  /* // INSERT FUNCTION DISABLED FOR NOW
  if (request.method === "POST") {
    try {
      const data = await request.json();
      return new Response(JSON.stringify({ success: true, message: "POST is currently disabled" }), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      return new Response(err.message, { status: 500 });
    }
  }
  */

  // GET request: Returning Dummy Data instead of querying SQL
  const dummyData = [
    {
      id: 1,
      first_name: "Anil",
      family_name: "Ozyol",
      national_insurance: "QQ 12 34 56 A",
      evisa_ref_no: "EVI-987654321",
      arc_number: "ARC00112233",
      port_ref_no: "LHR-789"
    },
    {
      id: 2,
      first_name: "Jane",
      family_name: "Smith",
      national_insurance: "AB 99 88 77 C",
      evisa_ref_no: "EVI-112233445",
      arc_number: "ARC44556677",
      port_ref_no: "LGW-456"
    }
  ];

  return new Response(JSON.stringify(dummyData), {
    headers: { "Content-Type": "application/json" }
  });
}
