const arr = [1,2,3,4]

const doubled = arr.map(double);

function double(a)
{
    return a*2;
}

console.log(doubled);

//now we can also do this

const arrowDoubled = arr.map(a=>a*2);

console.log(arrowDoubled);

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


const map = new Map();
map.set('name', 'John Doe');
map.set('age', 30);
map.set('occupation', 'Software Engineer');
map.set('hobby', 'Coding');

map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});


const set = new Set();
set.add('JavaScript');
set.add('Python');
set.add('Java');

set.forEach(value => {
    console.log(value);
}); 

const arr1 = [5, 6, 7, 8];

const [first, second, third, fourth] = arr;

console.log(first, second, third, fourth);

const arr2 = [9, 10, 11, 12];

function extract(arr) {
    
    var [first, ...rest] = arr;

    console.log(first, rest);

}

extract(arr1);





