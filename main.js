let buttonClick = document.getElementById('clickCheck');

buttonClick.onclick = function () {
    let nameValue = document.getElementById('inputName').value;
    let name = document.getElementById('checkName');
    name.innerHTML = nameValue;

    let surnameValue = document.getElementById('inputSurname').value;
    let surname = document.getElementById('checkSurname');
    surname.innerHTML = surnameValue;

    let phoneValue = document.getElementById('inputPhone').value;
    let phone = document.getElementById('checkPhone');
    phone.innerHTML = phoneValue;

    let messageValue = document.getElementById('textareaMessage').value;
    let message = document.getElementById('checkMessage');
    message.innerHTML = messageValue;
}

let buttonUncheck = document.getElementById('clickDelete');
buttonUncheck.onclick = function () {
    document.getElementById('checkName').innerHTML = "";
    document.getElementById('checkSurname').innerHTML = "";
    document.getElementById('checkPhone').innerHTML = "";
    document.getElementById('checkMessage').innerHTML = "";
}

let buttonSend = document.getElementById('sendButton');
buttonSend.onclick = function () {
    alert('Thanks for sending!');
}
