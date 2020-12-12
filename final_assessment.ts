
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

export function toDollar(n: number): string{
    const dolladollabillsyall = "$" + (n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return dolladollabillsyall;
  }

  

