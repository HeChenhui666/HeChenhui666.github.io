let player = document.getElementById('player');
let player_content1 = document.getElementById('player-content1')
let player_content2 = document.getElementById('player-content2')
let player_content3 = document.getElementById('player-content3')
let handleSmall = document.getElementById('handleSmall')
let HandleBig = document.getElementById('player-handleBig')
player.style.zIndex = 9999999;
player_content1.style.display = 'block'
player_content2.style.display = 'block'
player_content3.style.display = 'none'
const weizhi = function () {
    if (document.body.clientWidth < 1200) {
        player.style.position = 'fixed';
        player.style.bottom = 0;
        player.style.top = '88vh';
        player.style.left = '5px';
    } else {
        //鼠标按下事件
        player.onmousedown = function (e) {
            //获取x坐标和y坐标
            x = e.clientX;
            y = e.clientY;

            //获取左部和顶部的偏移量
            l = player.offsetLeft;
            t = player.offsetTop;
            //开关打开
            isDown = true;
            //设置样式
            player.style.cursor = 'move';
        }
        player.onmousemove = function (e) {
            if (isDown == false) {
                return;
            }
            //获取x和y
            var nx = e.clientX;
            var ny = e.clientY;
            //计算移动后的左偏移量和顶部的偏移量
            var nl = nx - (x - l);
            var nt = ny - (y - t);
            player.style.left = nl + 'px';
            player.style.top = nt + 'px';
        }
        //鼠标抬起事件
        player.onmouseup = function () {
            //开关关闭
            isDown = false;
            player.style.cursor = 'default';
        }
    }
}
weizhi()
window.addEventListener('resize', function () {
    // console.log('已监听到页面宽度发生变化', e, document.body.clientWidth)
    weizhi()
})
let DISPLAY = false
handleSmall.onclick = function () {
    player_content1.style.display = 'none'
    player_content2.style.display = 'none'
    player_content3.style.display = 'flex'
}
HandleBig.onclick = function () {
    player_content1.style.display = 'block'
    player_content2.style.display = 'block'
    player_content3.style.display = 'none'
}