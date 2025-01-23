
const strengths = ['Competitive','Learner','Intelliction','Input','Strategic']

const acceptUserInput = function(){

     let userInput = prompt("Enter your name please!!")

     console.log(`Mr. ${userInput} you have the strength ${strengths[Math.floor(Math.random()*5)]}`)
}

acceptUserInput()
