let active = false;

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "look-up-i18n-key",
    title: "Look up i18n Key",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "look-up-i18n-key") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        <number>tabs[0].id,
        { command: "look_up_i18n_key" },
        function (response) {
          console.log(response);
          if (response && response.key) {
            let translationLink: string =
              "https://translations.circlesubi.id/translate/o-platform/dev/id/?offset=1&q=" +
              response.key;
            chrome.tabs.create({ url: translationLink });
          }
        }
      );
    });
  }
});
