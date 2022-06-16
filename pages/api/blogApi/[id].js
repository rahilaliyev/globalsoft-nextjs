import { blogData } from "../../../data";

export default function handler(req, res) {
  const { id } = req.query;
  const blogs = blogData.find((blog) => blog.id === parseInt(id));
  res.status(200).json(blogs);
}
