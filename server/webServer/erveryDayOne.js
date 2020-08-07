const everyOne = require("../Dao/erverDayDao");
const writeRes = require("../until/getTtime");
const resWrite = require("../until/setRes");
const path = new Map();
function insertOneDay(request, response) {//添加
    request.on("data", (data) => {
        everyOne.insertEveryDay(data.toString(), writeRes.getTimer(), writeRes.getTimer(), (res) => {
            // console.log(res)
            response.writeHead(200, { "Content-Type": 'application/json;charset=utf-8' });
            response.write(resWrite.writeContent("success", "添加成功", null));
            response.end();
        });
    })

}
path.set("/api/blog/inserteveryDay/one", insertOneDay)
//查询
function queryBlogsOneday(request, response) {
    everyOne.queryEveryDay((res) => {
        response.writeHead(200, { "Content-Type": 'application/x-www-form-urlencoded;charset=utf-8' });
        response.write(resWrite.writeContent("success", "查询成功", res));
        response.end();
    })

}

path.set("/api/blog/everyDay/queryone", queryBlogsOneday)
//查询所有
function queryBlogEveryAll(request,response){
    everyOne.queryEveryAll((res) => {
        response.writeHead(200, { "Content-Type": 'application/x-www-form-urlencoded;charset=utf-8' });
        response.write(resWrite.writeContent("success", "查询成功", res));
        response.end();
    })
}

path.set("/api/blog/everyDay/queryAll", queryBlogEveryAll)



module.exports.path = path;