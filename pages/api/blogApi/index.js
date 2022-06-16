import { blogData } from "../../../data";

export default function handler(req, res) {
  res.status(200).json(blogData);
}
