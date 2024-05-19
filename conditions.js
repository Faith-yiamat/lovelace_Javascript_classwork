function personAge(age){
    if(age > 18){
        return "you are an adult";
    }
    else if(age >= 12 && age <= 18){
        return "you are a teenager";
    }
    else{
        return "you are underage";
    }
}
console.log(personAge(13));