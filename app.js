function checkThreeAndTwo(array) {
  // console.log(array);
  //find dub
  //send to an array
  //length of three arr is 3 and length of 2 arr is 2 return true else false
  const x = array.filter((e, i) => {
    return array.indexOf(e) !== i;
  });
  console.log(x);
  
}

checkThreeAndTwo(["a", "a", "a", "b", "b"]);
