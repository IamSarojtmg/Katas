function moveTen(s) {
  const abc = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let shallow = [...s];
  let arr = [];

  shallow.forEach((e) => {
    let x = abc.indexOf(e) + 10;
    arr.push(abc[x]);
  });
  let result = arr.join("");
  return result;
}

moveTen("testcase"), "docdmkco";
moveTen("codewars"), "mynogkbc";
moveTen("exampletesthere"), "ohkwzvodocdrobo";
