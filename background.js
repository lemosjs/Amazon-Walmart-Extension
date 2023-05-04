chrome.contextMenus.create({
    id: "redirectText",
    title: "Walmart + Amazon Checker",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var selectedText = info.selectionText;
    var walmartUrl = "https://www.walmart.com/search/?query=" + selectedText;
    var amazonUrl = "https://www.amazon.com/s?k=" + selectedText;
    chrome.tabs.create({url: walmartUrl});
    chrome.tabs.create({url: amazonUrl});
  });