function squareDigits(num) {
  const shallow = num.toString();
  const newArr = [];
  for (let i = 0; i < shallow.length; i++) {
    const element = shallow[i];
    newArr.push(element * element);
  }

  return Number(newArr.join(""));
}

squareDigits(3212), 9414;
