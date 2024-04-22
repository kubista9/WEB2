// Ex6 - Caesar Cipher 

/* function caesarCipher(message, factor){
    
}  */

let message = "abcd";
encryptedMessage = '';
let factor = 1;
k = factor % 26;

for (let i = 0; i < message.length; i++) {
    let encryptedChar = message.charCodeAt(i) + 1;
    let decrypteddChar = String.fromCharCode(encryptedChar);
    encryptedMessage += decrypteddChar;
}

console.log(encryptedMessage)