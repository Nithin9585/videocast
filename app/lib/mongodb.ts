// import { MongoClient } from 'mongodb';  // Commented out MongoDB import

// Removed global MongoClient declaration
// declare global {
//   // eslint-disable-next-line no-var, vars-on-top, no-unused-vars
//   var _mongoClientPromise: Promise<MongoClient>;
// }

// const uri = process.env.MONGODB_URI;  // Removed URI
// const options = {};  // Removed options

// let client;
// let clientPromise: Promise<MongoClient>;  // Removed MongoClient promise

// Removed MongoDB connection logic
// if (!uri) {
//   throw new Error('Please add your Mongo URI to .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// Dummy clientPromise that resolves to null
const clientPromise: Promise<null> = Promise.resolve(null);

export default clientPromise;
