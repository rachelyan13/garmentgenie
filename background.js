let storedPageSource = "";

// Store the page source from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "storePageSource") {
    storedPageSource = message.source;
    //console.log("Page source stored:", storedPageSource);
  } else if (message.action === "getPageSource") {
    sendResponse({ source: storedPageSource });
  }
  return true; // Keeps the message channel open
});

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  });
  