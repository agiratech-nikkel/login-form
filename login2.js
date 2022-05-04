window.onload = function onLoadingFirst() {
    changeTab('SignUp')
}

function changeTab(selected) {
    var x = document.getElementById("signinde");
    var y = document.getElementById("signupde");
    var a1 = document.getElementById("signinTab");
    var a2 = document.getElementById("signupTab");
    console.log(x)
    if (selected == 'SignIn') {
        x.style.display = "flex";
        y.style.display = "none";
        a1.style.borderTopColor = "#5446d0";
        a2.style.borderTopColor = "#3f41463b";
        a1.style.borderWidth = "3px"
        a2.style.borderWidth = "0.5px"
    } else if (selected == 'SignUp') {
        x.style.display = "none";
        y.style.display = "flex";
        a1.style.borderTopColor = "#3f41463b";
        a2.style.borderTopColor = "#5446d0";
        a1.style.borderWidth = "0.5px"
        a2.style.borderWidth = "3px"
    }
}

var signupform = document.forms["signupform"];

function funsignun() {
    let password1 = signupform.elements['password']
    let confirmpasswor1 = signupform.elements['confirmpassword']
    if (password1.value === confirmpasswor1.value) {
        confirmpasswor1.setCustomValidity('');
    } else {
        confirmpasswor1.setCustomValidity('Passwords do not match');
    }
}


function visibel() {

    let txt = document.getElementById('idpassword2');
    if (txt.type === "password") {
        txt.type = "text"
    } else {
        txt.type = "password"
    }
}

function visibel1() {
    let txt = document.getElementById('idpassword3');
    if (txt.type === "password") {
        txt.type = "text"
    } else {
        txt.type = "password"
    }
}

function visibel0() {
    let txt = document.getElementById('idpassword1');
    if (txt.type === "password") {
        txt.type = "text"
    } else {
        txt.type = "password"
    }
}


signupform.onsubmit = function(e) {
    var username2 = signupform.elements['username2'].value
    var emailid = signupform.elements['emailid'].value
    var phonenumber = signupform.elements['phonenumber'].value
    var password = signupform.elements['password'].value
    var confirmpasswor = signupform.elements['confirmpassword'].value
    console.log(username2)
    console.log(emailid)
    console.log(phonenumber)
    console.log(password)
    console.log(confirmpasswor)

}