"use strict";
exports.__esModule = true;
exports.goldenRatio = void 0;
function goldenRatio(n) {
    var gR = 1.61803398875;
    return n * gR;
}

exports.goldenRatio = goldenRatio;
console.log(goldenRatio(7));

// function radians(degrees) {
//     return degrees * Math.PI / 180;
// }

module.exports.goldenRatio = goldenRatio;
