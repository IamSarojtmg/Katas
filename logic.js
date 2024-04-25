const arr = [1, 10, 5, 1, 0, 6];

let firstArr = arr.shift();
let leftArr = [];
let rightArr = [];
let leftTotal = 0;
let rightTotal = 0;
let finalResult = "";

console.log(firstArr);

//find if the rest of the array is divisible by 3 and move it into new array.
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element, "element");
  if (element > 0) {
    let int = i + 1;
    if (int % 2 === 0) {
      rightArr.push(element);
    } else {
      leftArr.push(element);
    }
  }
}

console.log(leftArr, "leftarr");
console.log(rightArr, "rightarr");

leftArr.map((e) => {
  leftTotal += e;
});

rightArr.map((e) => {
  rightTotal += e;
});

console.log(leftTotal, "lefttotal");
console.log(rightTotal, "right total");

if (leftTotal > rightTotal) {
  finalResult = "Left";
} else if (rightTotal > leftTotal) {
  finalResult = "Right";
} else if (leftTotal === rightTotal || arr.length === 0) {
  finalResult;
}

console.log(finalResult);

// rest of the array move to another new array.

//add total of array
//if left array is bigger than right return left
