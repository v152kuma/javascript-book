const myKey = "key";

const website = {

    name:"Algoexpert",
    rating:4,
    founders:['Clement', 'Antoine'],
    isAwesome: true,
    [myKey]: 1234

}

console.log(website);
console.log(website.name);

//bracket notation for multiwords key and with special symbols
//any property we dont have is treated as undefined

website.name = 'Frontendexpert';
website.url ="https/:asdfasomelkasdf";
console.log(website)
delete website.url
console.log(website)
console.log({} === {});


function Website(value, url, rating){
    this.value = 'printedeal'
    this.url = "someting"
    this.rating = 'soemthign'
}


const obj = {}

console.log(obj == obj)

