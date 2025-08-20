import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:you@example.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

let subscriptions = []; // ⚠️ same DB issue as above

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const payload = JSON.stringify({
    title: "Hello from Vercel 🚀",
    body: "This is a test push notification",
  });

  try {
    await Promise.all(
      subscriptions.map((sub) =>
        webpush.sendNotification(sub, payload).catch((err) => console.error(err))
      )
    );
    res.status(200).json({ message: "Notifications sent!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}