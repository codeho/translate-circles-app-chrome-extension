(()=>{"use strict";chrome.runtime.onInstalled.addListener((function(){chrome.contextMenus.create({id:"look-up-i18n-key",title:"Look up i18n Key",contexts:["all"]})})),chrome.contextMenus.onClicked.addListener((function(e,t){"look-up-i18n-key"==e.menuItemId&&chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id,{command:"look_up_i18n_key"},(function(e){if(console.log(e),e&&e.key){let t="https://translations.circlesubi.id/translate/o-platform/dev/id/?offset=1&q="+e.key;chrome.tabs.create({url:t})}}))}))}))})();