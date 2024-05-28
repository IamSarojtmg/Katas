const capArr =['kiro','siti']
const shallow = [...capArr]

let result =[]

capArr.map(e=>{
    let toUpper = e[0].toUpperCase()
    let cutted = e.substring(1)
    result.push(toUpper+cutted)
})

console.log(result);


//shallow cop
//litrate over each element using map
//find the first letter of the string
//send it to new arr