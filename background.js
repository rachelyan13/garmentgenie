let thredUrl = "";

console.log("Background service worker is running.");


// Listens for a notification click & opens the thredUp page if so
chrome.notifications.onClicked.addListener((notificationId) => {
  console.log("Notification clicked:", notificationId);

  chrome.storage.local.get("notificationId", (data) => {
    if (data.notificationId === notificationId) {
      console.log("TAB URL: " + thredUrl);
      chrome.tabs.create({ url: thredUrl }, (tab) => {
        if (chrome.runtime.lastError) {
          console.error("Error creating tab:", chrome.runtime.lastError.message);
        }
      });
      chrome.notifications.clear(notificationId);
    }
  });
});


// Listens for the setUrl message from content.js & sets the thredUrl of background.js to the passed-in thredUp URL.
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "setUrl") {
    thredUrl = message.data.url;
    console.log("url in listener: " + thredUrl);
  }
});


// Listens for the createNotification message from content.js & creates a notification.
chrome.runtime.onMessage.addListener((message) => {
  if (message.action == "createNotification") {
    console.log("notification being created");
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Product Recommendation Available",
      message: "Click here to see similar items on thredUp!",
      priority: 2,
      requireInteraction: true,
    }, (notificationId) => {
      chrome.storage.local.set({ "notificationId": notificationId });
    });
  }
  return true;
});