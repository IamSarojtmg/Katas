// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  let sorting = ages.sort((a,b)=>{
    return a-b
  })
console.log(sorting);

}

twoOldestAges([98,55,45,98]);



