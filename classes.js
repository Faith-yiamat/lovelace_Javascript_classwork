class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;


    }
    greet(){
        console.log(`Hello my name is ${this.name} and ${this.age} years old`);
    }
};
const jane = new Person("Jane", 30);
console.log(jane);
jane.greet();

Person.prototype.nationality = "Kenyan"
// jane.nationality = "Kenyan"
// console.log(jane);

// console.log({jane: jane.nationality});
// console.log(jane);

console.log('nationality', jane.nationality); // when you console log jane you will not e able to see the nationality since it exist in the prototype, but if
console.log(jane);                           // you change the value of nationality in eve them you will be able to console log eve with nationality as the object

// inheritance

class Student extends Person{
    constructor(name,age, school){
       super(name,age);
       this.school = school;

    }
    profession(){
        console.log(`I am a student at AkiraChix`);
    }
};
const amanda = new Student("Amanda", 25);
console.log({amanda});
console.log('nationality', amanda.nationality);
amanda.greet();
amanda.profession();


// count the occurence of each character
