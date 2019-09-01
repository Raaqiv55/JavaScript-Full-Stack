let buffer = new ArrayBuffer(8);
let view = new Int32Array(buffer);
view[0] = 100;
view[1] = 50;
console.log(view);