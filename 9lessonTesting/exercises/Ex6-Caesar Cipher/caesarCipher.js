// Ex6 - Caesar Cipher 

function caesarCipher(message, factor){

    function lettersToNumbers(message) {
        return message.toLowerCase().split('').map(char => {
            if (char >= 'a' && char <= 'z') {
                return char.charCodeAt(0) - 97;
            }
            return -1;
        });
    }
}