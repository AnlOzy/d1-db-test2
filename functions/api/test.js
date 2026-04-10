/*
export async function onRequest(context) {
  const { env } = context;
  const db = env["d1-test1"];

  try {
    // 1. Check if we already have data
    const countResult = await db.prepare("SELECT COUNT(*) as count FROM People").first();
    // 2. If the database is empty, seed it automatically
    if (countResult.count === 0) {
      console.log("Database empty. Auto-seeding 15 records...");
      
      await db.batch([
        // SEED BASE TABLES
        db.prepare("INSERT OR IGNORE INTO Country (countryName) VALUES ('United Kingdom'), ('France'), ('Germany'), ('Nigeria'), ('India')"),
        db.prepare("INSERT OR IGNORE INTO Language (languageName) VALUES ('English'), ('Welsh'), ('French'), ('Yoruba'), ('Hindi')"),
        db.prepare("INSERT OR IGNORE INTO Hotel (HotelName) VALUES ('The Savoy'), ('The Ritz'), ('Hilton'), ('Ibis'), ('Marriott')"),

        // SEED 15 PEOPLE (Couples & Families included)
        db.prepare(`INSERT INTO People (People_id, first_name, family_name, DateOfBirth, Gender, National_Insurance, Country, Language, Hotel, Postcode, Nottingham_Address) VALUES 
          ('P001', 'Oliver', 'Smith', '1985-05-12', 'Male', 'QQ112233A', 'United Kingdom', 'English', 'The Savoy', 'NG1 1AA', '123 Victoria St'),
          ('P002', 'Amelia', 'Smith', '1988-11-20', 'Female', 'AB445566C', 'United Kingdom', 'English', 'The Savoy', 'NG1 1AA', '123 Victoria St'),
          ('P003', 'Noah', 'Jones', '1992-02-15', 'Male', 'TN778899Z', 'United Kingdom', 'Welsh', 'The Ritz', 'NG2 3BB', '45 Station Rd'),
          ('P004', 'Isla', 'Jones', '1994-07-30', 'Female', 'XY223344B', 'United Kingdom', 'English', 'The Ritz', 'NG2 3BB', '45 Station Rd'),
          ('P005', 'Leo', 'Taylor', '1980-01-01', 'Male', 'PP554433D', 'United Kingdom', 'English', 'Hilton', 'NG7 4LL', '88 Derby Rd'),
          ('P006', 'Ava', 'Taylor', '1982-12-12', 'Female', 'LM667788E', 'United Kingdom', 'English', 'Ibis', 'NG8 5PP', '12 Wollaton Rd'),
          ('P007', 'George', 'Taylor', '2000-03-22', 'Male', 'JW123456F', 'United Kingdom', 'English', 'The Savoy', 'NG1 2CC', '99 Mansfield Rd'),
          ('P008', 'Harry', 'Brown', '1995-05-05', 'Male', 'HB998877G', 'United Kingdom', 'English', 'Marriott', 'NG3 5GG', '10 Park Row'),
          ('P009', 'Mia', 'Wilson', '1991-08-12', 'Female', 'MW112244H', 'United Kingdom', 'English', 'The Ritz', 'NG1 5QQ', '22 Forest Rd'),
          ('P010', 'Arthur', 'Evans', '1970-10-10', 'Male', 'AE556677I', 'United Kingdom', 'English', 'Hilton', 'NG1 1HH', '55 Upper Parliament St'),
          ('P011', 'Sophia', 'Thomas', '1989-04-04', 'Female', 'ST882211J', 'France', 'French', 'Ibis', 'NG9 2DD', '77 Beeston Lane'),
          ('P012', 'Jack', 'Roberts', '1993-02-02', 'Male', 'JR334455K', 'Germany', 'German', 'The Savoy', 'NG1 6EE', '14 Canal St'),
          ('P013', 'Grace', 'Walker', '1996-06-06', 'Female', 'GW778899L', 'United Kingdom', 'English', 'Marriott', 'NG1 7FF', '33 Fletcher Gate'),
          ('P014', 'Freddie', 'Wright', '1984-03-03', 'Male', 'FW121212M', 'Nigeria', 'Yoruba', 'Hilton', 'NG1 8GG', '9 Low Pavement'),
          ('P015', 'Ella', 'Robinson', '1998-09-09', 'Female', 'ER001122N', 'India', 'Hindi', 'The Ritz', 'NG1 9HH', '42 Bridlesmith Gate')`),

        // SEED VISITS
        db.prepare("INSERT INTO Visit (VisitID, VisitDate, Notes, peopleID) VALUES ('V-101', '2026-04-01', 'Initial Check-in', 'P001'), ('V-102', '2026-04-02', 'Welfare Call', 'P003')"),

        // SEED ITEMS
        db.prepare("INSERT INTO ItemTaken (ItemName, ItemAmount, VisitID) VALUES ('Soap', 2, 'V-101'), ('Towel', 1, 'V-101')")
      ]);
    }

    // 3. Fetch all data to return to the website
    const people = await db.prepare("SELECT * FROM People").all();
    const visits = await db.prepare("SELECT * FROM Visit").all();
    const items = await db.prepare("SELECT * FROM ItemTaken").all();

    return new Response(JSON.stringify({
      people: people.results || [],
      visits: visits.results || [],
      items: items.results || []
    }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
*/
