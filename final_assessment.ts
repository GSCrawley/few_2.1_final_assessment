
export function goldenRatio(n: number): number{
    let gR = 1.61803398875
    return n * gR;
}

console.log(goldenRatio(7))

function radians(degrees: number): number {
    return degrees * Math.PI / 180;
  };



module.exports.goldenRatio = goldenRatio



