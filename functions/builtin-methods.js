let uri = "https://www.example.com/submit?name=maaike van putten";


encodedURL = encodeURI(uri);
console.log(encodedURL);
decodedURL = decodeURI(uri);
console.log(decodedURL);

let urlContainignSpecialChars = "https://www.example.com/submit?name=this&that=some thing&code=love";

console.log(encodeURI(urlContainignSpecialChars));
console.log(encodeURIComponent(urlContainignSpecialChars));