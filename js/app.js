(function init(){

window.onload = function() {
var pageModules;
var arr = [];
function getPageModules(){
  var a = document.getElementById("header_main").id;
  var b = document.getElementById("main_content").id;
  var c = document.getElementById("sidebar").id;
  var d = document.getElementById("nav_main").id;
  var e = document.getElementById("main_footer").id;
  arr.push(a, b, c, d, e);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(arr);
}
getPageModules();
function styliserModules(num, color, bg){
  for (var i = 0; i < arr.length; i++) {
    if (num == i){
    document.getElementById(arr[num]).style.color=color;
    document.getElementById(arr[num]).style.backgroundColor=bg;
    }
  }
  console.log(num);
  console.log(arr[num]);
  console.log(color);
  console.log(bg);
}
styliserModules(0,"blue","cyan");
styliserModules(1,"cyan","blue");
styliserModules(2,"blue","lime");
styliserModules(3,"purple","yellow");
styliserModules(4,"white","purple");

var obj = new Object();
function getModuleInfos(num){
  for (var i = 0; i < arr.length; i++) {
    if (num == i){
    obj.id = document.getElementById(arr[num]).id;
    obj.tagName = document.getElementById(arr[num]).tagName;
    obj.className = document.getElementById(arr[num]).className;
    obj.dimensions = document.getElementById(arr[num]).getBoundingClientRect();
    }
  }
  console.log(obj.id);
  console.log(obj.tagName);
  console.log(obj.className);
  console.log(obj.dimensions);

}
getModuleInfos(0);
getModuleInfos(1);
getModuleInfos(2);
getModuleInfos(3);
getModuleInfos(4);
return obj;
};
}());
