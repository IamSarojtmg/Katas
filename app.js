"use strict";
function solution(numbers) {
    if (numbers.length < 3) {
        return [];
    }

    let zigzags = [];
    for (let i = 0; i < numbers.length - 2; i++) {
        let a = numbers[i];
        let b = numbers[i + 1];
        let c = numbers[i + 2];
        console.log(a,'a');
        console.log(b,'b');

        if ((a < b && b > c) || (a > b && b < c)) {
            zigzags.push(1);
        } else {
            zigzags.push(0);
        }
    }

    return zigzags;
}

// Example usage:
const numbers = [1, 3, 2, 4, 1,];
console.log(solution(numbers));  // Output: [1, 1, 1]

