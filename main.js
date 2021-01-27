function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var Pnumber = document.getElementById('Pnumber').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
     
    var usercheck = /^[A-Za-z ]{3,30}$/;
    var emailcheck = /^[A-Za-z0-9]{3,}[@]{1}[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var Pnumbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if(usercheck.test(name)){
        document.getElementById('usererror').innerHTML = " ";
    }
    else{
        document.getElementById('usererror').innerHTML = "Username is Invalid";
        return false;
    }
    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = " ";
    }
    else{
        document.getElementById('emailerror').innerHTML = "Invalid Email Id";
        return false;
    }
    if(Pnumbercheck.test(Pnumber)){
        document.getElementById('Pnumbererror').innerHTML = " ";
    }
    else{
        document.getElementById('Pnumbererror').innerHTML = "Invalid Cell Phone Number";
        return false;
    }
    if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML = " ";
    }
    else{
        document.getElementById('passworderror').innerHTML = "Invalid Password";
        return false;
    }
    if((password.match(cpassword))){
        document.getElementById('cpassworderror').innerHTML = " ";
    }
    else {
        document.getElementById('cpassworderror').innerHTML = "Password did not Matched";
        return false;
    } 
}


const Reveal = document.querySelector(".reveal");
const Start = document.querySelector(".start");
const text = baffle(".left .one");
text.set({
    character: '███ >▓<█░ ░▓░░█ >▒░ ▓▒>█▒ /▒██ ░<░ ▓▓▓█ ▒>/<',
    speed:140
});
Start.addEventListener("click",e =>{
    text.start(2000);
});
/*text.start();*/
Reveal.addEventListener("click",e => {
    text.reveal(2000);
});


var a;
function show_hide(){
    if(a==1){
        document.getElementById("reveal").style.display="none";
        document.getElementById("start").style.display="block";
        return a=0;
    }
    else{
        document.getElementById("reveal").style.display="block";
        document.getElementById("start").style.display="none";
        return a=1;
    }
}









