console.log('----数组中元素对象，按照属性，分别压入不同数组----');
var scene = [
  {
    name: '办公室',
    value: 1,
    checked: false
  },
  {
    name: '家中',
    value: 2,
    checked: true
  },
  {
    name: '户外',
    value: 3,
    checked: true
  }
];

let arr = new Array();
//let [a, b, c] = [[], [], []];      //第一种方法
let [a, b, c] = [arr, arr, arr];   //第二种方法
  for(let i =0;i < scene.length;i++){
    // console.log(scene[i].checked)
    if (scene[i].checked==true){
      a.push(scene[i].name);
      b.push(scene[i].value);
    }
  }
console.log(a)
console.log(b)
// ----数组中元素对象，按照属性，分别压入不同数组----
// [ '家中', 2, '户外', 3 ]
// [ '家中', 2, '户外', 3 ]
console.log("============================== \n\n");

//------------------------------------------------------------------------------------------------------------------

console.log('----删除数组中 某一项元素----');
let aarr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < aarr.length; ++i) {
  if (i == 3) {
    //aarr[i] = undefined;
    aarr.splice(i, 1);
  }
}
console.log('arrr', aarr);
// ----删除数组中 某一项元素----
// arrr [ 1, 2, 3, 5, 6 ]
console.log("============================== \n\n");

//------------------------------------------------------------------------------------------------------------------

console.log('----resultArr数组追加InputArr的一部分----');
resultArrConcatArrAPart = function (resultArr, InputArr, fromIxdex, EndIndex) {
    //-- 切输入数组的一部分
    let TempSub = InputArr.slice(fromIxdex, EndIndex);
    for (let i = 0; i < TempSub.length; i++) {
        resultArr.push(TempSub[i]);
    }
}

let resultArr = [8,9];
let InputArr = [1];
resultArrConcatArrAPart(resultArr, InputArr, 0, InputArr.length);
console.log("resultArr=",resultArr);
// ----resultArr数组追加InputArr的一部分----
// resultArr= [ 8, 9, 1 ]
console.log("============================== \n\n");

//------------------------------------------------------------------------------------------------------------------

console.log('----测试函数对象 和对象----');
function funcObj() {
    this.name = "";
    this.age = 0;
}

let msgg = new funcObj("lxk", 8);
let bmsg = new funcObj();
bmsg.name = 'xxx';
bmsg, age = 256; //-- 这里赋值无用，因为在函数中设置为了默认值0
console.log('msg==%o', msgg);
console.log('bmsg==%o', bmsg);
let sss = {
    name: "jiji",
    age: 9
}
console.log('sss==%o', sss);
// ----测试函数对象 和对象----
// msg==funcObj { name: '', age: 0 }
// bmsg==funcObj { name: 'xxx', age: 0 }
// sss=={ name: 'jiji', age: 9 }
console.log("============================== \n");

//------------------------------------------------------------------------------------------------------------------
console.log('----Js 数组测试排序----');
//false 降序， true 升序
function keysort(sortType) {
    return function (a, b) {
        //return sortType ? (a < b) : (a > b);
        return sortType ? (a - b) : (b - a);
    }
}
function SortCardByNum(ary) {
    //-- sort需要的参数是一个正负值
    ary.sort(keysort(false));
}
  
function youxaiodaoda(arr) {
    let max = 0;
    for (var i = 0; i < arr.length; i++) {
        //外层循环一次，就拿arr[i] 和 内层循环arr.legend次的 arr[j] 做对比
        for (var j = i; j < arr.length; j++) {
            //-- 降序
            if (arr[i] < arr[j]) {
                //如果arr[j]大就把此时的值赋值给最大值变量max
                max = arr[j];
                arr[j] = arr[i];
                arr[i] = max;
            }
        }
    }
}

let ary = [100, 132, 178, 162, 146, 130, 116, 114, 98, 84, 82, 66, 50, 34, 18, 194];
//let ary = [1, 3, 4, 5, 6, 7, 8, 2, 100, 99, 61];
console.log('测试排序1');
SortCardByNum(ary);
console.log(ary);
console.log('测试排序2');
youxaiodaoda(ary);
console.log(ary);
console.log("============================== \n");
//------------------------------------------------------------------------------------------------------------------
console.log('----深拷贝一个数组-数组元素可以是对象---');
function arrDeepCopy(source) {
    let sourceCopy = [];
    for (var item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? arrDeepCopy(source[item]) : source[item];
    }
    return sourceCopy;
}

let sour = { key1: [1, 2, "s"], key2: { key2_1: ["k2_1", 3, 4], key2_2: ["k2_2", 5, 6, { key2_2_1: [7, 8] }] } };
console.log(arrDeepCopy(sour));
sour.key2 = "changeKey2";
console.log(sour);
console.log("============================== \n");

//------------------------------------------------------------------------------------------------------------------
console.log('----es6 中的解构赋值知识点---');
let obj = {
  ani1: {
    prefabName1: "动画1的名字",//动画1的名字
    liangBaoName: "Play传入的亮宝的动画名",//Play传入的亮宝的动画名
    huanBaoName: "Play传入的换宝的动画名",//Play传入的换宝的动画名

  },
  ani2: {
    prefabName2: "动画2的名字",//动画2的名字
    dabao1: "",//Play传入的亮宝的动画名
    dabao2: "",//Play传入的换宝的动画名
  }
}
let {prefabName1,liangBaoName,huanBaoName} = obj.ani1;  //let {}中的成员，必须与obj.ani1的成员一致。这样解构赋值才会有效
let {prefabName2,dabao1,dabao2} = obj.ani2;

console.log("prefabName1", prefabName1);
console.log("liangBaoName", liangBaoName);
console.log("huanBaoName", huanBaoName);

//-- 讲解 用到的es6
//let {a,b,c};  单纯的写下这一句会报错 Missing initializer in destructuring declaration(缺失 初始化 在解构赋值中)
let { aa,bb,cc}= {"aa":3,"b":6,"ccc":23} //同理： //let {}中的成员，必须与{"aa":3,"b":6,"c":23}里的成员一致。这样解构赋值才会有效。
console.log(aa)//3
console.log(bb)//undefined
console.log(cc)//undefined

console.log("============================== \n");

//-- js中的解构赋值
//可以解构赋值的数据类型 右边如果不是数组，则必须为可遍历的结构
//1.  解构赋值为数组中提取值，按照对应位置，对变量赋值。
let [x, , y] = [1, 2, 3];  //x =1   y=3
let [ , , third] = ["foo", "bar", "baz"];//third=baz
let [jga, jgb] = ["test1"];//y undefined
let [kgc, jgd] = [1, 2, 3]; //c=1 d=2 

console.log(x)
console.log(y)
console.log(third)
console.log(jga)
console.log(jgb)
console.log(kgc)
console.log(jgd)
// 1
// 3
// baz
// test1
// undefined
// 1
// 2

console.log("============================== \n");
//------------------------------------------------------------------------------------------------------------------
let myHandCard = [1, 2, 3];
function ttestCanShu(myHandCard) {
  myHandCard.unshift("hj");
}

console.log("============================== myHandCardSrc", myHandCard);

ttestCanShu(myHandCard);
console.log("============================== myHandCardNew", myHandCard);
console.log((7 & 1) == 1);

