import fetch from "node-fetch";
import techModel from "../models/techNewsModel.js";
class TechController {
  static createDoc = async (req, res) => {
    try {
      async function getAppleNews() {
        const res = await fetch(
          "https://newsapi.org/v2/everything?q=techcrunch&from=2022-10-12&sortBy=publishedAt&apiKey=fd1f88a4ca6d487c94e17b405c7fe7b5"
        );
        const response = await res.json();
        console.log(response.articles[0].author);
        for (let i = 0; i < response.articles.length; i++) {
          const newsdata = new techModel({
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
      getAppleNews();
    } catch (err) {
      console.log(err);
    }
  };

  static getTechNews = async (req, res) => {
    try {
      try {
        const PAGE_SIZE = 10;
        const page = parseInt(req.query.page || "0");

        const total = await techModel.countDocuments();
        const result = await techModel
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

export default TechController;
