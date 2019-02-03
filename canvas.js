var canvas = document.getElementById('canvas');
console.log(canvas)
var context = canvas.getContext('2d');

//页面尺寸
pagesize()

window.resize = function () {
    pagesize()
}

function pagesize() {
    var pageheight = document.documentElement.clientHeight
    var pagewidth = document.documentElement.clientWidth
    canvas.height = pageheight
    canvas.width = pagewidth
}
//页面尺寸

var usingEraser = false
eraser.onclick = function() {
    usingEraser = !usingEraser
}

function huayuan(x, y) {
    context.beginPath()
    context.arc(x, y, 2, 0, 360)
    context.fill()
}

var using = false
var last = { x: undefined, y: undefined }
canvas.onmousedown = function (a) {
    x = a.clientX
    y = a.clientY
    using = true
    if (usingEraser) {
        context.clearRect(x, y, 10, 10)
    } else {
        last = { x: x, y: y }
        huayuan(x, y)
    }
}


canvas.onmousemove = function (a) {
    x = a.clientX
    y = a.clientY
    if (usingEraser) {
        if(using){
        context.clearRect(x, y, 4, 4)
        }else{
            
        }
    } else {
        if (using) {
            n = { x: x, y: y }
            huayuan(x, y)
            huaxian(last.x, last.y, n.x, n.y)
            last = n
        } else {
        }
    }
}

canvas.onmouseup = function (a) {
    using = false;
}

function huaxian(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineWidth = 4
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}