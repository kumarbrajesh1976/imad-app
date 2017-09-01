//Submit name
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //action
            if (request.status === 200){
              console.log('User logged in');
              alert('logged in successfully');
        } else {
            if (request.status===403){
                alert('Username or password is incorrect');
            } else { 
                if  (request.status === 500) {
                alert('Something went wrong on the server');
                }
            }
        }
        //not done
    }
    
};
 //make the request
 var username=document.getElementById('username').value;
 var password=document.getElementById('password').value;
 console.log(username);
 console.log(password);
 request.open('POST','http://kumarbrajesh1976.imad.hasura-app.io/login',true);
 request.setRequestHeader('Cotent-Type','application/json');
 request.send(JSON.stringify({username: username, password: password}));
 
};


