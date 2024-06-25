function generateHashtag(str) {
  let result;
  let removeMultipleSpace = str.replace(/  +/g, " ");
  if (removeMultipleSpace.length === 0 || removeMultipleSpace.length >= 140 || removeMultipleSpace === ' ') {
    result = false;
  } else {
    let split = removeMultipleSpace.split(" ");
    let firstCharCap = split.map((e) => {
      let replace = e.replace(e[0], e[0].toUpperCase());
      return replace;
    });
    result = `#${firstCharCap.join("")}`;
  }
  return result;
}
generateHashtag("");
generateHashtag(" ".repeat(200));
generateHashtag("Do We have A Hashtag"); //#DoWeHaveAHashtag
generateHashtag("Codewars");
generateHashtag("Codewars Is Nice");
generateHashtag("Codewars is nice");
generateHashtag("code" + " ".repeat(140) + "wars");
generateHashtag(
  "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
);
generateHashtag("a".repeat(139)), "#A" + "a".repeat(138);
generateHashtag("a".repeat(140));

// if (str.length === 0 || str.length > 140) {
//   result = false;
//   // console.log(result);
// } else {
//   let split = str.split(" ");

//   let firstCharCap = split.map((e) => {
//     let replace = e.replace(e[0], e[0].toUpperCase());
//     return replace;
//   });

//   result = `#${firstCharCap.join("")}`;
//   // console.log(result);
// }
// // console.log(result);
// return result;
