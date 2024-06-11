let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

const merge = (nums1, m, nums2, n) => {
  let nums2Shallow = [...nums2]
  let nums1Shallow = [...nums1];
  nums1 = [];
  nums1Shallow.filter((e) => {
    if (!(e === 0)) {
      nums1.push(e);
    }
  });
  nums2Shallow.filter(e=>{
    if (!(e===0)) {
      nums1.push(e)
    }
  })
nums1.sort((a,b)=>{
  return a-b
})

console.log(nums1);
return nums1

};

merge(nums1, m, nums2, n);

//input is array and array.length
//desired output = need the combination of both array in ascending order without the 0

//Breaking down the problem
// get rid of the zeroes in the array.
//sort it in asceding orger using sort
//delete all the arrays inside both the nums 1 and 2
// push the new array inside num 1

//expected output num1[1,2,2,3,5,6], num2[]
