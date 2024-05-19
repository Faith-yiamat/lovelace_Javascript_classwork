function Person (name, age){
    this.name = name;
    this.age = age;
    this.greet = function introduce (){
        console.log(`Hello  my name is ${this.name} and I am ${this.age} years old.`)
    }
};

const adam = new Person('Adam',30);
console.log(adam);

const eve = new Person ('Eve',25);
console.log({eve});
eve.children = ['Cain','Abel','Seth'];
console.log({eve});


// prototype is used to add methods to the  constructor
Person.prototype.skincolor = "Black"

adam.skincolor = "White";
console.log(adam);
console.log(eve);
console.log({eve: eve.skincolor = "black"});
console.log(eve);
