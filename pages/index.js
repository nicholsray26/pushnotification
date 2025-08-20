import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(() => {
        console.log("✅ Service Worker registered");
      });
    }
  }, []);

  async function sendTestNotification() {
    const res = await fetch("/api/notify", { method: "POST" });
    const data = await res.json();
    console.log(data);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Push Notification Demo 🚀</h1>
      <p>If you allowed notifications, click below to test.</p>
      <button
        onClick={sendTestNotification}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Send Test Notification
      </button>
    </div>
  );
}