import express from "express";
import AppleController from "../controller/appleController.js";
import BusinessController from "../controller/businessController.js";
import EducationController from "../controller/educationController.js";
import ScienceController from "../controller/scienceController.js";
import SportsController from "../controller/sportsController.js";
import TechController from "../controller/techController.js";
import TeslaController from "../controller/teslaController.js";
import WsjController from "../controller/wsjController.js";
const routes = express();

routes.get("/wsg-news/", WsjController.getWsjNews);
routes.get("/apple/", AppleController.getAppleNews);
routes.get("/tesla/", TeslaController.getTeslaNews);
routes.get("/science/", ScienceController.getScienceNews);
routes.get("/tech/", TechController.getTechNews);
routes.get("/sports/", SportsController.getSportsNews);
routes.get("/education/", EducationController.getEducationNews);
routes.get("/business/", BusinessController.getBusinesseNews);

export default routes;
