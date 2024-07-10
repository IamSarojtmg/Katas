function duplicateCount(text) {
  let newObj = {};
  let arr = []
  for (let i = 0; i < text.toLowerCase().length; i++) {
    if (newObj[text[i]]) {
      newObj[text[i]] += 1;
    } else {
      newObj[text[i]] = 1;
    }
  }

  for(const obj in newObj){
    if(newObj[obj]>1){
      arr.push(obj)
    }
  }
console.log(arr.length);
}

duplicateCount("aabBcde");
