
var exp = module.exports;
// //从单牌里边找
exp.ans = {
    cbFourCardArry: [],  //4条牌的数组
    cbFourCardCount: 0,
    cbThreeCardArry: [], //3条牌的数组
    cbThreeCardCount: 0,
    cbTwoCardArry: [],   //2条牌的数组
    cbTwoCardCount: 0,
    cbSingleCardArry: [],//1条牌的数组
    cbSingleCardCount: 0,
    cbDoubleKingArry: [],//对王
    cbDoubleKingCount: 0,

    cbCardLogicValueCount: [],    //统计逻辑牌到底有多少张
    cbTotalOutCount: 0,         //统计总的出牌次数

    clearAnsfunc: function () {
        this.cbFourCardArry = [];  //4条牌的数组
        this.cbFourCardCount = 0;
        this.cbThreeCardArry = []; //3条牌的数组
        this.cbThreeCardCount = 0;
        this.cbTwoCardArry = [];  //2条牌的数组
        this.cbTwoCardCount = 0;
        this.cbSingleCardArry = [];//1条牌的数组
        this.cbSingleCardCount = 0;
        this.cbDoubleKingArry = [];//对王
        this.cbDoubleKingCount = 0;

        this.cbCardLogicValueCount = [];    //统计逻辑牌到底有多少张
        this.cbTotalOutCount = 0;         //统计总的出牌次数
    }

};

exp.testfunc = function () {

}



exp.gameove_msg = {
    handcard:[],
    hanccardCnt:0
}


//exp.ans;

// var exp = module.exports;
// /**
//  * 任意截取 数组的一段，连接到另一个数组上
//     * @param 连接后结果字符串 resultArr 
// 	* @param 需要连接的字符串 InputArr 
// 	* @param 需要连接字符串的开始位置，闭区间  fromIxdex 
// 	* @param 需要连接字符串的结束位置，开区间 cbLastWinCardCount 
//  */
// exp.resultArrConcatArrAPart = function (resultArr, InputArr, fromIxdex, EndIndex) {
//     let TempSub = InputArr.slice(fromIxdex, EndIndex);
//     for (let i = 0; i < TempSub.length; i++) {
//         resultArr.push(TempSub[i]);
//     }
// }


// //定义的另一个结构
// module.exports = {
//     ans: {

//         cbFourCardArry: [],  //4条牌的数组

//         cbFourCardCount: 0,

//         cbThreeCardArry: [], //3条牌的数组

//         cbThreeCardCount: 0,

//         cbTwoCardArry: [],   //2条牌的数组

//         cbTwoCardCount: 0,

//         cbSingleCardArry: [],//1条牌的数组

//         cbSingleCardCount: 0,

//         cbDoubleKingArry: [],//对王

//         cbDoubleKingCount: 0,



//         cbCardLogicValueCount: [],    //统计逻辑牌到底有多少张

//         cbTotalOutCount: 0,         //统计总的出牌次数



//         clearAnsDatafunc: function () {

//             this.cbFourCardArry = [];  //4条牌的数组

//             this.cbFourCardCount = 0;

//             this.cbThreeCardArry = []; //3条牌的数组

//             this.cbThreeCardCount = 0;

//             this.cbTwoCardArry = [];  //2条牌的数组

//             this.cbTwoCardCount = 0;

//             this.cbSingleCardArry = [];//1条牌的数组

//             this.cbSingleCardCount = 0;

//             this.cbDoubleKingArry = [];//对王

//             this.cbDoubleKingCount = 0;



//             this.cbCardLogicValueCount = [];    //统计逻辑牌到底有多少张

//             this.cbTotalOutCount = 0;         //统计总的出牌次数

//         }

//     }
// }
