const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb+srv://pulidoesr:sNfD6z8XMwac97li@cluster0.a4qzo.mongodb.net/";
  const client = new MongoClient(uri);

  try {
       await client.connect();
       await listDatabases(client);
       await createListing(client, {
        name: "Lovely Loft 2",
        summary: "A charming loft in Paris 2",
        bedrooms:1,
        bathrooms:1
       });
       await createMultipleListings(client, [
        {
          name: "Infinite View",
          summary: "Modern home with infinite views from the infinity pool",
          property_type: "House",
          bedrooms: 5,
          bathrooms: 4.5,
          beds:5
        },
        {
          name: "Private room in London",
          property_type: "Apartment",
          bedrooms: 3, 
          bathrooms: 3,
          beds:3
        },
        {
          name: "Private room in Lima",
          property_type: "Apartment",
          bedrooms: 2, 
          bathrooms: 2,
          beds:2
        }
       ])
    } catch (e) {
      console.error(e);
    } finally {
    await client.close();
    }
  }
  
  main().catch(console.error);
  
  async function createMultipleListings(client, newListings) {
      const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);
      console.log(`${result.insertedCount} new listings created with the following id(s): `);
      console.log(result.insertedIds);
  }

  async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);

  }
  async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases();
    console.log("Databases");
    databaseList.databases.forEach(db => {
      console.log(`- ${db.name}`)
    })
  }
