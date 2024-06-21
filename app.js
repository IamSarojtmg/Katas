function spinWords(string) {
  if (string.split(" ").length <= 1) {
    return string.split("").reverse().join("");
  }
  let arr = [];
  string.split(" ").map((e) => {
    if (e.length >= 5) {
      arr.push(e.split("").reverse().join(""));
    } else arr.push(e);
  });

  return arr.join(" ");
}

spinWords("Welcome");
spinWords("Hey fellow warriors");
