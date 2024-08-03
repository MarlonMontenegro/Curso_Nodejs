// Esto solo en los modulos nativos
//  que no tienen promesas nativas.

//const {promisify } = requiere('node:util')
// const readFilePromise = promisify(fs.readFile)

const { readFile } = require("node:fs/promises");

//IIFE - inmediatly invoked function Expression.
(async () => {
  console.log("leyendo el primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("primer texto: ", text);
  console.log("Hacer cosas mientras lee el archvio...");

  console.log("leyendo el segundo archivo...");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log("segundo texto: ", text);
})();
