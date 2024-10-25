const obj = {
  a: "1",
  e: "2",
  i: "3",
  o: "4",
  u: "5",
};

function decode(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (element.toLowerCase() === "2") {
      result.push('e');
    } else if (element === "1") {
      result.push('a');
    } else if (element.toLowerCase() === "3") {
      result.push('i');
    } else if (element.toLowerCase() === "4") {
      result.push('o');
    } else if (element.toLowerCase() === "5") {
      result.push('u');
    } else {
      result.push(element);
    }
  }
  return result.join('')
}


decode("h2ll4"), "hello";
