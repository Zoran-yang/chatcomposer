
// import {chrome} from 'chrome-extension-async';
// import { chrome } from '@types/chrome'
/*global chrome*/
/*global pastePromptInTextarea*/


 function submitPromptToOpenai(prompt) {
  window.close();
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.update(tabs[0].id, {active: true});
    chrome.scripting.executeScript({ target: { tabId: tab.id}, files:['./content.js']}, ()=> {
      chrome.scripting.executeScript({ target: { tabId: tab.id}, args:[prompt], func: (...args)=> {setTimeout(()=>pastePromptInTextarea(...args), 500)}});
    })
  });
};


//In order to use the chrome API in JavaScript, you need to be running your code as 
//a Chrome extension or a Chrome app.

//In an extension, you can access the chrome API directly from your content script or 
//background page. For example, you can access the chrome.tabs API to interact with tabs 
//in the current window, or the chrome.runtime API to send messages between your content 
//script and background page.

export {submitPromptToOpenai}