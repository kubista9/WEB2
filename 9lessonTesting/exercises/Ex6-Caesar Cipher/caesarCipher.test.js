// Ex6 - Caesar Cipher s
//

function caesarCipher(message, factor){
    let cipherText = '';
    factor = factor % 26; 

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        if (charCode === " ") {
            cipherText += " ";
        }
        else if (charCode >= 65 && charCode <= 90){ // UPPERCASE
            cipherText += String.fromCharCode(((charCode - 65 + factor + 26) % 26) + 65);
        }
        else if (charCode >= 97 && charCode <= 122){ // lowercase
            cipherText += String.fromCharCode(((charCode - 97 + factor + 26) % 26) + 97);
        }
        else { 
            cipherText += message[i]; 
        }
    }
    return cipherText;
}

it("shifts abc once", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd")
})

it("works with punctuation", () => {
    expect(caesarCipher("ab.c", 1)).toBe("bc.d")
})

it("wraps from z to a", () => {
    expect(caesarCipher("xyz", 2)).toBe("zab")
})

it("maintains capitalization", () => {
    expect(caesarCipher("aBc", 1)).toBe("bCd")
    expect(caesarCipher("ABC", 1)).not.toBe("bcd")
})

it("works with negative shift", () => {
    expect(caesarCipher("abc", -1)).toBe("zab")
})

