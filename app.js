import express from "express";
import WsjController from "./controller/wsjController.js";
import AppleController from "./controller/appleController.js";
import TeslaController from "./controller/teslaController.js";
import connectDB from "./database/connectDB.js";
import routes from "./routers/routers.js";
import cors from "cors";
import BusinessController from "./controller/businessController.js";
import EducationController from "./controller/educationController.js";
import SportsController from "./controller/sportsController.js";
import ScienceController from "./controller/scienceController.js";
import TechController from "./controller/techController.js";
const app = express();
app.use(cors());
connectDB(
  "mongodb+srv://deepukumar:deepukumar@cluster0.b2fz1fm.mongodb.net/userdata?retryWrites=true&w=majority"
);

// WsjController.createDoc();
// AppleController.createDoc();
// TeslaController.createDoc();
// BusinessController.createDoc();
// EducationController.createDoc();
// SportsController.createDoc();
// ScienceController.createDoc();
// TechController.createDoc();
app.use("/news-api", routes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server is runing......");
});
