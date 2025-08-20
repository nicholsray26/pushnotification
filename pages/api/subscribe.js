let subscriptions = []; //⚠️ Use a DB in real app (Supabase, MongoDB, etc.)

export default function handler(req, res) {
  if (req.method === "POST") {
    subscriptions.push(req.body);
    return res.status(201).json({ message: "Subscribed!" });
  }
  res.status(405).end();
}

// For production: save subscriptions in a database