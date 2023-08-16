const customRanger = document.getElementById('custom-ranger');
const customRangerNumber = document.getElementById('custom-ranger-number');
const gerenatedPasswordInput = document.getElementById('gerenated-password-input');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const simbols = document.getElementById('simbols');
const easyToSay = document.getElementById('easy-to-say');
const easyToLe = document.getElementById('easy-to-le');
const allCharacters = document.getElementById('all-characters');
const labelNumbers = document.getElementById('label-numbers');
const labelSimbols = document.getElementById('label-simbols');
const gerenate = document.getElementById('gerenated-password-icon-gerenate');
const copy = document.getElementById('gerenated-password-icon-copy');
const copyPasswordBnt = document.getElementById('copy-password-bnt');

const changeInputRanger = () => {
    customRangerNumber.value = customRanger.value;
    generateNewPasswordAndShowOnScreen(customRanger.value);
}

const changeInputNumber = () => {
    customRanger.value = customRangerNumber.value;
    generateNewPasswordAndShowOnScreen(customRangerNumber.value);
}

const generateNewPasswordAndShowOnScreen = (length) => {
    newPassword = generateRandomPassword(length);
    gerenatedPasswordInput.value = newPassword;
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(gerenatedPasswordInput.value);
}

const removingNumbersAndSymbols = () => {

    numbers.checked = false;
    numbers.disabled = true;

    simbols.checked = false;
    simbols.disabled = true;

    labelNumbers.style.color = '#aaa';
    labelSimbols.style.color = '#aaa';

    generateNewPasswordAndShowOnScreen(customRangerNumber.value);

}

const simpleToRead = () => {

    numbers.disabled = false;
    simbols.disabled = false;

    labelNumbers.style.color = '#000';
    labelSimbols.style.color = '#000';

    generateNewPasswordAndShowOnScreen(customRangerNumber.value);

}

const useAllCharacters = () => {

    uppercase.checked = true;
    lowercase.checked = true;
    numbers.checked = true;
    simbols.checked = true;

    numbers.disabled = false;
    simbols.disabled = false;
    labelNumbers.style.color = '#000';
    labelSimbols.style.color = '#000';

    generateNewPasswordAndShowOnScreen(customRangerNumber.value);

}

const generateRandomPassword = (length) => {

    const charsetUpercase = "ABCDEFGHIKLMNPQRSTUVWXYZ";
    const charsetLowercase = "abcdefghikmnpqrstuvwxyz";
    const charsetNumber = "23456789";
    const charserSimbols = "@#$%&";
    const charserHard = "oO0l1jJ(){}[]!^*";

    let charset = ""
    let password = "";

    if (uppercase.checked) charset += charsetUpercase;
    if (lowercase.checked) charset += charsetLowercase;
    if (numbers.checked) charset += charsetNumber;
    if (simbols.checked) charset += charserSimbols;
    if (!easyToLe.checked) charset += charserHard;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;

}

generateNewPasswordAndShowOnScreen(12);

customRangerNumber.addEventListener("input", changeInputNumber);
customRanger.addEventListener("input", changeInputRanger);
uppercase.addEventListener("change", changeInputRanger);
lowercase.addEventListener("change", changeInputRanger);
numbers.addEventListener("change", changeInputRanger);
simbols.addEventListener("change", changeInputRanger);
easyToSay.addEventListener("change", removingNumbersAndSymbols);
easyToLe.addEventListener("change", simpleToRead);
allCharacters.addEventListener("change", useAllCharacters);
gerenate.addEventListener("click", () => { generateNewPasswordAndShowOnScreen(customRangerNumber.value) });
copy.addEventListener("click", copyToClipboard);
copyPasswordBnt.addEventListener('click', copyToClipboard);