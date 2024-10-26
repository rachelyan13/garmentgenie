let storedPageSource = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openPopup") {
    console.log("background.js listener received popup message");
    chrome.action.openPopup();
  }
});

// Store the page source from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "storePageSource") {
    storedPageSource = message.source;
  } 
  else if (message.action === "getPageSource") {
    sendResponse({ source: storedPageSource });
  }
});


chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  });