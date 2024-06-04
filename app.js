"use strict";
const custDetail = (details) => {
    console.log(`${details.name} is the owner of the the ${details.breed} whose weight is ${details.weight}`);
};
custDetail({
    name: "Saroj",
    breed: "dog",
    weight: 70,
    age: 33
});
