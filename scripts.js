"use strict";

window.onload = function() {
    const email = document.getElementById("email");
    const form = document.querySelector("form");
    const message = document.querySelector(".message");
    
    function emailInputCheck() {
        if (email.value != "") {
            message.textContent = "Thank you! Your email address " + email.value + " has been added to our mailing list!";
        } else {
            message.textContent = "Please enter a valid email address.";
        }
    }
    
    form.addEventListener('submit',emailInputCheck);
}