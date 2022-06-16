import { OurWorkData } from "../../../data";

export default function handler(req, res) {
  const { id } = req.query;
  const works = OurWorkData.find((work) => work.id === parseInt(id));
  res.status(200).json(works);
}
