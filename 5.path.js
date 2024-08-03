const path = require("node:path");

// barra separadora de carpetas segun SO
console.log(path.sep);

//Unir rutas con path.join

const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename("/tmp/marlon-secret-files/password.text", ".txt");
