
let eightBallNumber = Math.floor(Math.random() * 6);

console.log(eightBallNumber)

let question = prompt("Ask me anything?");

let answer = "Something went wrong"

switch (eightBallNumber) {
    case 0:
        answer = "It will work out";
        break;
    case 2:
        answer = "May be not";
        break;
    case 3:
        answer = "It will work out";
        break;
    case 4:
        answer = "May be not";
        break;
    case 5:
        answer = "Hello howdy"
        break;
    default:
        answer = "I don't know about that"
}

let output = `You asked me ${question}. Well I think that ${answer}`

alert(output)