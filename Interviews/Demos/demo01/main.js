// 老生常谈的问题，用 typeof 是否能准确判断一个对象变量，答案是否定的，
// null 的结果也是 object，Array 的结果也是 object，有时候我们需要的是 “纯粹” 的 object 对象
// jQuery API 提供了 isPlainObject()




var obj = {};

var arr=new Array();

// 1
console.log((obj !== null) & (typeof obj === "object") && (toString.call(obj) !== "[object Array]"));

// 2
console.log(Object.prototype.toString.call(obj) === "[object Object]");


console.log(Object.prototype.toString.call(arr));