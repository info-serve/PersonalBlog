function writeContent(status,msg,data){
    return JSON.stringify({status:status,msg:msg,data:data})
}

module.exports.writeContent = writeContent;