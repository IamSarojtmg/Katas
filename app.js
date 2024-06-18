function highAndLow(numbers) {
  const newArr = [];

  const split = numbers.split(" ");
  numbers.split(" ").map((e) => {
    newArr.push(Number(e));
  });

  const result = Math.max(...split).toString() + " " + Math.min(...split).toString();
  return result;
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")