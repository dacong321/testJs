// var u = {};
// u.testTest = function(e, t) {
//     for (let t = 0; t < e.length; t++) console.log(t + "------------", e[t]);
//     console.log("***************************");


//     for (let e = 0; e < 10; e++) console.log(e + "------------", t[e]);
//     };

// let arr = [1,2,3,4,5,6,7];
// let arr1 = ["a","b","c","d","e","f","g"];
// //u.testTest(arr,arr1);

// e = arr;
// t = arr1;
// for ( e = 0; e < 10; e++) console.log(e + "------------", e[t]);

// for(var i=0; i<10; i++) {
//     console.log( i );
//     }

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//     console.log(i);
//     }, i * 1000);
// }
// //每次打印出来都将会是6，延迟函数的回调会在循环结束时才执行
// //根据作用域的工作原理，实际情况是尽管循环中的五个函数是在各个迭代中分别定义的，
// //但是它们都被封闭在一个共享的全局作用域中，因此实际上只有一个i。

// let arr = [];



// for( let i=0;i<10; i++) {
//     let a = {};
//     a.dd1 = i;
//     arr.push(a);
// }

// console.log( arr );

let str="【郭雅01】申请解散 共166局";
let searchStart = "共";
let start = str.indexOf(searchStart) + 1;//获得字符串的开始位置
console.log("start", start);
let searchEnd = "局";
let end = str.indexOf(searchEnd);//获得字符串的开始位置
console.log("end", end);
let result = str.substring(start,end);//截取字符串
console.log(result);