     var st;
  var ws = new WebSocket("ws://localhost:8081", 'echo-protocol');
 console.log("f1");

     if(!window.Kolich){
                Kolich = {};
            }

            Kolich.Selector = {};

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
                  console.log("You selected:\n"+st);
                   ws.send(st);
                   // $.post('http://mainpage.us/app/textrain/api.php?@=yourphonenumber&word='+st);
                }
            }

            $(document).ready(function(){
                $(document).bind("mouseup", Kolich.Selector.mouseup);
                  ws.send(st);
                  $.post('http://mainpage.us/app/textrain/api.php?@=yourphonenumber&word='+st);
            });

                    
      console.log("sending successful");     
  
			console.log("f2");
          $(document).bind("mouseup", function() {  
          ws.send(url);
        //   ws.send(st);
	
          });
