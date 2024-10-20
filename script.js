// Input formatting functions
function convertToUpperCaseAndRemoveNumbers(input) {
    input.value = input.value.replace(/[0-9]/g, '').toUpperCase();
    input.setAttribute("maxlength", "30");
}

function convertToLowerCaseAndRemoveSpaces(input) {
    input.value = input.value.replace(/\s/g, '').toLowerCase(); // Convert to lowercase and remove spaces
    input.setAttribute("maxlength", "50"); // Set maxlength = 50
}

function removeSpaces(input) {
    input.value = input.value.replace(/\s/g, '');
}