let uname =document.getElementById("uname");
let error =document.getElementById("error");
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([A-za-z]{2,3})([A-za-z]{2,3})?$/
    if(regexp.test(uname.value)){
        error.innerHTML ="valid";
        error.style.color ="green";
        return true;
    }
    else{
        error.innerHTML ="invalid";
        error.style.color ="red";
        return false;
    }
}






var pass = document.getElementById("pwd1");
pass.addEventListener('keyup', function(){
    checkpassword(pass.value)
})

function checkpassword(pwd1){
    var strengthbar = document.getElementById("strength")
    var strength =0;
    if (pwd1.match(/[A-Za-z0-9]+/)){
        strength += 1
    }

    if (pwd1.match(/[!@$%^&*()/+/]/)){
        strength += 1
    }
    if (pwd1.length > 8){
        strength += 1
    }
    switch(strength)
    {
        case 0:
                strengthbar.value = 20;
                break;
        case 1:
                strengthbar.value = 40;
                break;
        case 2:
                strengthbar.value = 60;
                break;
        case 3:
                strengthbar.value = 80;
                break;
        case 4: 
                strengthbar.value=100;
                break;
        default:
                strengthbar.value = 0;
                break;
    }
}



function Validate()
        {
            
            var y=document.getElementById("phone");

           if(isNaN(y)||y.indexOf(" ")!=-1)
           {
              alert("Enter numeric value")
              return false; 
           }
           if (y.length>10)
           {
                alert("enter 10 characters");
                return false;
           }
           if (y.charAt(0)!="9")
           {
                alert("it should start with 9 ");
                return false
           }
        }
