document.addEventListener("mouseup", function(event){
    var selectedText = window.getSelection().toString().trim();
    if (selectedText !== "") {
      var range = window.getSelection().getRangeAt(0);
      var rect = range.getBoundingClientRect();
      var message = {type: "showIcon", text: selectedText, x: rect.x, y: rect.y};
      chrome.runtime.sendMessage(message);
    }
  });