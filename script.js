'use strict'

let addButton = document.querySelector("#add-button");
let toastContainer = document.querySelector("#toasts");
let clearButton = document.querySelector("#clear-button");

addButton.addEventListener("click", function () {
    //     toastContainer.innerHTML += `
    //    <div class="toast error-toast">
    //         <p class="message">Message content</p>
    //         <button class="cancel-button">X</button>
    //     </div>
    //    `

    let successCheck = document.getElementById("success");
    let cancelableCheck = document.getElementById("cancelable");
    let contentMes = document.querySelector("#message-content").value;
    let divToast = document.createElement("div");
    divToast.classList.add("toast");

    if (successCheck.checked == true) {
        divToast.classList.add("success-toast")
    } else {
        divToast.classList.add("error-toast")
    }

    let pToast = document.createElement("p");
    pToast.classList.add("message")

    if (contentMes == "" && successCheck.checked) {
        pToast.innerHTML = "Success"
    } else if (contentMes == "" && !successCheck.checked) {
        pToast.innerHTML = "Error"
    } else {
        pToast.innerHTML = contentMes
    }
    ;



    divToast.appendChild(pToast);

    if (cancelableCheck.checked == true) {
        let butToast = document.createElement("button");
        butToast.classList.add("cancel-button");
        butToast.innerHTML = "X";
        divToast.appendChild(butToast);
        butToast.addEventListener("click", function () {
            divToast.remove()
        })
    }

    toastContainer.appendChild(divToast);

    let timeToRemove = document.getElementById("duration").value;

    setInterval(deleteToast, timeToRemove)
    function deleteToast() {
        divToast.remove()
    }

})

clearButton.addEventListener("click", function () {
    toastContainer.innerHTML = "";
})