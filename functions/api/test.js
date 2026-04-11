export async function onRequest(context) {
  const { env } = context;
  const db = env["d1-test1"];

  // Default empty structure so the frontend doesn't crash
  let responseData = { people: [], visits: [], items: [] };

  try {
    // 1. Check if the People table exists and has data
    const tableCheck = await db.prepare("SELECT COUNT(*) as count FROM People").first();
    
    if (!tableCheck || tableCheck.count === 0) {
      // 2. REPAIR/SEED: Populate lookup tables FIRST to avoid Foreign Key errors
      await db.batch([
        db.prepare("INSERT OR IGNORE INTO Country (countryName) VALUES ('United Kingdom'), ('France'), ('Germany'), ('Nigeria'), ('India')"),
        db.prepare("INSERT OR IGNORE INTO Language (languageName) VALUES ('English'), ('French'), ('German'), ('Yoruba'), ('Hindi')"),
        db.prepare("INSERT OR IGNORE INTO Hotel (HotelName) VALUES ('The Savoy'), ('The Ritz'), ('Hilton'), ('Ibis'), ('Marriott')"),
        
        // 3. Insert People (15 records)
        db.prepare(`INSERT OR IGNORE INTO People (People_id, first_name, family_name, DateOfBirth, Gender, National_Insurance, Country, Language, Hotel, Postcode, Nottingham_Address) VALUES 
          ('P001', 'Oliver', 'Smith', '1985-05-12', 'Male', 'QQ112233A', 'United Kingdom', 'English', 'Hotel 1', 'NG1 1AA', '123 Victoria St'),
          ('P002', 'Amelia', 'Smith', '1988-11-20', 'Female', 'AB445566C', 'United Kingdom', 'English', 'Hotel 1', 'NG1 1AA', '123 Victoria St'),
          ('P003', 'Noah', 'Jones', '1992-02-15', 'Male', 'TN778899Z', 'United Kingdom', 'English', 'Hotel 1', 'NG2 3BB', '45 Station Rd'),
          ('P004', 'Isla', 'Jones', '1994-07-30', 'Female', 'XY223344B', 'United Kingdom', 'English', 'Hotel 1', 'NG2 3BB', '45 Station Rd'),
          ('P015', 'Ella', 'Robinson', '1998-09-09', 'Female', 'ER001122N', 'India', 'Hindi', 'Hotel 1', 'NG1 9HH', '42 Bridlesmith Gate'),
          ('P005', 'Leo', 'Taylor', '1980-01-01', 'Male', 'PP554433D', 'United Kingdom', 'English', 'Hotel 1', 'NG7 4LL', '88 Derby Rd'),
          ('P006', 'Ava', 'Taylor', '1982-12-12', 'Female', 'LM667788E', 'United Kingdom', 'English', 'Hotel 1', 'NG8 5PP', '12 Wollaton Rd'),
          ('P007', 'George', 'Taylor', '2000-03-22', 'Male', 'JW123456F', 'United Kingdom', 'English', 'Hotel 1', 'NG1 2CC', '99 Mansfield Rd'),
          ('P008', 'Harry', 'Brown', '1995-05-05', 'Male', 'HB998877G', 'United Kingdom', 'English', 'Hotel 1', 'NG3 5GG', '10 Park Row'),
          ('P009', 'Mia', 'Wilson', '1991-08-12', 'Female', 'MW112244H', 'United Kingdom', 'English', 'Hotel 1', 'NG1 5QQ', '22 Forest Rd'),
          ('P010', 'Arthur', 'Evans', '1970-10-10', 'Male', 'AE556677I', 'United Kingdom', 'English', 'Hotel 1', 'NG1 1HH', '55 Upper Parliament St'),
          ('P011', 'Sophia', 'Thomas', '1989-04-04', 'Female', 'ST882211J', 'France', 'French', 'Hotel 1', 'NG9 2DD', '77 Beeston Lane'),
          ('P012', 'Jack', 'Roberts', '1993-02-02', 'Male', 'JR334455K', 'Germany', 'German', 'Hotel 1', 'NG1 6EE', '14 Canal St'),
          ('P013', 'Grace', 'Walker', '1996-06-06', 'Female', 'GW778899L', 'United Kingdom', 'English', 'Hotel 1', 'NG1 7FF', '33 Fletcher Gate'),
          ('P014', 'Freddie', 'Wright', '1984-03-03', 'Male', 'FW121212M', 'Nigeria', 'Yoruba', 'Hotel 1', 'NG1 8GG', '9 Low Pavement')`),
        
        // 4. Insert Visits & Items
        db.prepare("INSERT OR IGNORE INTO Visit (VisitID, VisitDate, Notes, peopleID) VALUES ('V-101', '2026-04-01', 'Induction', 'P001')"),
        db.prepare("INSERT OR IGNORE INTO ItemTaken (ItemName, ItemAmount, VisitID) VALUES ('Soap', 2, 'V-101')")
      ]);
    }

    // 5. Fetch actual data
    const people = await db.prepare("SELECT * FROM People").all();
    const visits = await db.prepare("SELECT * FROM Visit").all();
    const items = await db.prepare("SELECT * FROM ItemTaken").all();

    responseData = {
      people: people.results || [],
      visits: visits.results || [],
      items: items.results || []
    };

  } catch (error) {
    // If SQL fails, we still return the empty structure + the error message
    console.error(error);
    return new Response(JSON.stringify({ 
      ...responseData, 
      error: error.message,
      hint: "Check if you have run the DROP/CREATE table scripts in the D1 console."
    }), {
      status: 200, // Keep 200 so the frontend doesn't throw a network error
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response(JSON.stringify(responseData), {
    headers: { "Content-Type": "application/json" }
  });
}
