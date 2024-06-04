"use strict";
var Shapes;
(function (Shapes) {
    Shapes["Square"] = "square";
    Shapes["Rectangle"] = "rectangle";
    Shapes["Triangle"] = "triangle";
    Shapes["Circle"] = "circle";
})(Shapes || (Shapes = {}));
let userShape = Shapes.Circle;
console.log(userShape);
const printFunc = (s) => {
    console.log(s);
};
printFunc(Shapes.Square);
printFunc(Shapes.true);
