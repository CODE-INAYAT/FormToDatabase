import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
        import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

        // API
        const firebaseConfig = {
            apiKey: "AIzaSyBQsKFqSksq-mJHWiXZJBq7uQXI1VscfNI",
            authDomain: "formdatabase-9286d.firebaseapp.com",
            projectId: "formdatabase-9286d",
            storageBucket: "formdatabase-9286d.appspot.com",
            messagingSenderId: "79926329148",
            appId: "1:79926329148:web:33bb11f4d0f3f353ac6839"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        document.getElementById("submit").addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById("loading").style.display = 'flex';
            document.getElementById("details-form").style.display = 'none';

            // Get user details
            const userName = document.getElementById("name").value;
            const userEmail = document.getElementById("email").value;
            const userBranch = document.getElementById("branch").value;
            const userYear = document.getElementById("year").value;

            set(ref(db, 'user/' + userName), {
                username: userName,
                email: userEmail,
                branch: userBranch,
                year: userYear
            });

            setTimeout(function () {
                document.getElementById("loading").style.display = 'none';
                document.getElementById("success").style.display = 'flex';
                document.getElementById("displayName").textContent = userName;
            }, 5000);
        });

        document.querySelector('#success a').addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById("success").style.display = 'none';
            document.getElementById("details-form").style.display = 'flex';
            document.getElementById("accessForm").reset();
        });

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

document.addEventListener('keyup', e => {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots are not allowed on this page.');
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
