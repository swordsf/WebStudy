/**
 * Created by Administrator on 2018/1/22.
 */
//封装了scrollTop的兼容写法和
function $(id) {
    return document.getElementById(id);
}
function scroll() {
    if (window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {//返回一个对象，包含left和top两个属性
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    // 检测是不是怪异模式的浏览器(判断是否声明DTD)为true则是声明的了 DTD <!DOCTYPE html>
    else if (document.compatMode == "CSS1Compat") {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //没声明DTD（怪异模式）的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}