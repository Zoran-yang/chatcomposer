
document.addEventListener('DOMContentLoaded', function() {
    var pasteButton = document.getElementById('paste-button');
    pasteButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.executeScript(tab.id, {file: 'content.js'});
      });
    });
  });