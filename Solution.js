// Write your code here

class FixEquation {
  containsQM(s) {
    return s.includes("?");
  }
  findMissingDigit(s) {
    let arr = s.split(" ");
    let a = arr[0];
    let b = arr[2];
    let c = arr[4];
    let d = arr[6];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (this.containsQM(arr[i])) count++;
    }

    if (count != 1) return -1;
    let A = parseInt(a);
    let B = parseInt(b);
    let C = parseInt(c);
    let D = parseInt(d);
    let targetStr = "";
    let src = 0;

    if (this.containsQM(a)) {
      targetStr = a;
      src = (D - C) / B;
    } else if (this.containsQM(b)) {
      targetStr = b;
      src = (D - C) / A;
    } else if (this.containsQM(c)) {
      targetStr = c;
      src = D - A * B;
    } else {
      targetStr = d;
      src = A * B + C;
    }

    let srcStr = src.toString();
    if (targetStr.length === srcStr.length) {
      for (let i = 0; i < srcStr.length; i++) {
        if (targetStr[i] != srcStr[i]) return parseInt(srcStr[i]);
      }
    }

    return -1;
  }
}

let str = "42 * 47 + 2 = 1?76";
//let str = "4? * 47 + 2 = 1976";
//let str = "42 * ?7 + 2 = 1976";
//let str = "42 * ?47 + 2 = 1976";
//let str = "2 * 12? + 2 = 247";

let fe = new FixEquation();
let ans = fe.findMissingDigit(str);

console.log(ans);
