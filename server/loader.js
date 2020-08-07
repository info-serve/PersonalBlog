const fs = require("fs");
const conf = require("./config");
let path = new Map();
let confiArr = [];
let files = fs.readdirSync(conf["web_path"]);

for (let i = 0; i < files.length; i++) {
  // console.log(files[i])
  let temp = require("./" + conf["web_path"] + "/" + files[i])
  // console.log(temp)
  if (temp.path) {//路径存在
    for (let [key, value] of temp.path) {
      if (path.get(key) == null) {
        path.set(key, value)
      } else {
        throw new Error("url path异常, url:" + key);
      }
    }
    confiArr.push(temp)
  }
}
// console.log(path)
// console.log(conf)
// console.log(files)
module.exports = path;
