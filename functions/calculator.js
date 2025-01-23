

const a =10;
const b = -908;
operator = '-';

const calculator = function(num1, num2, operator){

    switch(operator){
        case '+':
            return num1+num2;
            break;
        case '-':
            return num1-num2;
            break;
        default:
            return num1+num2; 
}
    
}

console.log(calculator(a,b,operator));