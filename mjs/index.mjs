// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs para utilizar CommonJS

import { sum, sub, mult } from "./sum.mjs";

console.log(sum(1, 1));
console.log(sub(2, 5));
console.log(mult(2, 2));
