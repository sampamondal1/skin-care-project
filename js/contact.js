let nav_list =document.querySelector(".nav_list")

function display(){
    nav_list.classList.toggle('show')
}



let fname = document.getElementById('fname')
// let lname = document.getElementById('lname')
let mail = document.getElementById('mail')
let phn = document.getElementById('pho')
let pw = document.getElementById('pwd')
let cpw = document.getElementById('cpwd')




let erName = document.getElementById('errFname')
// let erLname = document.getElementById('errLname')
let erMail = document.getElementById('errMail')
let erPhn = document.getElementById('errPho')
let erPw = document.getElementById('errPwd')
let erCpw=document.getElementById('errCpwd')




const regMail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$')
const regPwd=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$')
const regPhn=RegExp('[89]{1}[0-9]{9}')

//for submission part
let no_name_err=true;
let no_phn_err=true;
let no_mail_err=true;
let no_pwd_err=true;
let no_cpwd_err=true;

fname.addEventListener('input', nameChecking)

function nameChecking() {
    let data = fname.value;
    // console.log("value in fname input: ", data);
    if (data.length < 1)
        erName.innerHTML = "*Required field"
    else if (data.length < 5)
        erName.innerHTML = "*Minimum 5 charecter"
    else if (data.length > 20)
        erName.innerHTML = "*maximum 20 charecters"
    else
        erName.innerHTML = ""

}
// lname.addEventListener('input', nameChecking)
// phn.addEventListener('input',phnchecking)

mail.addEventListener('input',mailcheckig)

function mailcheckig() {
    let data=mail.value;
    // console.log("mail: ",data);
    if(data.length<1){
        erMail.innerHTML="* Required field"
        no_mail_err= false;
    }
    
else if(!regMail.test(data)){
    erMail.innerHTML="*worng pattern"
    no_mail_err=false;
}

else{
    erMail.innerHTML="mail matched";
    erMail.style.color ="rgb(235, 250, 148)";
    erMail.style.fontstyle="italics";
    no_mail_err=true;
}

    
}

pw.addEventListener('input',pwChecking)

cpw.addEventListener('input',cpwchecking)




// function nameChecking() {
//     let data = lname.value;
//     console.log("value in lname input: ", data);
// }




function pwChecking(){
    let data=pw.value;
    // console.log("password: ",data);
    if(data.length<1){
        erPw.innerHTML="* Required field"
        no_pwd_err=false;
    }
    
else if(!regPwd.test(data)){
    erPw.innerHTML="*wrong pattern"
    no_pwd_err=false;
}

else{
    erPw.innerHTML=""
    no_pwd_err=true;
}

}

function cpwchecking(){
    let pwData=pw.value;
    let cpwData=cpw.value;
    // console.log("password:",pwData,"confirm:",cpwData);
    if(cpwData.length<1)
    {
        erCpw.innerHTML="*Required field"
        no_cpw_err=false;
    }
    else if(cpwData!==pwData)
    {
        erCpw.innerHTML="password mismatched"
        erCpw.style.color="red"
        no_cpw_err=false;
    }
    else
    {
         erCpw.innerHTML="password matched"
         erCpw.style.color="yellow"
         no_cpw_err=true;
    }
}

// function phnchecking(){
//     let

// }

//validation for submit
function validateMyForm(){
    no_name_err = true;
    no_phn_err = true;
    no_mail_err = true;
    no_pwd_err = true;
    no_cpwd_err = true;
    fullnameCheck();
    contactCheck();
    mailcheckig();
    pwdCheck();
    confirmPwdCheck();   

if(
    no_name_err === false ||
    no_phn_err === false ||
    no_mail_err === false ||
    no_pwd_err === false ||
    no_cpwd_err === false 

)
{
    alert("validation failed");
}
else{
    
}
}

