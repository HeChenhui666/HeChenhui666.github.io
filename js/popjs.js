import Dialog, { InputDialog } from '../components/popWindow/popWindow.js';
let dialog1 = new Dialog({
    width: "90%",
    height: "auto",
    title: "沃居酒店管理系统（包括PC和App）",
    content: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目包括了前台的控制面板、大屏展示和一些实际业务的需求，核心是一套对于房间的整体管理系统，整体架构是vue的，我参与的部分主要运用了elementUI、echarts、bizcharts、原生h5C3JS。由于没有从0开始写项目，所以一些关于vue路由的封装，ajax请求的封装只有简单的了解，但整体的业务和后期的运维参与的时长比较多，偶尔也参与过一些共用组件的封装。主要模块有工作人员管理，房间管理，入住人员管理，预订管理，钟点房管理，超时预警，物品损坏报修，大屏通报等模块。我参与的主要模块有房间管理，入住人员管理，超时预警，大屏通报等。另外将Pc端的后台管理系统升级修改改为移动端app的形式，方便酒店高层及时收到紧急情况并做出处理。整体架构使用的是umiapp，技术方面涉及了v2、vantUI、eUI、uview等。我参与的开发和运维内容是一些较为常规的业务模块，如房间管理、房间预订管理、退房管理、物品损坏报修等。",
    isCancel: true,
    dragable: false,
    success() {
        console.log("点击了确定");
    },
    cancel() {
        console.log("点击了取消");
    },
    maskable: true
})
document.querySelector(".project1").onclick = function () {
    dialog1.open();
}
let dialog2 = new Dialog({
    width: "90%",
    height: "auto",
    title: "宁夏妇幼社区保健门诊（小程序）",
    content: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;微信小程序，外包项目，参与了大部分的页面开发和部分组件开发，技术栈主要使用了vue的uniapp和uview组件库，小程序功能主要有预约挂号、缴费、就医指南、个人信息、就诊历史等。这个小程序是和PC的后台管理系统保持一致的，医生使用PC端操作，数据会反馈在病人的小程序上。小程序整体业务逻辑并不复杂，主要是“烦”在了各个手机的适配上，包括最直观的页面布局是否会抽象，以及调用手机权限等问题。",
    isCancel: true,
    dragable: false,
    success() {
        console.log("点击了确定");
    },
    cancel() {
        console.log("点击了取消");
    },
    maskable: true
})
document.querySelector(".project2").onclick = function () {
    dialog2.open();
}
let dialog3 = new Dialog({
    width: "90%",
    height: "auto",
    title: "合肥架大修项目",
    content: "项目技术栈：React+hooks+JS+h5+c3+less+echarts+antd</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内容：合肥市轨道交通珠江路车辆段架修维修执行智能化系统，是为了方便于合肥最新的地铁修缮以及后期运维而搭建的管理系统，主要包括了：基础主数据、车辆履历、维修工艺管理、维修计划管理、维修执行管理、物资管理、周转件管理、多委外管理、作业记录数据查询、质量管理、工班管理、技术文档库、工艺设备状态看板等主模块。我参与的模块有作业记录数据查询、技术文档库、工艺设备状态看板等。我负责的是根据 ui 设计图来进行页面的绘制和接口联调，其中看板是根据echarts 做的数据可视化，其他页面是比较简单的增删改查，主要的页面渲染用的 antd ，也不缺少一些自定义的特殊组件。",
    isCancel: true,
    dragable: false,
    success() {
        console.log("点击了确定");
    },
    cancel() {
        console.log("点击了取消");
    },
    maskable: true
})
document.querySelector(".project3").onclick = function () {
    dialog3.open();
}
let dialog4 = new Dialog({
    width: "90%",
    height: "auto",
    title: "长春市轨道交通运营管理平台",
    content: "项目技术栈：React+hooks+JS+h5+c3+less+echarts+antd</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为项目太大，整体设计成了由门户页跳转至各个子系统的形式进行开发，一共分为了18个子系统，我参与的子系统有：项目、新线筹备、成本、固定资产、人员、生产调度、站务、乘务和部分移动端功能，其中项目、成本和固资的占比最高。详细业务不方便写出，后续可口述。主要的工作内容是页面的绘制和接口的联调，也会根据业务需求开发新的组件，修复和迭代更新开发中出现的 bug 和客户的新需求，参与客户需求的评估，ui 设计评估，可实现技术难度评估等。",
    isCancel: true,
    dragable: false,
    success() {
        console.log("点击了确定");
    },
    cancel() {
        console.log("点击了取消");
    },
    maskable: true
})
document.querySelector(".project4").onclick = function () {
    dialog4.open();
}
let dialog5 = new Dialog({
    width: "90%",
    height: "auto",
    title: "长春站务系统移动端",
    content: "项目技术栈：React+hooks+JS+h5+c3+less+echarts+antd</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了面向车站底层工作人员，将 PC 端部分功能开发成移动端管理的形式，分为了企业微信和蓝信 App ，我主要参与的是蓝信 App 的迭代升级，整体架构是 RN ，用到了 ReactRouterV 6版本路由，组件库是 antdmobileV2，现成组件很少，大部分都是手动封装的，里面含有大量的 hooks 写法，较为轻量化。我参与的模块有失物招领、帮扶信息、交接班。该 app 测试版本手机上还有，可以实际演示。",
    isCancel: true,
    dragable: false,
    success() {
        console.log("点击了确定");
    },
    cancel() {
        console.log("点击了取消");
    },
    maskable: true
})
document.querySelector(".project5").onclick = function () {
    dialog5.open();
}
let dialog6 = new Dialog({
    width: "90%",
    height: "auto",
    title: "NSK公司OA管理系统",
    content: "项目技术栈：vue+JS+h5+c3+less+antd</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日企NSK公司一款公司业务的后台管理系统，包括系统配置、模板化动态表单、工作日程、日程预约、个人设定、协同办公、网站地图、服务台、收藏夹、个人信息等功能，本人主要参与的大模块有工作日程、法人日历、个人设定、协同办公、日程预约、代理人切换等。其中在工作日程处开发了两个核心组件，周（月）历表和冲突表。法人日历页面涉及性能优化问题。",
    isCancel: true,
    dragable: false,
    success() {
        console.log("点击了确定");
    },
    cancel() {
        console.log("点击了取消");
    },
    maskable: true
})
document.querySelector(".project6").onclick = function () {
    dialog6.open();
}
let morePic = new Dialog({
    width: "90%",
    height: "auto",
    title: "更多图片",
    content: `<img src="images/gallery/1.png" alt="">
    <img src="images/gallery/2.png" alt="">
    <img src="images/gallery/3.png" alt="">
    <img src="images/gallery/4.png" alt="">
    <img src="images/gallery/5.png" alt="">
    <img src="images/gallery/6.png" alt="">`,
    isCancel: true,
    dragable: false,
    success() {
        console.log("点击了确定");
    },
    cancel() {
        console.log("点击了取消");
    },
    maskable: true
})
document.querySelector(".morePic").onclick = function () {
    morePic.open();
}


// axios({})  /axios.get()...post put delete head; 
// success: 点击确定之后触发自定义success 事件；
document.querySelector("show-dialog").addEventListener("success", function () {
    console.log("触发了组件的事件");
})