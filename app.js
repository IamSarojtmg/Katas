var isAnagram = function (test, original) {
  let result;
  const x = test.toLowerCase().split("").sort();
  const y = original.toLowerCase().split("").sort();
  for (let i = 0; i < x.length; i++) {
    if (!(x[i] === y[i])) {
      result = false;
      break;
    } else {
      result = true;
    }
  }

  console.log(result);
  return result;
};


