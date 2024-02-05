var email=document.getElementById('email');
var valid=document.getElementById('validation');
var phone=document.getElementById('phone');
var phnvald=document.getElementById('phonevld');
var pwd=document.getElementById("password");
var pwdvld=document.getElementById('pwdvld');

function validate(){
    var regexp = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/;
    
    if(regexp.test(email.value)){
        valid.innerText="Email is Valid";
        return true;
    }
    else{
        valid.innerText="Email is invalid";
        return false;
    }
    
}

function phonevalidate(){
    var  regephone= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regephone.test(phone.value)){
        phnvald.innerText="";
        return true;
    }
    else{
        phnvald.innerText="Enter a valid Phonenumber";
        return false;
    }

}

function pwdvalidate(){
    var regepwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(regepwd.test(pwd.value)){
        pwdvld.innerText="";
        return true;
    }
    else{
        pwdvld.innerText=" Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number ";
        return false;
    }
}