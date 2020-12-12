"use strict";
exports.__esModule = true;
exports.degrees = exports.radians = exports.goldenRatio = void 0;
function goldenRatio(n) {
    var gR = 1.61803398875;
    return n * gR;
}
exports.goldenRatio = goldenRatio;
function radians(degrees) {
    var deg2rad = Math.PI / 180;
    return degrees * deg2rad;
}
exports.radians = radians;
;
function degrees(radians) {
    var rad2deg = 180 / Math.PI;
    return radians * rad2deg;
}
exports.degrees = degrees;
;
console.log(degrees(75));
