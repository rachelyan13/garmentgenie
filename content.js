// Capture the entire HTML of the page
const pageSource = document.documentElement.outerHTML;
console.log(pageSource);
console.log("SAKDFHKAFHAKFAWEF");

// Send the page source to the background script
chrome.runtime.sendMessage({ action: "storePageSource", source: pageSource });