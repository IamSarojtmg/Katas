function isValidWalk(walk: string[]):boolean {
  let result: boolean;
  if (walk.length !== 10) return false;
  let n: number = 0;
  let s: number = 0;
  let east: number = 0;
  let w: number = 0;
  walk.forEach((e:string) => {
    if (e === "n") {
      n++;
    } else if (e === "s") {
      s++;
    } else if (e === "e") {
      east++;
    } else {
      w++;
    }
  });
  if (n === s && east === w) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

isValidWalk(["n", "n", "e", "s", "s", "s", "s", "w", "n", "n"]);
