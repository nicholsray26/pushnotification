export default function Home() {
  return (
    <div>
      <h1>Hello Push Notifications 🚀</h1>
      <button onClick={() => fetch("/api/notify", { method: "POST" })}>
        Send Test Notification
      </button>
    </div>
  );
}