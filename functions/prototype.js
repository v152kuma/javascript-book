function Person(first , last){
    this.first = first;
    this.last = last ;
}

Person.prototype.getName = function getName(){
    return this.first+ " "+ this.last;
}

const person = new Person("Vivek", "Kumar");

console.log(person.getName())