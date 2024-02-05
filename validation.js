var email=document.getElementById('email');
var valid=document.getElementById('validation');

function validate(){
    var regexp = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/
    
    if(regexp.test(email.value)){
        valid.innerText="Email is Valid";
        return true;
    }
    else{
        valid.innerText="Email is invalid";
        return false;
    }
}