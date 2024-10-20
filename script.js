// Security measures
document.addEventListener('keydown', e => {
    if (e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
        (e.metaKey && e.altKey && (e.keyCode === 73 || e.keyCode === 74)) ||
        (e.ctrlKey && e.keyCode === 85) ||
        (e.metaKey && e.altKey && e.keyCode === 85)) {
        e.preventDefault();
    }
});

document.addEventListener('keydown', e => {
    if ((e.ctrlKey && e.key === 'p') || (e.metaKey && e.key === 'p')) {
        e.preventDefault();
        alert('Printing is disabled on this page.');
    }
});

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
