export default function handler(req, res) {
  if (req.method === "GET") {
    res
      .status(200)
      .json({ status: "Healthy", message: "API is up and running!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
