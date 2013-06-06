//console.log("hello there");
/*
function getContents() {
var htstring = document.getElementById('*').contentWindow.document.body.innerHTML;
var stripped = htstring.replace(/(<([^>]+)>)/ig,""); 

document.getElementById('*').innerHTML = stripped; 

console.log(stripped);
*/
//console.log(document.getElementsByTagName("body")[0].innerHTML);
     var st;
  var ws = new WebSocket("ws://localhost:8081", 'echo-protocol');
  
/*
                                                                  $("html").mousemove(function(e){
                                                                     
                                                                           var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
                                                                     var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
                                                                       $("span:first").text("( e.pageX, e.pageY ) : " + pageCoords);
                                                                        $("span:last").text("( e.clientX, e.clientY ) : " + clientCoords);
                                                                              $("input").val(clientCoords);
                                                                                                                                                                		                                                              ws.onopen= function(e){
                                                                            	    ws.send(pageCoords);
                                                                          
                                                                            }*/
                                                                            
                             
                          //   var mytextvalue = document.getElementById("bbcode_code").innerHTML;
//console.log( == '');                                                
                                                                            //var heading = document.getElementById('.single');
                                                                            
                                                                            
                                   // var html = document.getElementsByTagName('body')[0].innerHTML;//.split("").join("");
                                    
                                    //var regex1="[\^$.|?*+()";
                                    
                                   // solution1=html.match("[\^$.|?*+()");
                                
                                    
                                    
                          // var tablink;  
                                                                        
                                                               //    var html2 = solution1.toString('utf-8');      
                                                                       //    ws.onopen= function(e){ 
                                                                            //var contents =$("html").contents();
       // var pathname = window.location.pathname; 
       var url = window.location.href;  
                              
                                        //    var html2 = solution1.toString('utf-8');      
                           //var contents =$("html").contents();
                                                                          console.log("f1");
           
// ws.send(html);
 // ws.send("herro");
     //  $("html").mousemove(function(e){
     
     
     
     
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
                   // $.post('http://mainpage.us/app/textrain/api.php?@=3055625689&word='+st);
                }
            }

            $(document).ready(function(){
                $(document).bind("mouseup", Kolich.Selector.mouseup);
                  ws.send(st);
                  $.post('http://mainpage.us/app/textrain/api.php?@=3055625689&word='+st);
            });

                    
      console.log("sending successful");     
  
			console.log("f2");
          $(document).bind("mouseup", function() {  
          ws.send(url);
        //   ws.send(st);
    
                                                            

				
          });
   

 //$("#responsecontainer").load("hello.js");
 /*
   var refreshId = setInterval(function() {
      $(document).load('http://mainpage.us/textrain/api.php?@=3055624589&word=herro');
   }, 1000);
   $.ajaxSetup({ cache: false });*/
   /*
   $.ajax({
  type: "GET",
  url: "http://mainpage.us/textrain/api.php",
  data: { @: "3055625689", word: "Boston" }
}).done(function( msg ) {
  alert( "Data Saved: " + msg );
});*/

       //   'http://mainpage.us/textrain/api.php?@=3055624589&word=herro'                                                               
                                                                            	          
                                                                     //       });   


//console.log(contents);