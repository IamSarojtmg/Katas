function isValidWalk(walk) {
  let result
if(walk.length !== 10) return false

let n = 0
let s = 0
let east = 0
let w = 0

walk.forEach(e=>{
  console.log(e);
  if (e==='n'){
    n++
  }else if(e==='s'){
    s++
  } else if (e === 'e'){
    east++
  }else{
    w++
  }
})
if(n===s && east === w ){
  result = true
}else{
  result = false
}
console.log(result);
return result
}

isValidWalk(['n','n','e','s','s','s','s','w','n','n'])