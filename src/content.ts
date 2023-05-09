let element: any | null;
let contextOpen = false;

document.addEventListener(
  "contextmenu",
  function (event) {
    element = event.target;
  },
  true
);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command == "look_up_i18n_key") {
    console.log("ELEMENT: ", element);
    if (element.dataset.i18nKey) {
      sendResponse({ result: "success", key: element.dataset.i18nKey });
    } else {
      sendResponse({ result: "maybe", key: element.textContent });
    }
  }
  if (request.command == "menu_open") {
    contextOpen = true;
    sendResponse({ result: "success" });
  }
  if (request.command == "menu_close") {
    contextOpen = false;
    sendResponse({ result: "success" });
  }
});
