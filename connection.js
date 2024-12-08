import mongoose from "mongoose";

async function connetionMongoDb(url) {
  try {
    console.log("mongodb is successfully connected");
    return mongoose.connect(url);
  } catch (err) {
    console.log("error in connection", err);
  }
}
export default connetionMongoDb;
