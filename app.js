function findOutlier(integers) {
  let odd = [];
  let even = [];
  integers.filter((e) => {
    if (e % 2 === 0) {
      even.push(e);
    } else {
      odd.push(e);
    }
  });
 return odd.length === 1 ? odd[0] : even[0]
}
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); //return 11 as the only odd num


