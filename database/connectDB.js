import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbname: "news-app",
    };
    mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Database connection successfully");
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
