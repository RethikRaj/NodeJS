const {MongoClient} = require("mongodb");

// Connection URL
const url = "mongodb+srv://RethikRajRR:gBMC9yeD6WN5Mghq@nodejs.j12uf.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "MyFirstDataBase";

async function main(){
    // Connecting to the server
    await client.connect();
    console.log("Connected to the server successfully");
    const db = client.db(dbName);
    const collection = db.collection("Users");

    // CRUD :

    // Insert

    // InsertOne
    // const insertResult = await collection.insertOne({"firstName": "Rethik","lastName":"Raj","Location":"India"});
    // console.log(insertResult);

    // InsertMany
    // const users = [{"firstName": "Dhoni","Location":"India"},{"firstName": "Virat","lastName":"Kohli","Location":"India"},{"firstName": "Chris","lastName":"Gayle","Location":"WestIndies"}]
    // const insertManyResult = await collection.insertMany(users);
    // console.log(insertManyResult);

    // Read 
    // select all documents
    const findResult = await collection.find({}).toArray();
    console.log(findResult);

    // select based on some filter
    const findUsersInIndia = await collection.find({"Location" : "India"}).toArray();
    console.log(findUsersInIndia);
    
    // Update
    // const updateResult = await collection.updateOne({"firstName":"Rethik"},{$set:{"Location":"South Korea"}});
    // console.log(updateResult);

    // Delete 
    const deleteResult = await collection.deleteOne({"Location" : "India"});
    console.log(deleteResult);


    
    return "done.";    
}


main()
    .then((data)=>{return console.log(data)})
    .catch((err)=>{console.log(err.message)})
    .finally(()=>client.close());
