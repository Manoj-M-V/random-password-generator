const generateBtn = document.querySelector("button");
const copyBtn = document.getElementById("copy");
const passField = document.getElementById("pass");
const copySpan = document.getElementById("copied");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const allChars = uppercase + lowercase + number + symbol;
let password;

generateBtn.addEventListener("click", function() {
    password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // console.log("clicked");
    passField.value = `${password}`;
});

copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(password).then(() => {
        copySpan.style.display = "inline";
        setTimeout(() => {
            copySpan.style.display = "none";
        },1000);
    }, () => {
        copySpan.style.display = "inline";
        copySpan.innerHTML = "Failed to copy!";
      });
    
})