//step1: add click event handler with the submit button
document.getElementById('btn-login').addEventListener('click',function(){
    //step2:get the email address inside the email input field
    //always remember to use ".value" to get the text from a input field
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    // console.log(email);
    //step3:get the password inside the password input field
    //always remember to use ".value" to get the password from a input field
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    // console.log(password);

    //DANGER: DO NOT VERIFY email password on the client side.
    //step4: verify email and password and check whether valid or not

    if(email == "ariful.mr.islam@gmail.com" && password == 'bangladesh'){
        window.location.href = 'bank.html'
    }else{
        alert('thui password vule gesos!! Toke ami teijjo sontan gosona korlam.');
    }


})