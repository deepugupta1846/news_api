import mongoose from "mongoose";

const wsjSchema = new mongoose.Schema({
  author: { type: String, required: false },
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  urlToImage: { type: String, required: true },
  publishedAt: { type: String, required: true },
  content: { type: String, required: true },
});

const wsjModel = mongoose.model("wsj", wsjSchema);

export default wsjModel;
