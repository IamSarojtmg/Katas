function persistence(num) {
const shallow = num.toString().split('').map(Number)
let newArr = [];
const secondArr = []

if(shallow.length>1){
for (let i = 0; i < shallow.length; i++) {
  const element = shallow[i];
  let times = element * shallow[i+1]
  newArr.push(times)
}
if(newArr[0].toString().split('').map(Number).length > 1){
  for (let i = 0; i < newArr[0].toString().split('').map(Number).length; i++) {
    const element = shallow[i];
    let times = element * shallow[i+1]
    newArr = []
    newArr.push(times)
  }
}
console.log(newArr);

}

//if length is more than 1 seperate the digits [3,9] if not return the number
//times all of the element
// send the result into new array
//continue until its single length


}

persistence(39),3