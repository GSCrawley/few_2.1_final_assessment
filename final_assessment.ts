
export function goldenRatio(n: number): number{
    let gR = 1.61803398875
    return n * gR;
}

export function radians(degrees: number): number {
    let deg2rad = Math.PI / 180;
    return degrees * deg2rad;
  };

export function degrees(radians: number): number {
    let rad2deg = 180 / Math.PI;
    return radians * rad2deg;
  };

console.log(degrees(90))


