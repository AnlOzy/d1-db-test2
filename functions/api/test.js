export async function onRequest(context) {
  try {
    // 1. Define People Data
    const peopleData = [
      { People_id: "P001", first_name: "Oliver", family_name: "Smith", DateOfBirth: "1985-05-12", National_Insurance: "QQ 11 22 33 A", Hotel: "The Savoy", Country: "United Kingdom" },
      { People_id: "P002", first_name: "Amelia", family_name: "Smith", DateOfBirth: "1988-11-20", National_Insurance: "AB 44 55 66 C", Hotel: "The Savoy", Country: "United Kingdom" }
    ];

    // 2. Define Visit Data
    const visitData = [
      { VisitID: "V-101", VisitDate: "2026-03-01", Notes: "Check-in", peopleID: "P001" },
      { VisitID: "V-103", VisitDate: "2026-03-02", Notes: "Welfare check", peopleID: "P002" }
    ];

    // 3. Define Items Data
    const itemsData = [
      { ItemID: 1, ItemName: "Soap", ItemAmount: 2, VisitID: "V-101" },
      { ItemID: 2, ItemName: "Towel", ItemAmount: 1, VisitID: "V-101" }
    ];

    // 4. Package it up
    const masterData = {
      people: peopleData,
      visits: visitData,
      items: itemsData
    };

    // 5. The Return
    return new Response(JSON.stringify(masterData), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      }
    });

  } catch (error) {
    // If anything above crashes, this will show you WHY instead of giving a 1101
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
