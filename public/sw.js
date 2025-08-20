self.addEventListener("push", function(event) {
  const data = event.data?.text() || "Default notification";
  event.waitUntil(
    self.registration.showNotification("New Notification", {
      body: data,
    })
  );
});
