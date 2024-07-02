function findOdd(A) {
  let count = {};
  const x = A.forEach((e) => {
    if (count[e]) {
      count[e] += 1;
    } else {
      count[e] = 1;
    }
  });

  let result = 0;
  for (const obj in count) {
    if (count[obj] % 2 !== 0) {
      result = obj;
    }
  }
  return count;
}

findOdd([1, 1, 2]);
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);


