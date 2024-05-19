//for loop
const multiplyByTwo = (num) => {
    let newArray = []
        for (let i=0; i< num.length; i++){
        const result = num[i] * 2;
         newArray.push(result);

        }
        return newArray;
}
console.log(multiplyByTwo([2,3,4,5,6,7]))


//for ... of
const totalSum = (num) => {
    let sum = 0;
    for (let element of num ){
        sum += element;

    }
    return sum;
}
console.log(totalSum([1,2,3,4,5,6,7]));
//while loop

const teachStudents = (students) => {
    while(students.length>= 2){
        console.log("Teach students");
       // students.pop();
        if(students.includes('Monica')){
            break
        }
    }
}
teachStudents(["max","Anita","John","Monica"])

// do loop
const childrenNames = (children) => {
    do{
        console.log('These are many children');
    }
    while(children.length>5)
}
childrenNames(["max","Anita","John","Monica"]);

//switch statement
const checkDayOfTheWeek = (day) => {
    switch(day){
        case 'monday':
        console.log('Today is monday');
        break;
        case 'Tuesday':
        console.log('Today is Tuesday');
        break;
        default:
            console.log('The day is not listed');
    }
}
checkDayOfTheWeek("Monday")