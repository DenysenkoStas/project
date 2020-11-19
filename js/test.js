"use strict";

let x = 5;
console.log(x++); // 5

console.log([] + false - null + true); // "NaN"

let y = 1;
let x = y = 2;
console.log(x); // 2

console.log([] + 1 + 2); // "12"

console.log("1" [0]); // "1"

console.log(2 && 1 && null && 0 && undefined); // null
// И (&&) запинается на лжи (false)
// ИЛИ (||) запинается на правде (true)

console.log(!!( 1 && 2 ) == (1 && 2)); // false

console.log(null || 2 && 3 || 4); // 3

const a = [1, 2, 3],
      b = [1, 2, 3];
console.log (a == b); // false

console.log(+"Infinity"); // Infinity - числоввой тип

console.log("Ёжик" > "яблоко"); // false

console.log(0 || "" || 2 || undefined || true || falsе); // 2