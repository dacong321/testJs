
//统计一个数组中有多少个不重复的单词：
// 不用reduce时： 
//var arr = ["apple","orange","apple","orange","pear","orange"]; 
// function getWordCnt(){ 
//   var obj = {}; 
//   for(var i= 0, l = arr.length; i< l; i++){ 
//     var item = arr[i]; 
//     obj[item] = (obj[item] +1 ) || 1; 
//   } 
//   return obj; 
// }
//console.log(getWordCnt());//{apple: 2, orange: 3, pear: 1}
// 用reduce时： 
// var arr = ["apple","orange","apple","orange","pear","orange"]; 
// function getWordCnt(){ 
//     let cnt = 0;
//   return arr.reduce(function(prev,next){ 
//     console.log("cnt == ", cnt++);
//     console.log("prev == ", prev);
//     console.log("next == ", next);
//     prev[next] = (prev[next] + 1) || 1; 
//     return prev; 
//   },{}); 
// } 
// console.log(getWordCnt());//{apple: 2, orange: 3, pear: 1}

//reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
// let obj = {};
// arr.forEach(item => {
//     obj[item] = obj[item] ? obj[item] + 1 : 1;
// });

// console.log("obj" , obj);

// func1();
// function func1(param){
//     console.log("函数的声明，存在函数提前");
// }
// let func2 = function (params) {
//     console.log("函数的表达式，不存在函数提前");
// }
// func2();

// //-- new Function的作用是从字符串中创建一个匿名方法
// let func3 = new Function("console.log(\"构造函数，不存在函数提前\")");  //-- 这个构造函数即时被执行
// console.log(func3); //-- 输出[Function: anonymous] 匿名函数
// func3; 

// //-- new function 是实例化一个对象
// function fun(){
//     this.age = 1;
//     console.log("hello Word!");
// }
// new fun();   //-- 输出   hello Word!
// let funObj = new fun();  //-- 输出   hello Word!
// funObj; //生成的函数对象不会输出任何，
// console.log(funObj.age);//输出 1

// console.log("funObj=", funObj);
/**
 * 在 调用new fun 中
 * 首先：var obj = new Object();   创建一个空对象
 * 然后  obj.__proto__ = fun.prototype;  把空对象的原型链上级设置成fun的原型函数
 * 最后  fun.call(obj);  更换fun的this调用，使得obj.age = 1;
 * 最终  return obj；
 */

//：函数会首先被提升，然后才是变量。也就是说，同一作用域下提前，函数会在更前面

// function test(){
//     console.log("我是test");
//     this.testInObj = function(){let nnn = "n"};
//     this.numa = "dadasda";
// }
// test.prototype.aaa = "aaa";

// create = function (o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// };

// let q1 = create(test);
// //console.log("test == ", test);
// console.log("typeof q1 == ", typeof q1);    //q1 是个对象
// console.log("q1 == ", q1);        //这个对象时test的函数对象
// console.log("q1.prototype == ", q1.prototype);  //q1函数对象中没有 原型类型对象

// console.log(" q1.numa == ", q1.numa);






// function Aclass() {
//     this.Property = 1;
//     this.Method1 = function () {
//         console.log("Method");
//     }
// }
// Aclass.prototype.Property = 2;
// Aclass.prototype.Method = function(){
//     console.log(2);
// }
// var obj = new Aclass();
// console.log("obj.Property", obj.Property);
// console.log("obj", obj);
// obj.Method();
// obj.Property = 666;

// var obj1 = new Aclass();
// console.log("obj1.Property==", obj.Property);
// console.log("obj1==", obj1);

// function arrtest(){
//     let arr = [];
//     arr[0] = 123;
//     arr[2] = 888;
//     arr["a"] = 999;
//     console.log("arr", arr);
//     console.log("arr.length", arr.length);
//     for(let i = 0; i < arr.length; ++i){
//         console.log("arr[" + i + "] ="  , arr[i]);
//     }
// }
// arrtest();

// function duixiangToArr(){
//     let duixiang = {"leu": 11, "dssa": 22, "ssa" : 33};
//     console.log("duixiang", JSON.stringify(duixiang));
//     let aa = [duixiang]
//     let bb = {aa};
 
//     console.log("aa",    JSON.stringify(aa));
//     console.log("bb",    JSON.stringify(bb));
// }
// duixiangToArr();


// // -- 测试Date类型
// var date = new Date("2019,01,01");
// //var date = new Date(Number("1587086213000"));
// let nowYear = date.getFullYear();
// console.log("Year == " , nowYear);

// var weekDay = ["rr", "11", "22", "33", "44", "55", "66"];
// let day = date.getDay();
// console.log("day == " + day);

// let nowWeek = weekDay[date.getDay()];
// console.log("通过周几得到映射的数值" , nowWeek);
// console.log("date==  " + date);


//只要这个对象是数组对象，可以根据数组的每个元素，来进行排序。

//-- 立即执行函数，这种函数在定义的地方就直接执行了
//-- IIFE函数的调用方式通常是将函数表达式、它的调用操作符、分组操作符放到一个括号内来告诉解释器，这有一个需要立即执行的函数
// (function(){
//     let arr = [3232, 505, 585, 7592]
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         console.log(element);
//     }
// })();

// function log(a){
//     if(a !== undefined && a != null){
//         console.log(a);
//         return;
//     }
//     console.log("666666666666666");
// }
// (function foo(){ log(); }()); //全包
// (function foo(){ log(); })(); //半包
// !function foo(){ log(); }(); //加符号
// -function foo(){ log(); }(); //加符号
// ~function foo(){ log(); }(); //加符号
// +function foo(){ log(); }(); //加符号
// //-- 例子，立即执行 函数，传入参数。
// +function(arg1, arg2, arg3){
//     log(arg1);
//     log(arg2);
//     log(arg3);
//     log(arg3 + arg2 + arg1);
// }(100,2,3);
// //-- 例子，立即执行 函数。
// a  =  1  +  2 
// ;(function () { 
//   // code 
//   log(a);
// })();

var xx = require ("./rreuire")
console.log(xx);
let arr1 = [9,6,8,4,6.2];
let arr2 = ["a", "xc", "xcc"];
let arr11 = xx(arr1);
console.log(arr11);
let arr22 = xx(arr2);
console.log(arr22);


let arrr1 = [];
let arrr2 = [];
arrr1 = arr11.slice(0);
arrr2 = arr22.concat();
console.log(arrr1);
console.log(arrr2);

