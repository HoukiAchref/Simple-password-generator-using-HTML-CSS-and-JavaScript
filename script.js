function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

    let allChars = "";
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    if (allChars === "") {
        alert("Please select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    document.getElementById("password").value = password;
    updateStrengthBar(includeUppercase, includeLowercase, includeNumbers, includeSymbols);
}


function updateLengthValue() {
    document.getElementById("lengthValue").innerText = document.getElementById("length").value;
}


function updateStrengthBar(uppercase, lowercase, numbers, symbols) {
    const strengthBar = document.querySelector(".strength-bar");
    let strength = 0;
    if (uppercase) strength++;
    if (lowercase) strength++;
    if (numbers) strength++;
    if (symbols) strength++;

    const strengthLevels = [
        { width: "25%", color: "#d9534f" },
        { width: "50%", color: "#f0ad4e" },
        { width: "75%", color: "#ffd700" },
        { width: "100%", color: "#5cb85c" }
    ];
    const level = Math.min(strength - 1, 3);
    strengthBar.style.width = strengthLevels[level].width;
    strengthBar.style.background = strengthLevels[level].color;
}
function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
