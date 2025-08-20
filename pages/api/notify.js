export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ message: "Notification endpoint works!" });
  } else {
    res.status(405).end();
  }
}
