//Obtenemos las constantes que necesitamos del formulario
const form = document.querySelector("#formAct05");

const nameForm = document.querySelector("#nameUser");
const emailForm = document.querySelector("#email");
const phoneForm = document.querySelector("#phone");
const passwordForm = document.querySelector("#password");
const passwordValidateForm = document.querySelector("#passwordValidate");
const dateForm = document.querySelector("#date");
const softwareForm = document.querySelector("#software");
const newSoftwareForm = document.querySelector("#newSoftware");
const musicForm = document.getElementsByName("music");
const musicFormDiv = document.querySelector("#checkboxDiv");
const newMusicForm = document.querySelector("#newMusic");
const checkAreaForm = document.querySelector("#checkArea");
const sendButtonForm = document.querySelector("#sendButton");


/** Validación de nombre*/
const validateName = () => {
    /**En todas las funciones he usado una variable validation, que devuelve 
     * true(si el input es correcto) o false (si el input es incorrecto)
     * Para más adelante, al hacer submit, se compruebe si todos son true 
     * para enviar el formulario */
    let validation = false;
    nameForm.setCustomValidity('');
    nameForm.nextElementSibling.innerHTML= '';
    if(nameForm.validity.valueMissing){
        nameForm.setCustomValidity("Name field can't be empty");
        nameForm.nextElementSibling.innerHTML= "Name field can't be empty";
    } else if (nameForm.validity.tooShort){
        nameForm.setCustomValidity('At least 3 letters');
        nameForm.nextElementSibling.innerHTML= 'At least 3 letters';
    } else if (!isNameValid(nameForm.value)){
        nameForm.setCustomValidity('You need 3-10 character, only letter');
        nameForm.nextElementSibling.innerHTML= 'Only letters allowed';
    } else if(nameForm.reportValidity()){
        nameForm.nextElementSibling.innerHTML = '✓';
        // nameForm.nextElementSibling.setAttribute("class", "successSpanMessage");
        validation = true;
    } else {
        nameForm.setCustomValidity('Invalid name field');
        nameForm.nextElementSibling.innerHTML='Invalid name field';
    }

    /**Función para asignar estilos css a los mensajes añadidos en la función */
    setAttributeSpanMessage(validation, nameForm);

    return validation;
}

const isNameValid = (name) => {
    //Comprobamos que disponga de 4 a 10 caracteres alfanumericos
    const pattern = new RegExp("^[A-z]{3,10}$");
    return pattern.test(name);
};


/** Validación de email*/
const validateEmail = () => {
    let validation = false;
    emailForm.setCustomValidity('');
    emailForm.nextElementSibling.innerHTML= '';

    if(emailForm.validity.valueMissing){
        emailForm.setCustomValidity("Email field can't be empty");
        emailForm.nextElementSibling.innerHTML= "Email field can't be empty";
    } else if (!isEmailValid(emailForm.value)){
        emailForm.setCustomValidity('mail@mail.com (Format example)');
        emailForm.nextElementSibling.innerHTML= 'Invalid email format'; 
    } else if(emailForm.reportValidity()){
        emailForm.nextElementSibling.innerHTML = '✓'; 
        validation = true;
    } else {
        emailForm.setCustomValidity('Invalid email field');
        emailForm.nextElementSibling.innerHTML='Invalid email field'; 
    }

    setAttributeSpanMessage(validation, emailForm);  

    return validation;
}

const isEmailValid = (email) => {
    // Expresión regular para validar el email
    const pattern = new RegExp (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return pattern.test(email);
};


/** Validación de teléfono*/
const validatePhone = () => {
    let validation = false;
    
    phoneForm.setCustomValidity('');
    phoneForm.nextElementSibling.innerHTML= '';

    if(phoneForm.validity.valueMissing){
        phoneForm.setCustomValidity("Phone field can't be empty");
        phoneForm.nextElementSibling.innerHTML= "Phone field can't be empty"; 
    } else if (phoneForm.validity.tooShort){
        phoneForm.setCustomValidity('9 digit numbers needed');
        phoneForm.nextElementSibling.innerHTML= '9 digit numbers needed'; 
    } else if (phoneForm.validity.typeMismatch){
        phoneForm.setCustomValidity('You need 9 digit numbers');
        phoneForm.nextElementSibling.innerHTML= 'Only digit numbers allowed'; 
    } else if (phoneForm.reportValidity()){
        phoneForm.nextElementSibling.innerHTML = '✓';
        validation = true;
        
    } else {
        phoneForm.setCustomValidity('Invalid phone field');
        phoneForm.nextElementSibling.innerHTML='Invalid phone field'; 
    }

    setAttributeSpanMessage(validation, phoneForm); 

    return validation;
}


/**Validación de password */
const validatePassword = () => {
    let validation = false;

    passwordForm.setCustomValidity('');
    passwordForm.nextElementSibling.innerHTML= '';

    if (passwordForm.validity.valueMissing){
        passwordForm.setCustomValidity("Password field can't be empty");
        passwordForm.nextElementSibling.innerHTML= "Password field can't be empty";

    } else if (passwordForm.tooShort){
        passwordForm.setCustomValidity('At least 4 characters');
        passwordForm.nextElementSibling.innerHTML= 'At least 4 characters';

    } else if (!isPasswordValid(passwordForm.value)){
        passwordForm.setCustomValidity('Password between 4 and 10 characters');
        passwordForm.nextElementSibling.innerHTML= 'Invalid password format';

    } else if (passwordForm.reportValidity()){
        passwordForm.nextElementSibling.innerHTML = '✓';
        validation = true;
    } else {
        passwordForm.setCustomValidity('Invalid password field');
        passwordForm.nextElementSibling.innerHTML='Invalid password field';
    }

    setAttributeSpanMessage(validation, passwordForm);

    return validation;
}

const isPasswordValid = (password) => {
    //Comprobamos que disponga de 4 a 10 caracteres alfanumericos
    const pattern = new RegExp(/^[A-z0-9]{4,10}$/);
    return pattern.test(password);
};


/**Comprobación de password */
const validatePassword2 = () => {
    let validation = false;

    passwordValidateForm.setCustomValidity('');
    passwordValidateForm.nextElementSibling.innerHTML= '';

    if (passwordValidateForm.validity.valueMissing){
        passwordValidateForm.setCustomValidity("Password field can't be empty");
        passwordValidateForm.nextElementSibling.innerHTML= "Password field can't be empty";
    } else if (passwordForm.tooShort){
        passwordForm.setCustomValidity('At least 4 characters');
        passwordForm.nextElementSibling.innerHTML= 'At least 4 characters';s
    } else if (passwordValidateForm.value === passwordForm.value){
        passwordValidateForm.nextElementSibling.innerHTML = '✓';
        validation = true;
    } else {
        passwordValidateForm.setCustomValidity("Passwords don't match");
        passwordValidateForm.nextElementSibling.innerHTML="Passwords don't match";
    }

    setAttributeSpanMessage(validation, passwordValidateForm);

    return validation;
}


/**Validacion de fecha */
const validateDate = () => {
    let validation = false;

    dateForm.setCustomValidity('');
    dateForm.nextElementSibling.innerHTML= '';

    if (dateForm.validity.valueMissing){
        dateForm.setCustomValidity("Date field can't be empty");
        dateForm.nextElementSibling.innerHTML= "Date field can't be empty";
    } else if (isDateValid(dateForm.value)){
        dateForm.nextElementSibling.innerHTML = '✓';
        validation = true;
    } else {
        dateForm.setCustomValidity("Invalid date");
        dateForm.nextElementSibling.innerHTML="Invalid date";
    }

    setAttributeSpanMessage(validation, dateForm);
    
    return validation;
}

const isDateValid = (date) => {
    let dateInput = date;
    const dateData = new Date(dateInput);
    const today = new Date();

    return dateData < today;
}


/**Validación de software */
const validateSoftware = () => {
    let validation = false;
    var count = 0;
    //Comprobamos si se han seleccionado al menos 2 campos
    for (let i = 0; i<softwareForm.length; i++){
        if (softwareForm[i].selected){
        count += 1;
        }
    }
    if ( count >= 2) {
        checkAreaForm.innerHTML = '';
        validation = true;
        
    } else {
        checkText('At least 2 software names need to be selected.\n', checkAreaForm);
    }
    return validation;
}


/**Validación de music */
const validateMusic = () => {
    let validation = false;
    let count = 0;
    //Comprobamos si se han checkeado al menos 2 campos
    for (let i = 0; i<musicForm.length; i++){
        if (musicForm[i].checked){
        count ++;
        }
    };
    if (count >= 2) {
        validation = true;
        checkAreaForm.innerHTML = '';
    } else {
        checkText('At least 2 music genres need to be selected.\n', checkAreaForm);
    }
    return validation;
}

//Función para añadir el mensaje de aviso de musica y software sólo una vez
const checkText = (txt, location) => {
    locationValue = location.value;
    found = locationValue.search(txt);
    if (found == -1){
        location.innerHTML += txt;
    }
}

/**Añadir nuevo software */
const addNewSoftware = () => {
    let addSoftware = prompt("Write the new software you'd like to add")

    let newCheckbox = document.createElement("option");
    newCheckbox.setAttribute("value", addSoftware);
    newCheckbox.textContent = addSoftware;

    softwareForm.appendChild(newCheckbox);
}


/**Añadir nuevo genero musical */
const addNewMusic = () => {
    let addMusicGenre = prompt("Write the new music genre you'd like to add");

    let newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("name", "music");
    newCheckbox.setAttribute("id", addMusicGenre);
    newCheckbox.setAttribute("value", addMusicGenre);

    console.log(addMusicGenre)

    let newMusicGenre = document.createElement("span");
    newMusicGenre.innerHTML = addMusicGenre;

    musicFormDiv.appendChild(newCheckbox);
    musicFormDiv.appendChild(newMusicGenre);
}


/** Asignar estilos al mensaje generado */
const setAttributeSpanMessage = (validation, elem) =>{
    if (validation){
        elem.nextElementSibling.setAttribute("class", "successSpanMessage");
    } else {
        elem.nextElementSibling.setAttribute("class", "errorSpanMessage");
    }
}

/**Validar el formulario */
const validateForm = () => {
    return (validateName && validateEmail && validatePhone && validatePassword && 
        validatePassword2 && validateMusic && validateSoftware);
}


/**Añadimos los event listener */
//Cada vez que se modifique el input
nameForm.addEventListener( "input", validateName);
emailForm.addEventListener( "input", validateEmail);
phoneForm.addEventListener( "input", validatePhone);
passwordForm.addEventListener( "input", validatePassword);
dateForm.addEventListener( "input", validateDate);

//Al perder el foco
passwordValidateForm.addEventListener( "blur", validatePassword2);
softwareForm.addEventListener("blur", validateSoftware);
for (const checkbox of musicForm) {
    checkbox.addEventListener('blur', validateMusic);
}

//Al hacer click
newSoftwareForm.addEventListener("click", addNewSoftware);
newMusicForm.addEventListener("click", addNewMusic);
sendButtonForm.addEventListener("click", validateForm);