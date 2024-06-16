// function spot(s1, s2) {
//   let result = [];
//   // console.log(s1===s2);
//   if (s1 === s2) {
//     result = []
//   }

//   //if both str are same or is an empty array reutrn []
//   //if s1 and s2 are not same return indexOf s1[i]

//   //problem - if there is another similar index than its returning that one. 'abcda','abcde' return index of 0 because the for loop is returning the first index rather than the original one.

//   for (let i = 0; i < s1.length; i++) {
//     // console.log(s1[i],'S1',s1.indexOf(s1[i], s1[i]===s2[i]));
//     // console.log(s2[i],'S2', s2.indexOf(s2[i]),s1[i]===s2[i]);
//     if (s1[i] !== s2[i]) {
//       // console.log(s1[i],'S1');
//       console.log(s1.length);
//       result.push(s1.indexOf(s1[i]));
//     }
//   }

//   console.log(result);
//   return result
// }






function spot(s1, s2) {
  let s1Split = s1.split("");
  let s2Split = s2.split("");
  let arr = [];
  if (s1 === s2) {
    arr = [];
  }

  for (let i = 0; i < s1Split.length; i++) {
    const element = s1Split[i];
    if (element !== s2Split[i]) {
      console.log(i);
      arr.push(i)
    }
  }

  console.log(arr);
  return arr;
}



spot('abcda', 'abcde') //4
// spot(
//   "hC.bSCjaaDmH.HHHJUa!utpGf.TzNdnllQUbzKii ",
//   "hC. SCjaaDVH.HHHJUs! tpGf.xzNdnlzhUbzKii "
// );
// spot("abcdefg", "abcqetg");
// spot("FixedGrey", "FixedGrey");
// spot("Hello World!", "hello world.");
