function partsSums(ls) {
  //add the total of the element in ls and send to a new array
  //git rid of the first element in ls
  //than loop it again until all of the elements are deleted.
  let sum = 0;
  const newArr = [];

  for (let i = 0; i < ls.length; i++) {
    if (ls.length > 0) {
      const element = ls[i];
      sum += element;
    }
  }
  newArr.push(sum);
  sum = 0;
  ls.shift();
  console.log(newArr); //6 
}

partsSums([1, 2, 3]); //answer [6,5,3,0]

//Loop || javascript
//Been stuck on this for a while.
//I cannot seem to find a way to run the loop again.
//Any advise?