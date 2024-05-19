let fruits = ['Mango','Apple','Banana','Orange'];


let array = new Array(20,30,6,7);


console.log({fruits});
console.log({array});


// assigning index position
fruits[1] = 3;
console.log({fruits});


//length
console.log('length',fruits.length);


//find last item
console.log(fruits[-1]);


// array methods

  // adding index at the last index
let  addLast = fruits.push('Kiwi');
console.log({fruits});

   // adding items at the first index
let addFirst = fruits.unshift('Pawpaw');
console.log({fruits});


   // if you want to remove
   let removeLast = fruits.pop();
   console.log({fruits});


   // if you want to remove the first item
   let removeFirst = fruits.shift();
   console.log({fruits});

   //adding in an array
     // for loop 

   let items = [20,30,40,60,80];
   let sum = 0;
   for(const el of items)
   {
    sum+=el
   };
   console.log({sum});

   //for Each loop
   let num = [50,40,58,60];
   let ad = 0;
   num.forEach((el) => ad+=el);
   console.log(ad);


     // reduce - you can use in all operators
   let adtion = [20,30,40,50,60];
   let itemx = adtion.reduce((acc,curr) => acc + curr);
   console.log(itemx)

   //
  // items.map(item => {const multiply = item * 2
         //   console.log(multiply)})
           // it is used to manipulate through an array
         let multiply = items.map(item =>item * 2);
         console.log(multiply);
               // using for each to add 
               let addech = []
               let total = 0
          items.forEach(item => {
         const add = item +2 ;


         addech.push(add);

         total += item
        console.log({add})});
        console.log({addech});
        console.log({total})



        let multiplyAll = 1;
        items.map(item => {
            multiplyAll *= item ;
            return item
        })
        console.log({multiplyAll})


        //destructuring in arrays
        let [nm1,nm2,nm3,...rest] = items;
        console.log({nm1});
        console.log({nm2});
        console.log({nm3});
        console.log({rest});






