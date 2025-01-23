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
const encryptedData = "U2FsdGVkX1+P9bc0w5R/PQDzGSNRrbxHImXz7MIIjRcLTEuB/cIJrp9VxD4l/XmutcGfyGaZB1lmsBK+1gQ6S7N9ncSyapHfIJXOpaCP96FId4IWXx2acr9YNQSsrNT29s7H3yec6CbJSYHaia9+611hanIjfkM3hIfqyMO4gxFEM7B79l5I4kkmUtrJGVh6+fSompNBmt9CWUW5IBmcbJxzgwmxkiGBVAX0ESDjII4cDzj4ZwDpzf3eIbZIxLqqwz6goQ+oTcNyTzFQSThJqLXvTj/5qyfv/9bniPESQRf/auOHxikiAf/DbpalABao5MFoqcWA6YHXdiSNEp6Wa6bfsOy+6oxRhFKa1b/V9zTrJUO0F0yUZ/i/Hi9/706bVeYEsfWYS0rkwo00rny28nTsoV/eR5Ha82JaFW8bJCgYIH4nX9ckPDBinSYzAYU8hlTt+/zuKs4f5iI4bHgk+t748CouQHff/td/jHP+PvmsEbnwwscty/tgmbN478Se7GVt/RobN1sO4L2M1qtwFMzVSLAtt0LzZG4kP6EiJ5u7zKn7NDY69+0v6HZ8f2+FDZlOWbYk4MssiaSRGrGjLiIknj8EeUl66oTKeedo59Z6kvccV4n1wugzxivQNVMvc7mjioScjnCfjzXnG3cWQnttZnG/ZEp2b7A60cCjAlz8UjtO0oGVhKIhf8jfGwvxtXvGTa8NyuaHeAC0rlMNUldByKLBiFeAKMoce8L/vQioW9PoAmMPhgwg9JdlTo8Oj7c5OK0isW5P7b43W/ThJcKWGyzrZTCiVy7hNIa6ucuaMCaSmyL5lUKY5XtmUWVHRIQXySxLyteOJcDHJeMSTJmc2Z5B0+4evfxY5Yln2SrsFlqTHXy+icNzhr29yP1VI1va8uVgSzhKuRTF0F+aspRaDCE+ezBCYEQNMvhfMsdANXYQ05akgO487ZeH98KLhzqRBtjypnn9DCW+PkvIqqgZQTQRfH3XauCsy4unncLyr1wnM8Ycj8QmAYfgjzq5mIoJJ5qxF5TBL2z6i+jWRBGZzPSF73BuCimPbCmnB//J3AaO1yBEw3z8m/8+QocttAWzxgQOJnapPSXqy+l8yZjtLXE3eIoAKtfSEV1mX6jNV1vHjHC14q7L5zIimaQuStuyktBfwDYk1xPTXYUTga0sG7iwGh9glANQLePlpP4KZSqc7FS70qxVFNqYbb5+vlR1XhosqwkgWUfpVNYT/KHm14JmhRgFyoSJfbECXtOe8uUeXQzZJPES8dCmo7nhYZyLCidVv6shdBZqADQVNqgfctWp9fPHVL8dROAr1v4XCCGn8FNdjmb75hBZzAXqwht/lbGnJ51foqdFSw/A7FUdEtqOE/XFHvtpZyajPybOxKd1P7CgcFfIBERiMFPRoyxOw8K35c/Hoe2gIf0jjl7o1XtGF+ctl693G7CsXTzWP7NMAKmPAXcvatq/0e1b9JFZQmhT8erurs/uanAM2XVY8e5uW6FuYmOdm3K83NC++6kgWub/nGVkmAn8vWbmI/X3jSfo9XR6bTMq0Siv0CXfiRPLND2Om3/XfVs0FAd7s3W4imFXdFVbng7mcSY8owwnx/MYMyiNjH+FPJmbKg=="


const decryptedJson = decryptJson(encryptedData, password);
console.log("Decrypted JSON:", decryptedJson);
