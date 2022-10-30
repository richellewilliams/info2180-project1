"use strict";

window.onload = function() {
    const subscribeButton = document.querySelector("button");
    const email = document.getElementById("email");
    const message = document.querySelector(".message");
    
    subscribeButton.addEventListener("click", e => {
        e.preventDefault();
        if (email.value != "") {
            message.textContent = "Thank you! Your email address " + email.value + " has been added to our mailing list!";
        } else {
            message.textContent = "Please enter a valid email address.";
        }
    });
}