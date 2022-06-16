import { servicesData } from "../../../data";

export default function handler(req, res) {
  const { id } = req.query;
  const service = servicesData.find((service) => service.id === parseInt(id));
  res.status(200).json(service);
}
