function generateHashtag(str) {
  console.log(str.trim().length);
  let result;
  if (str.length === 0 || str.length > 140) {
result = false
  } else {
    //split it
    let split = str.split(" ");

    //map it and make all of them cap for the first character
    let firstCharCap = split.map((e) => {
      let replace = e.replace(e[0], e[0].toUpperCase());
      return replace;
    });

    result = `#${firstCharCap.join("")}`;


  }
  console.log(result);
  return result
}

// generateHashtag("")
// generateHashtag(" ".repeat(200))
// generateHashtag("Do We have A Hashtag");
// generateHashtag("Codewars")
generateHashtag("code" + " ".repeat(140) + "wars")

// let conv = '#'+str.replace(/\s+/g, '')
// let upperCase = conv.replace(conv[1], conv[1].toUpperCase())
// console.log(upperCase);
// return upperCase
