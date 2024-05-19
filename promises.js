const internship = false;
const ourPromise = new Promise((resolve,reject) => {
    if(internship){
        resolve('I made it')
    }else{
        reject('Pray for me')
    }
});
console.log({ourPromise});

ourPromise
.then(() => {
    console.log('I will be confirmed');
})
.catch(() => {
    console.log('I will continue applying for jobs.');
})
.finally(() => {
    console.log('I will still be successful.');
});
console.log({ourPromise});

const successWish = async () => {
   try{
    await ourPromise;
    console.log('My success wish.');
   }catch{
    console.log('My  wish is not successful wish.');
   }

}
successWish();