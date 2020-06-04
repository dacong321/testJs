// function copyArrTo_OutPutArr(arr ,outPutArr) {
// 	for (let i = 0; i < arr.length; i++) {
//         outPutArr.push(arr[i])
// 	}
// }

// function clearArray(arr){
//     arr.length = 0;
// }

//  let arr = [1,2,3,4,5,6,7,8,9];
//  let cvv = ['a','b','c'];
// //  let sub = arr.slice(2)
// //  console.log('sub == ', sub);
// //   cvv = cvv.concat(sub.slice(0, 3));
//   console.log("===========================arr === ", arr);
//   console.log("===========================cvv === ", cvv);

//  let nn = [666];
//  ArrConcatArr = function(resultArr, InputArr, fromIxdex, EndIndex, needNewArrIndexBegin, needNewArrIndexEnd, nn){
//     //console.log('resultArr  ppp %p',resultArr);
//     let TempSub = InputArr.slice(fromIxdex, EndIndex);
//     console.log("===========================TempSub === ", TempSub);
//     let another = [];
//     another  = resultArr.concat(TempSub.slice(needNewArrIndexBegin,needNewArrIndexEnd));
//     clearArray(resultArr);
//     copyArrTo_OutPutArr(another, resultArr);
//     //resultArr = another.concat();
//     console.log('another',another);
//     console.log('resultArr',resultArr);
//     //let cc = [0, 9];
//     nn.push(88);
//     //console.log('---cc', cc);

//     console.log('======='); 
// }



// ArrConcatArr(cvv, arr,5,8,0,2,nn);
// console.log("===========================arr === ", arr);
// console.log("===========================cvv resultArr=== ", cvv);
// console.log("===========================nn === ", nn);



// clearData = function(arr, arrIndex){
//     for(let i = 0; i < arrIndex; ++i){
//         arr[i] = [888,999];
//     }
// }
// let my = [[1],[2],[3],[4]];
// clearData(my,4);
// console.log('my', my);



// //let ttt = [1,2,3,4,5,6,7,8,9];
// let ttt = [555];
// ArrConcatArr1 = function(resultArr){
//     console.log('=======');

//     //resultArr 的地址改变了：//改变resultArr的指向，此时resultArr指向一个新的内存地址，不再和ttt指向同一个 
//    //resultArr = [];  

//    //在函数中删除数组的方式，有以下两种
//    //resultArr.length = 0; 
//     resultArr.splice(0,resultArr.length);
// }



// ArrConcatArr1(ttt);
// console.log("===========================arr === ", ttt);
// console.log("===========================arr[0] === ", ttt[0]);










// ///校验数组的问题

// //方法中改变了原数据的，会影响原数组,包括单个的赋值，排序
// var a = [1,2,3];
// function test(arr){
//     arr[0] = 4;//直接改变原数组的第一个数据，影响原数组，故改变了原数组。
//     console.log(arr);//[4,2,3];
// }
// a;//在没有调用test之前是[1,2,3]
// test(a);//输出[4,2,3]
// console.log(a);



// var b = [1,2,3];
// function testb(arr){
//     arr = [4,5,6];//此处，arr直接赋予新值，和原数据没有关系，不会影响原数据
//     console.log(arr);//输出[4,5,6]
// }
// b;//test之前[1,2,3]
// testb(b);//输出[4,5,6]
// console.log(b);


let aarr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < aarr.length; ++i) {
  if (i == 3) {
    //aarr[i] = undefined;
    aarr.splice(i, 1);
  }
}

console.log('arrr', aarr);

const msg = require('./define.js');
//const define = require('./define.js');
console.log('========================ans  test============================');
console.log(msg);
msg.ans.cbFourCardCount = 888;
console.log("end--------", msg.ans);

const msg22 = require('./define.js');
console.log('========================ans  test22222============================');
console.log(msg);



console.log('========================ans  test333333============================');
msg.ans.clearAnsfunc();
console.log(msg);


// cbFourCardArry: [],  //4条牌的数组
// cbFourCardCount: 0,
// cbThreeCardArry: [], //3条牌的数组
// cbThreeCardCount: 0,
// cbTwoCardArry: [],   //2条牌的数组
// cbTwoCardCount: 0,
// cbSingleCardArry: [],//1条牌的数组
// cbSingleCardCount: 0,
// cbDoubleKingArry: [],//对王
// cbDoubleKingCount: 0,

// cbCardLogicValueCount: [],    //统计逻辑牌到底有多少张
// cbTota



// let mapvalue= function(value){
//     let table = ['0','3','4','5','6','7','8','9','10','J','Q','K','A','2'];
//     console.log(table.length);
//     return table[value];
// }

// console.log(mapvalue(13));



// let  tttsest = [1,2,3,4,5,6,7,8,9];
// edeleteArrItemByIndexxp = function(arr, arrIndex){
//     arr.splice(arrIndex,1);
// }

// edeleteArrItemByIndexxp(tttsest,2);
// console.log(tttsest);
// console.log(tttsest.length);



// (function () {
//     var arr = [1,2,2,3,4,5];
//     var i = arr.length;
//     while(i--){
//     console.log(i+"="+arr[i]);
//     if(arr[i]==2){
//      arr.splice(i,1);
//     }
//     }
//     console.log(arr);
//    })();


// let  tttsest = [1,2,3,4,5,6,7,8,9,3,6,9,0];
//    findArrItemThenDelete = function(arcArr,value){
//        let i = arcArr.length;
//        while(i--){
//         if(arcArr[i]==value){
//             arcArr.splice(i,1);
//             break;
//            }
//        }
//    }

//    let needDeleteArr = [3,4,5,6];
//    findArrItemThenDelete(tttsest,9);

//    console.log(tttsest);

//    for(let i = 0; i < needDeleteArr.length; ++i){
//        findArrItemThenDelete(tttsest,needDeleteArr[i]);
//    }
//    console.log(tttsest);


//============================

console.log("===========================cvv === ");


// let hourseLamp = "我爱你中国 /C";
// console.log("indexof(爱)",hourseLamp.indexOf("爱"));
// console.log("indexof(C)",hourseLamp.indexOf("C"));
// console.log("indexof( )",hourseLamp.indexOf(" "));
// console.log("indexof(  )",hourseLamp.indexOf("  "));
// console.log("baseStr.substr(4,5)",hourseLamp.substr(1,3));


// function aaaaab(arr,strList){
//   strList.push(arr);
//   console.log("strList==", strList);
// }
// function formatColorStrToVector(){
//   let strList = [];
//   let baseStr = "客服微信：/C06Letou0416/c，文明游戏！严禁赌博！";
//   let posStart = baseStr.indexOf("/C");
//   if (posStart != -1){
//     let posEnd = baseStr.indexOf("/c");
//     let tmpStart = posStart;
//     let totalStart = tmpStart;
//     while (posEnd != -1 && tmpStart != -1){
//       totalStart += 4;
//       tmpStart = baseStr.substr(totalStart,posEnd - totalStart).indexOf("/C");
//       if (tmpStart != -1) {
//         totalStart += tmpStart;
//         let tmpEnd = baseStr.substr(posEnd + 2).find("/c");
//         if (tmpEnd != -1)
//           posEnd += tmpEnd + 2;
//         else
//           posEnd = -1;
//       }
//     }
//     if (posEnd == -1)
//     posEnd = baseStr.length();
//     //		//"客服微信：/C06Letou0416/c，文明游戏！严禁赌博！"
//     //“客服微信：”  --增加颜色
//     //this.addColorString(baseStr.substr(0, posStart).c_str(), strList);
//     aaaaab(baseStr.substr(0, posStart), strList); 
//     formatColorStrToVector(baseStr.substr(posStart + 4, posEnd-posStart-4), strList, baseStr.substr(posStart, 4));
//     if (posEnd+2 < baseStr.length())
//       formatColorStrToVector(baseStr.substr(posEnd + 2), strList, defaultColor);

//   }
//   else{
//     aaaaab(str, strList); 
//   }
 
// }
// formatColorStrToVector();


//let {prefabName1,liangBaoName,huanBaoName} = aniObj.ani1;