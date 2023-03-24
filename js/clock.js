let box = document.getElementById('clockBox')

//不足十位补零
let addZero = val => val < 10 ? '0' + val : val

//把阿拉伯数字的星期转化为中国汉字的星期 // 星期映射表
let trans = val => {
    let obj = {
        0: '日',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六'
    }
    return obj[val]
}
setTime()
//获取时间的方法
function setTime() {
    let time = new Date();
    let year = time.getFullYear(); // 获取年
    let month = time.getMonth() + 1; // 获取月（是从0到11，所以我们要给他加1）
    let date = time.getDate(); // 获取日
    let day = time.getDay(); // 获取星期几(0是星期日)
    let hour = time.getHours(); // 获取小时
    let min = time.getMinutes(); // 获取分钟
    let sec = time.getSeconds(); // 获取秒

    let value = year + '年' + addZero(month) + '月' + addZero(date) + '日 星期' + trans(day) + ' ' + addZero(hour) +
        '时' + addZero(min) + '分' + addZero(sec) + '秒'
    // 把所有的时间拼接到一起
    box.innerText = value
    // console.log(value)
    // 把拼接好的时间插入到页面

}
// 让定时器每间隔一秒就执行一次setTime这个方法（这是实现时钟的核心）
setInterval(setTime, 1000)