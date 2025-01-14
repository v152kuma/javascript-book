
var retries = 3;

function validateSide(side) {
    //base case for recursion , limit the retries to 3
    if (retries === 0) {
        alert("Maximum number of retries reached");
        return;
    }

    if (isNaN(Number(side)) || Number(side) === 0 || Number(side) < 0) {
        alert("The value of the side cannot be zero or negative or a string");
        retries--;
        side = prompt("Enter the value of the side of the triangle");
        return validateSide(side);
    }
    return side;
}

let a = prompt("Enter the value of first side of the triangle");
a = validateSide(a);

let b = prompt("Enter the value of second side of the triangle");
b = validateSide(b);



if(retries > 0){
    const c = Math.sqrt(a * a + b * b);
    console.log(`The value of the hypotenuse is ${c}`);
    alert(`The value of the hypotenuse is ${c}`);
}
else{
    alert("Maximum number of retries reached, you are an Idiot");
}

