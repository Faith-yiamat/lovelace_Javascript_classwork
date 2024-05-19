
// // objects
// let student = {
//     name:"Faith",
//     age: 20,
//     school:"AkiraChix",
//     course:"software",
//     details: function (){
//         return this.name + " "+ this.age

//     }

// }
// console.log(student.details());
// console.log(student.name)

// // obect methods
// // 1. object.assign()- it copies all enumerable own properties from one or more source 
// //objects to target object.
// const target = {a:1,b:3}
// const source = {b:5,c:4}
// const returnTargeted = Object.assign(target,source)
// console.log(target)
// console.log(returnTargeted)
// // 2. object.create() - used to create a new object using an existing object as the
// // as the prototype of the newly created object.
// const person = {
//     name:"Faith",
//     age:20,
//     printIntroduction: function (){
//        return `My name is ${this.name} and I am ${this.age}`
//     }
// }
// console.log(person.printIntroduction())

// const me = Object.create(person);
// me.name = "Yiamat";
// me.age = 24;
// me.printIntroduction();
// console.log(me.printIntroduction())

// // Object.entries() - returns an array of a given object's own enumerable 
// // string-keyed property key value pair

// const object1 = {name:"Oloserian",age: 28}
// console.log(Object.entries(object1))
// // Object.freeze() - it freezes an object, a frozen object cannot be changed.
// const obj ={prop: 42};
// Object.freeze(obj);
// obj.prop = 33
// console.log(obj.prop);


// //  // how to merge two arrays in javascript
// // function merge(arr1,arr2){
// //  let result = [...arr1,...arr2]
// //  return result.sort((arr1,arr2)=> (arr1-arr2))
// // }
// // const arr1 = [1,2,3,4,5]
// // const arr2 = [6,7,8,9]
// // console.log(merge(arr1,arr2))



// function removeDuplicates(array){
//     const remove = [...new Set(array)]
//     return remove
// }
// const array = ["yiamat","faith","oloserian","faith","yiamat"]
// console.log(removeDuplicates(array))


function insert(str){
 return str.slice(0,4) + "the" + " " +str.slice(4,)
}
const str= "The quick fox jumped over the lazy dog";
console.log(insert(str))

  // question 1
function takes_arr(arr1,arr2){
    let result = [...arr1,...arr2]
    return result.sort((a,b) => (a-b))
}
const arr1 = [1,2,1,2,3];
const arr2 = [3,4,2,1,3,4];
console.log(takes_arr(arr1,arr2));
  // question2
function reverseString(string){
    return string.split('').reverse().join('')
}
 const string = "faith"
 console.log(reverseString(string))

//question3
 function removeDuplicates(name){
   let remove = [... new Set(name)].join('')
   return remove
 }
 const name = "I love you and you"
 console.log(removeDuplicates(name))

 //question 4
 function descending(array){
    var sortArray = array.sort().reverse()
    return sortArray
 }
 const array = [12,34,43,23,56,78,98,56];
 console.log(descending(array))

 // question 5
 function duplicatesRemove(arr){
    let removeDup = [...new Set(arr)]
    return removeDup
 }
 const arr = ["faith","faith","oloserian","yiamat","yiamat"];
 console.log(duplicatesRemove(arr))

 // question 6
 function takesSentence(sentece){
    return sentece.split('').reverse().join('')

 }
const sentece = "A word to remember";
console.log(takesSentence(sentece))


//  question 7 
function calculate(base, exponent){
   return base ** exponent
}
console.log(calculate(2,3))

// question 8
function check(str1,str2){
    if(str1.sort ==str2.sort){
        return "is anagram"
    }
    else{
        return "is not anagram"
    }
}
const str1 = "lead";
const str2 = "deal";
console.log(check(str1,str2))

// question 9split
function nameString(word){
  return word.match(/[aeiouAEIOU]/g).length;
}
const word = "i love you darling son";
console.log(nameString(word))






