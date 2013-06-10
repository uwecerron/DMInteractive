// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
       var url = window.location.href;
        var st; 
function onClickHandler(info, tab) {
  if (info.menuItemId == "radio1" || info.menuItemId == "radio2") {
    console.log("radio item " + info.menuItemId +
                " was clicked (previous checked state was "  +
                info.wasChecked + ")");
  } else if (info.menuItemId == "checkbox1" || info.menuItemId == "checkbox2") {
    console.log(JSON.stringify(info));
    console.log("checkbox item " + info.menuItemId +
                " was clicked, state is now: " + info.checked +
                " (previous state was " + info.wasChecked + ")");

  } else {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
  }
};
  var ws = new WebSocket("ws://localhost:8081", 'echo-protocol');
chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var contexts = ["page","selection","link","editable","image","video",
                  "audio"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Test '" + context + "' menu item";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
    console.log("'" + context + "' item:" + id);
    /*
ws.onopen= function(e){
    ws.send("it clicked");*/
    //begin selection and send to server
    
    
        
if(!window.Kolich){
                Kolich = {};
            }

            Kolich.Selector = {};
            // getSelected() was borrowed from CodeToad at
            // http://www.codetoad.com/javascript_get_selected_text.asp
            Kolich.Selector.getSelected = function(){
                var t = '';
                if(window.getSelection){
                    t = window.getSelection();
                }else if(document.getSelection){
                    t = document.getSelection();
                }else if(document.selection){
                    t = document.selection.createRange().text;
                }
                return t;
            }

            Kolich.Selector.mouseup = function(){
             st = Kolich.Selector.getSelected();
                if(st!=''){
                   
                      console.log("herrrrrroo");
                      console.log("You selected:\n"+st);
                 
                   
                }
            }

            $(document).ready(function(){
                $(document).bind("mouseup", Kolich.Selector.mouseup);
            });
                    
      console.log("sending successful");     
        //  ws.onopen= function(e){ 
                ws.send("You selected:\n"+st);
          ws.send(url);
        //  }

      
			console.log("f2");
    
    
    
    
    
    }
 console.log("About to try creating an invalid item - an error about " +
      "duplicate item child1 should show up");
  chrome.contextMenus.create({"title": "Oops", "id": "child1"}, function() {
    if (chrome.extension.lastError) {
      console.log("Got expected error: " + chrome.extension.lastError.message);
    }
  });
});
