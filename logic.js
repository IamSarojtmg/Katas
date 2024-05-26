const largestNum = [1,2,3,44,5,6,77,100]

const shallow = [...largestNum]
let answer=0
const result = shallow.filter(e=>{
    // console.log(e);
    answer = Math.max(e)
})

console.log(answer);