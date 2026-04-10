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

  // GET request: Returning People Dummy Data 
  const dummyData = [
  {
    People_id: "P001",
    first_name: "Oliver",
    family_name: "Smith",
    DateOfBirth: "1985-05-12",
    Gender: "Male",
    EVisa_Ref_No: "EVI-100200301",
    ARC_no: "ARC11112222",
    National_Insurance: "QQ 11 22 33 A",
    Port_ref_no: "LHR-101",
    Country: "United Kingdom",
    Language: "English",
    Postcode: "NG1 1AA",
    Nottingham_Address: "123 Victoria St",
    Hotel: "The Savoy",
    Room_AptNo: "Room 202"
  },
  {
    People_id: "P002",
    first_name: "Amelia",
    family_name: "Smith",
    DateOfBirth: "1988-11-20",
    Gender: "Female",
    EVisa_Ref_No: "EVI-100200302",
    ARC_no: "ARC11113333",
    National_Insurance: "AB 44 55 66 C",
    Port_ref_no: "LHR-102",
    Country: "United Kingdom",
    Language: "English",
    Postcode: "NG1 1AA",
    Nottingham_Address: "123 Victoria St",
    Hotel: "The Savoy",
    Room_AptNo: "Room 202"
  },
  {
    People_id: "P003",
    first_name: "Noah",
    family_name: "Jones",
    DateOfBirth: "1992-02-15",
    Gender: "Male",
    EVisa_Ref_No: "EVI-400500601",
    ARC_no: "ARC22224444",
    National_Insurance: "TN 77 88 99 Z",
    Port_ref_no: "MAN-201",
    Country: "United Kingdom",
    Language: "Welsh",
    Postcode: "NG2 3BB",
    Nottingham_Address: "45 Station Rd",
    Hotel: "The Ritz",
    Room_AptNo: "Apt 10"
  },
  {
    People_id: "P004",
    first_name: "Isla",
    family_name: "Jones",
    DateOfBirth: "1994-07-30",
    Gender: "Female",
    EVisa_Ref_No: "EVI-400500602",
    ARC_no: "ARC22225555",
    National_Insurance: "XY 22 33 44 B",
    Port_ref_no: "MAN-202",
    Country: "United Kingdom",
    Language: "English",
    Postcode: "NG2 3BB",
    Nottingham_Address: "45 Station Rd",
    Hotel: "The Ritz",
    Room_AptNo: "Apt 10"
  },
  {
    People_id: "P005",
    first_name: "Leo",
    family_name: "Taylor",
    DateOfBirth: "1980-01-01",
    Gender: "Male",
    EVisa_Ref_No: "EVI-700800901",
    ARC_no: "ARC33336666",
    National_Insurance: "PP 55 44 33 D",
    Port_ref_no: "LGW-301",
    Country: "United Kingdom",
    Language: "English",
    Postcode: "NG7 4LL",
    Nottingham_Address: "88 Derby Rd",
    Hotel: "Hilton",
    Room_AptNo: "Room 505"
  },
  {
    People_id: "P006",
    first_name: "Ava",
    family_name: "Taylor",
    DateOfBirth: "1982-12-12",
    Gender: "Female",
    EVisa_Ref_No: "EVI-700800902",
    ARC_no: "ARC33337777",
    National_Insurance: "LM 66 77 88 E",
    Port_ref_no: "LGW-302",
    Country: "United Kingdom",
    Language: "English",
    Postcode: "NG8 5PP",
    Nottingham_Address: "12 Wollaton Rd",
    Hotel: "Ibis",
    Room_AptNo: "Room 101"
  },
  {
    People_id: "P007",
    first_name: "George",
    family_name: "Taylor",
    DateOfBirth: "2000-03-22",
    Gender: "Male",
    EVisa_Ref_No: "EVI-700800903",
    ARC_no: "ARC33338888",
    National_Insurance: "JW 12 34 56 F",
    Port_ref_no: "LGW-303",
    Country: "United Kingdom",
    Language: "English",
    Postcode: "NG1 2CC",
    Nottingham_Address: "99 Mansfield Rd",
    Hotel: "The Savoy",
    Room_AptNo: "Room 304"
  },
  {
    People_id: "P010",
    first_name: "Arthur",
    family_name: "Wilson",
    DateOfBirth: "1975-09-09",
    Gender: "Male",
    EVisa_Ref_No: "EVI-200400800",
    ARC_no: "ARC66661111",
    National_Insurance: "ZZ 11 11 11 J",
    Port_ref_no: "EDI-601",
    Country: "United Kingdom",
    Language: "English",
    Postcode: "NG5 6DD",
    Nottingham_Address: "22 Forest Rd",
    Hotel: "The Ritz",
    Room_AptNo: "Room 12"
  }
];

  const visitData = [
  {
    VisitID: "V-101",
    VisitDate: "2026-03-01",
    Notes: "Initial check-in and induction.",
    peopleID: "P001" // Oliver Smith
  },
  {
    VisitID: "V-102",
    VisitDate: "2026-03-15",
    Notes: "Follow-up regarding document verification.",
    peopleID: "P001" // Oliver Smith (Second visit)
  },
  {
    VisitID: "V-103",
    VisitDate: "2026-03-02",
    Notes: "Standard welfare check.",
    peopleID: "P002" // Amelia Smith
  },
  {
    VisitID: "V-104",
    VisitDate: "2026-03-10",
    Notes: "Requested extra bedding and towels.",
    peopleID: "P003" // Noah Jones
  },
  {
    VisitID: "V-105",
    VisitDate: "2026-03-20",
    Notes: "Room maintenance report completed.",
    peopleID: "P005" // Leo Taylor
  }
];

const itemsData = [
  // Items for Oliver's first visit (V-101)
  { ItemID: 1, ItemName: "Hand Soap", ItemAmount: 2, VisitID: "V-101" },
  { ItemID: 2, ItemName: "Bath Towel", ItemAmount: 1, VisitID: "V-101" },
  
  // Items for Oliver's second visit (V-102)
  { ItemID: 3, ItemName: "Shampoo Bottle", ItemAmount: 1, VisitID: "V-102" },

  // Items for Amelia's visit (V-103)
  { ItemID: 4, ItemName: "Hand Soap", ItemAmount: 1, VisitID: "V-103" },
  { ItemID: 5, ItemName: "Toilet Roll", ItemAmount: 4, VisitID: "V-103" },

  // Items for Noah's visit (V-104)
  { ItemID: 6, ItemName: "Pillow Case", ItemAmount: 2, VisitID: "V-104" },
  { ItemID: 7, ItemName: "Duvet Cover", ItemAmount: 1, VisitID: "V-104" },
  { ItemID: 8, ItemName: "Toothbrush", ItemAmount: 1, VisitID: "V-104" },

  // Items for Leo's visit (V-105)
  { ItemID: 9, ItemName: "Light Bulb (LED)", ItemAmount: 1, VisitID: "V-105" },
  { ItemID: 10, ItemName: "Cleaning Spray", ItemAmount: 1, VisitID: "V-105" }
];
  
const masterData = {
    people: peopleData,
    visits: visitData,
    items: itemsData
  };

  return new Response(JSON.stringify(masterData), {
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*" // Good for avoiding CORS errors during testing
    }
  });
}
