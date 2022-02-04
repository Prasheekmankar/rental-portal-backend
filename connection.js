import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const Mongo_DB = process.env.Mongo_DB;

export const createConnection = async () => {
  const client = new MongoClient(Mongo_DB);
  try {
    await client.connect();
    console.log("Mongodb Connected");
    return client;
  } catch (error) {
    console.log(error);
  }
};




