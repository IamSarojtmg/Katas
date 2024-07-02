function findOdd(A) {
  //check how many time each number appears.
  let count = {}
  const x = A.forEach(e => {
// console.log(count);
if(count[e]){
  count[e]+=1
}else{
  count[e] = 1
}
  });
  
  console.log(count);
  return count;
}

findOdd([1,1,2])










// return than number
// if that number is not divisible by 2 than return that number in the array.