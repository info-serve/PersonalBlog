export function formTime(times) {
   let date = new Date(times * 1000);
    let year = date.getFullYear();//获取年
    let monts = date.getMonth() + 1; //月
    let day = date.getDate();
    let hour = date.getHours();
    let mu = date.getMinutes();
    let secondes = date.getSeconds();
    hour = hour < 10 ? ("0" + hour) : hour;
    mu = mu < 10 ? ("0" + mu) : mu;
    secondes = secondes < 10 ? ("0" + secondes) : secondes
    return year + "-" + monts + "-" + day + "-" + hour + ":" + mu

}

