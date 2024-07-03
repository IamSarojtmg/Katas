function arrayDiff(a, b) {

let x = a.filter(e=>{

if(!(b.includes(e))){
  return true
}else{
  return false
}
})
console.log(x);
return x
}

arrayDiff([1, 2], [1]); //2
arrayDiff([1,2,2,2,3],[2])
arrayDiff([-19,-10,-5,-9,4,9,-11,0],[-19,-10,-5,-9,4,9,-11])


