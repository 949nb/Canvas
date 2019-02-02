var canvas = document.getElementById('canvas');
console.log(canvas)
var context = canvas.getContext('2d');

//页面尺寸
pagesize()

window.resize = function(){
    pagesize()
}

function pagesize(){
    var pageheight = document.documentElement.clientHeight
    var pagewidth = document.documentElement.clientWidth
    canvas.height = pageheight
    canvas.width = pagewidth
}
//页面尺寸

function huayuan(x,y){
    context.beginPath()
    context.arc(x,y,2,0,360)
    context.fill()
}

var t = false
var last = {x: undefined,y: undefined}
canvas.onmousedown = function(a){
    t = true
    x = a.clientX
    y = a.clientY
    last = {x: x,y:y}
    huayuan(x,y)
}

canvas.onmousemove = function(a){
    if(t){
        x = a.clientX
        y = a.clientY
        n = {x:x,y:y}
        huayuan(x,y)
        huaxian(last.x,last.y,n.x,n.y)
        last=n
    }
}

canvas.onmouseup = function(a){
    t = false;
}

function huaxian(x1,y1,x2,y2){
  context.beginPath()
  context.moveTo(x1,y1)
  context.lineWidth = 4
  context.lineTo(x2,y2)
  context.stroke()
  context.closePath()
}