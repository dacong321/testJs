// window.ggg = {
//     a:"520",
//     b:654
// };

module.exports = {
    window:ggg = {
        a:"520",
        b:654
    }
}

// function isChn(str){
//     var reg=/^[\u4E00-\u9FA5]+$/;
//     if (!reg.test(str)){
//         console.log( "不全是中文" );
//         return false ;
//     }else{
//         console.log( "全是中文" );
//         return true ;
//     }
// }


// function isChina(str){
//     if (escape(str).indexOf( "%u" )<0){
//         console.log( "没有包含中文" );
//     } else {
//         console.log( "包含中文" );
//     }
// }
// isChina("www.exfs1896489418964198fwew894f8we9f4we98oft.666ee///dd/n748    om");

//js 判断一个字符串必须包括 字母，数字，特殊符号
// let test="sdf123#$";
// var reg = new RegExp("^[a-zA-Z0-9#$%]+$","gi");
// console.log("dwedededed" , test.replace(reg,""));
// console.log(test.replace(reg,"").length==0?"Success":"Fault");



function done(input, LengthBegin, LengthEnd) {
    var pattern = '^[0-9a-zA-z]{' + LengthBegin + ',' + LengthEnd + '}$';
    var regex = new RegExp(pattern);
    if (input.match(regex)) {
        console.log("只包含数字和英文字符");
        return true;
    } else {
        console.log("不是只包含数字和英文字符");
        return false;
    }
}

// var one = "antzone";
// var two = "softwhy2com888A";
// var three = "231085ssssss19351X";//"蚂蚁部落softwhy";
// console.log(done(one, 2,20));
// console.log(done(two, 2, 15));
// console.log(done(three, 1, 18));

let array = [];
for (let index = 0; index < 8; index++) {
     array[index] = index; 
}

for (let index = 0; index < array.length; index++) {
    console.log("array[index] = ", array[index]);
    
}