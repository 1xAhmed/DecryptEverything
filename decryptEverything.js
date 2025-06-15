const CryptoJS = require("crypto-js");
const zlib = require('zlib');


// Function to decompress a string
function decompressString(str) {
    return zlib.inflateSync(Buffer.from(str, 'base64')).toString();
}

// Function to decrypt JSON object
function decryptJson(encryptedText, password) {
    // Decrypt the encrypted text using AES with a password
    const bytes = CryptoJS.AES.decrypt(encryptedText, password);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
    
    // Decompress the decrypted string
    const decompressedString = decompressString(decryptedString);
    
    // Convert decompressed string back to JSON object
    const jsonObject = JSON.parse(decompressedString);
    return jsonObject;
}
const password = "type the password here and run it, it will give all the encrypted data back"
const encryptedData = "U2FsdGVkX18qS0sSSUYUjg6C1NCe7pvbGp3AkiwGvXJEybdGBuseZnndzmtcoyUCIdnmUAqN2A49yewPCeeT6o2NtyStrsCG5MTssSheyyVYwv3RWL8VJd0+NcMOD/R83vkGkUIzL+CRaalnJkSPTE/POTL0xaH9kHienCWQ1yRb5Y/nn2PNBBnG61loGHz2iT0TVimkfCGpQLaQBFBAweV1kwwQfQKUEIZrTD800/mU+ZshsU4vpez3S10tqQqH6giBlDIQrIn8SbUeMmHYu9X6An3qHRlxMY4EP9J3I3z+W417spID43xTrBl8Mj5FTHWWdzKEouw9kMLkxZeq/cvH9V+5s7xAQ8tEcQEYXJ5Fevqcxvt1aC+0TR3Y+oiQzWr5bdOhzqD+ECDlAa92pPw8vUQDL0xq0MCWCzTiyFwgwiiAtEzSeERoBDCdvz08W9bNGNQgDmcZeVZfIqkPmmf28FvdxS/DyMfpfcm8NVo3h9LWjHYtv3THU11mdFXVcEtmVUZQiymJXYf/PFIAx6vCg7KvR6b1TCAeZheW+D8RsLascDg/lrbLplEqWIOti4EUNEzbT8HkV8es0+9JjKqVAslIc1OnkkT1x9vwiVTWEzrr37+iQBCDBfBUfTMyJoeu7Enn6oYQjgvpLZ+2rfu+8+Q/dascGo0LtAPMFHHXnkgzHoQQ2B8b2nCO8pQlgM301d8KcHye/Fa3EyEssHu1k78NkGdBdc3BrclWjVGST11zZ3BqgnJGQ2Mze+0sqO+/dX/kXJuLfWcrOG9QrdRyMXEaLoCcp7qK3aPzBO4eTJgNLOikSQ3yqt9ovXHjOYi7iFKcJhn7pVySGVbSpjxdOVN35ZTXsT1aX2ZDMGpAUVIYA1NFtaKgpCEJU1KPebWJWYRTu93AxZRHXTW8X3FTeaij4nUC0NbjySs1hXhG2Z/I/bgR52hwUSqi9Gtkhi55qML6ba/3Q7j5gIr+xlPTfte6e7MqBL8p2WDBPfeAhc0Pwyq86etuD5z50KwAPG0xInFzJeA2k4MaXCbQo5WY9eqnBcs2031Ln+E0XRNbj9zTesEVEDZ0uiCeqUsF1ZRRuNJYfrOtflHFAQaIJQ0B8i7u1tKZuD6puQjRIZJqhrxfzc73E8xF5g+uqUiVmS+RIrSluse6QPYYuPn+IF3bpnWOfJ17GarpHm59qsisrRbBKIaKbbmuWnd/RNvhlKE3RMn4R5RdGlkbjOjbW6pDyXw2qI6Q7nVYeYhEe23obg8sy37xpdi1FaY/2LjJGixwaDV4EQUicScT/pnwMs+fRkkl5vviKtsJ1PQyjpYqvRFOne6N703eJdIBBYrO/bhpK77NJ+9ClVHkX9Dy31rBEH++uDBiwtAZ3mcua91sEyknwDtT6YIkgYfBVXRZY7Pb25PK3uArJ+TXrLgtgSqxuRjs3W4wcAf79oAQ2qdKjp5mLCpg0PxLVufkPz/HxVo5hJQEEL5WQ1fx9SKROgpB+uUdT9hhhJPTFG9xPMwnM3PFtqTAegufpck7ia5fqet6sPSXOgz8Ra1S87T7TET/2GpLaVBGzsJgaSEUpzOKby/fYUYYHc/TwxXq6vKVvxYHujwf5UCGe8yYG6DAkFYbJEpBFJbDvVxaRBf04J27CS3xslmFjE6UkMKzT3imBSx2dDmKjgD227ceSGFe0lAhbFyXu53jrHGB4Zxu4CWv5Pok0zwfIjQH8dF5OaUaZqZWGxAGC0yu+VHY8gBkx0rnXFoTBTlDAcR2q6qr3C7k7KifgZYpmKd0ZzdKq7dDuia+OfL8ilI3dtNdlMzM4QEnHxiKrmX7PFmp8KQI2+i7YyFe8MRFZH+o1sztzphvV8WvGwpsU87WI0wH9Ju8tfSq9da1p84M//XnqpRJxw48MNQUNXEZN+/l/7V3ygcVfZ2j+Oi5ada4unG4uh0g7WAMNalx47Sa/oMOvWMDURM="


const decryptedJson = decryptJson(encryptedData, password);
console.log("Decrypted JSON:", decryptedJson);
