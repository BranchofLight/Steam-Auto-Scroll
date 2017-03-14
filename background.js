var changeIcon = function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var url = tabs[0].url;
      if (url === "https://steamcommunity.com/chat") {
        chrome.browserAction.setIcon({path: 'icon.png'});
      } else {
        chrome.browserAction.setIcon({path: 'icon_grey.png'});
      }
  });
};

chrome.tabs.onActivated.addListener(function(activeInfo) {
  changeIcon();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  changeIcon();
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
    "code": "window.open('http://steamcommunity.com/chat','none')"
  },
  function () {
      console.log("Script Executed.");
  });
});
