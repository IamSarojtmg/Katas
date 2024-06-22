function likes(names) {
  let result = "";
  if (names.length === 0) {
    result = "no one likes this";
  } else if (names.length === 1) {
    result = names[0] + " likes this";
  } else if (names.length > 1 && names.length < 4) {
    const lastName = " and " + names[names.length - 1] + " like this";
    names.pop();
    result = names.join(", ") + lastName
  } else {
    const firstTwo = `${names[0]}, ${names[1]}`;
    for (let i = 0; i < 2; i++) {
      names.shift();
    }

    result = `${firstTwo} and ${names.length} others like this`;
  }
console.log(result);
  return result;
}

likes([]);
likes(["Peter"]);
likes(["Jacob", "Alex"]); //'Jacob and Alex like this'
likes(["Max", "John", "Mark"]); //'Max, John and Mark like this'
likes(["Alex", "Jacob", "Mark", "Max"]); //'Alex, Jacob and 2 others like this'
