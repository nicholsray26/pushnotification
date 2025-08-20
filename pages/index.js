export default function Home() {
  async function sendNotification() {
    await fetch("/api/notify", { method: "POST" });
  }

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
      <h1>Push Notification Demo</h1>
      <button onClick={sendNotification}>Send Test Notification</button>
    </div>
  );
}
