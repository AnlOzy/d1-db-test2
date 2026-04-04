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
    { id: 1, first_name: "Oliver", family_name: "Smith", national_insurance: "QQ 11 22 33 A", evisa_ref_no: "EVI-100200301", arc_number: "ARC11112222", port_ref_no: "LHR-101" },
    { id: 2, first_name: "Amelia", family_name: "Smith", national_insurance: "AB 44 55 66 C", evisa_ref_no: "EVI-100200302", arc_number: "ARC11113333", port_ref_no: "LHR-102" },
    { id: 3, first_name: "Noah", family_name: "Jones", national_insurance: "TN 77 88 99 Z", evisa_ref_no: "EVI-400500601", arc_number: "ARC22224444", port_ref_no: "MAN-201" },
    { id: 4, first_name: "Isla", family_name: "Jones", national_insurance: "XY 22 33 44 B", evisa_ref_no: "EVI-400500602", arc_number: "ARC22225555", port_ref_no: "MAN-202" },
    { id: 5, first_name: "Leo", family_name: "Taylor", national_insurance: "PP 55 44 33 D", evisa_ref_no: "EVI-700800901", arc_number: "ARC33336666", port_ref_no: "LGW-301" },
    { id: 6, first_name: "Ava", family_name: "Taylor", national_insurance: "LM 66 77 88 E", evisa_ref_no: "EVI-700800902", arc_number: "ARC33337777", port_ref_no: "LGW-302" },
    { id: 7, first_name: "George", family_name: "Taylor", national_insurance: "JW 12 34 56 F", evisa_ref_no: "EVI-700800903", arc_number: "ARC33338888", port_ref_no: "LGW-303" },
    { id: 8, first_name: "Muhammad", family_name: "Brown", national_insurance: "RS 09 08 07 G", evisa_ref_no: "EVI-900100200", arc_number: "ARC44449999", port_ref_no: "BHX-401" },
    { id: 9, first_name: "Olivia", family_name: "Williams", national_insurance: "KB 21 43 65 H", evisa_ref_no: "EVI-300600900", arc_number: "ARC55550000", port_ref_no: "STN-501" },
    { id: 10, first_name: "Arthur", family_name: "Wilson", national_insurance: "ZZ 11 11 11 J", evisa_ref_no: "EVI-200400800", arc_number: "ARC66661111", port_ref_no: "EDI-601" },
    { id: 11, first_name: "Ivy", family_name: "Johnson", national_insurance: "MM 99 88 77 K", evisa_ref_no: "EVI-500100500", arc_number: "ARC77772222", port_ref_no: "GLA-701" },
    { id: 12, first_name: "Muhammad", family_name: "Davies", national_insurance: "NX 33 22 11 L", evisa_ref_no: "EVI-800200400", arc_number: "ARC88883333", port_ref_no: "BFT-801" }
  ];

  return new Response(JSON.stringify(dummyData), {
    headers: { "Content-Type": "application/json" }
  });
}
