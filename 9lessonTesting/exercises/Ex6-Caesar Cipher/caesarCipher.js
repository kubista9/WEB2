// Ex6 - Caesar Cipher s


function caesarCipher(message, factor){
    let cipherText = '';
    factor = factor % 26;

    for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            cipherText += " ";
        }
        if ((message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) || (message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122)){
            let encryptedChar = message.charCodeAt(i) + factor;
            let decryptedChar = String.fromCharCode(encryptedChar);
            cipherText += decryptedChar;
        }
    }
    return cipherText;
}

const message = "abcdefghijklmnopqrstuvwxyz";
const factor = 1;
console.log(caesarCipher(message, factor));

