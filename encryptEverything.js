const CryptoJS = require("crypto-js");
const zlib = require('zlib');

function compressString(str) {
    return zlib.deflateSync(Buffer.from(str, 'utf8')).toString('base64');
}

function encryptJson(jsonObject, password) {
    const jsonString = JSON.stringify(jsonObject);
    const compressedString = compressString(jsonString);
    const encryptedText = CryptoJS.AES.encrypt(compressedString, password).toString();
    
    return encryptedText;
}

const password = "your_password_here which will be used later to decrypt";

const sampleData = {
    "user": "john_doe",
    "email": "john@example.com",
    "settings": {
        "theme": "dark",
        "notifications": true,
        "language": "en"
    },
    "data": [1, 2, 3, 4, 5],
    "timestamp": new Date().toISOString()
};


const encryptedData = encryptJson(sampleData, password);
console.log("Encrypted Data:", encryptedData);


function decompressString(str) {
    return zlib.inflateSync(Buffer.from(str, 'base64')).toString();
}

function decryptJson(encryptedText, password) {
    const bytes = CryptoJS.AES.decrypt(encryptedText, password);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
    const decompressedString = decompressString(decryptedString);
    const jsonObject = JSON.parse(decompressedString);
    return jsonObject;
}


console.log("Original Data:", sampleData);
console.log("Encrypted:", encryptedData);

const decryptedData = decryptJson(encryptedData, password);
console.log("Decrypted Data:", decryptedData);


console.log("Data matches:", JSON.stringify(sampleData) === JSON.stringify(decryptedData));

module.exports = {
    encryptJson,
    compressString
};
