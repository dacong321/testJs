
// exports.nn =  function  (){
//     console.log("nn 函数被调用");
// }

// exports.mm = function  (){
//     console.log("mm函数被调用");
// }




//  function nn (){
//     console.log("nn 函数被调用");
// }

// // export function mm(){
// //     console.log("mm函数被调用");
// // }
// export{nn};




 
//export var obj = { name: 'keith' } // 直接输出

// var sex="boy";
// var echo=function(value){
// 　　console.log(value)
// }
// export {sex,echo}  

// function f1(){
//     var a=3;
//     console.log("ddd");
//     return function f2(){
//         var b=0;
//         console.log(++a);
//         console.log(++b);
//     }
// }
// var f3=f1();
// f1();
// // f3();//1 4
// // f3();//1 5


var scope = "全局变量";
function test() {
    console.log(scope);
}
test();

module.exports = function arrDeepCopy(source) {
    var sourceCopy = [];
    for (var item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? arrDeepCopy(source[item]) : source[item];
    }
    return sourceCopy;
}



