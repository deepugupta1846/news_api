import fetch from "node-fetch";
import businessModel from "../models/businessNewsModel.js";
class BusinessController {
  static createDoc = async (req, res) => {
    try {
      async function getBusinesseNews() {
        const res = await fetch(
          "https://newsapi.org/v2/everything?q=business&from=2022-10-12&sortBy=publishedAt&apiKey=fd1f88a4ca6d487c94e17b405c7fe7b5"
        );
        const response = await res.json();
        console.log(response.articles[0].author);
        for (let i = 0; i < response.articles.length; i++) {
          const newsdata = new businessModel({
            author: response.articles[i].author || "",
            title: response.articles[i].title || "",
            description: response.articles[i].description || "",
            url: response.articles[i].url || "",
            urlToImage: response.articles[i].urlToImage || "",
            publishedAt: response.articles[i].publishedAt || "",
            content: response.articles[i].content || "",
          });
          newsdata.save();
        }
      }
      getBusinesseNews();
    } catch (err) {
      console.log(err);
    }
  };

  static getBusinesseNews = async (req, res) => {
    try {
      try {
        const PAGE_SIZE = 10;
        const page = parseInt(req.query.page || "0");

        const total = await businessModel.countDocuments();
        const result = await businessModel
          .find()
          .limit(PAGE_SIZE)
          .skip(PAGE_SIZE * page);
        res.send({
          articles: result,
          totalResults: Math.ceil(total / PAGE_SIZE),
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {}
  };
}

export default BusinessController;
