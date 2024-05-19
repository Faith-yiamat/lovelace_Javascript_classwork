function manipulate(array , n){
  var product = 1
  for (var i = 0; i < n; i++) {
    product *= array[i]
  }
  console.log(product)
}
manipulate([1,3,4,56,6,7,8,43,3],3);