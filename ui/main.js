//Submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
button.onclick=function(){
    //create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if (request.readyState == XMLHttpRequest.DONE){
            //action
            if (request.status==200){
               var names = request.responseText;
               names = JSON.parse(names);
    var list='';
    for (var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
        }
        //not done
    }
    
};
 //make the request
 request.open('GET','http://kumarbrajesh1976.imad.hasura-app.io/submit-name?name='+name,true);
 request.send(null);
 
};


