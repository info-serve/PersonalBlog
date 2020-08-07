const fs = require("fs");
let globalConfig = {}
let files = fs.readFileSync("./server.conf").toString().split("\n");
// console.log(files)
for (let i = 0; i < files.length; i++) {
      // console.log(files[i].split("=")[0].trim())
      // console.log(files[i].split("=")[1].trim())
      globalConfig[files[i].split("=")[0].trim()] = files[i].split("=")[1].trim()
}
// console.log(globalConfig)
module.exports= globalConfig;
