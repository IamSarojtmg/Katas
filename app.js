function createPhoneNumber(numbers) {
  let first3 = [];
  let mid = [];
  let end = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      first3.push(numbers[i]);
    } else if (i < 6) {
      mid.push(numbers[i]);
    } else {
      end.push(numbers[i]);
    }
  }

  return `(${first3.join("")}) ${mid.join("")}-${end.join("")}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); //"(123) 456-7890")
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
