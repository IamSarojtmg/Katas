function solution(number) {
  if (number <= 0) {
    return 0;
  }
  let newArr = [];
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      newArr.push(i);
    }
  }

  newArr.map((e) => {
    sum += e;
  });
  return sum;
}
