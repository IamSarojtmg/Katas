const nestedArr = [[1,2,33],[44,5,6]]

const shallow = [...nestedArr]


//look at each of them
//filter out the large ones
//push to new arr

let newArr = []

shallow.forEach(e=>{

let max = Math.max(...e)
newArr.push(max)

// e.filter(arr=>{
// console.log(max);
// })
})

console.log(newArr);