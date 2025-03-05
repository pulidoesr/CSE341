const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb+srv://pulidoesr:sNfD6z8XMwac97li@cluster0.a4qzo.mongodb.net/";
  const client = new MongoClient(uri);

  try {
       await client.connect();
       await listDatabases(client);
       await findOneListingByName(client, "Infinite View");
       
    } catch (e) {
      console.error(e);
    } finally {
     await client.close();
    }
  }
  
  main().catch(console.error);
  
  async function findOneListingByName(client, nameOfListing) {
       const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name: nameOfListing});
       if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}'`)
        console.log(result);
       } else {
         console.log(`No listings found with the name '${nameOfListing}' `)
       }
  };

  async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases();
    console.log("Databases");
    databaseList.databases.forEach(db => {
      console.log(`- ${db.name}`)
    })
  }
