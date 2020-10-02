var maxTry= 3;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

//empty field validation
if(username==""){alert("User Name Should not be empty");}
if(password==""){alert("Password should not be empty");}
//if name and password match
if ( username == "negative" && password == "naseeb"){
alert("login sucessfull")
window.location = "../index.html";

return false;

}
//code for try upto 3 chance then disable username and password field
else{
alert("Username or password wrong");
maxTry--;
if(maxTry== 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;}}}
