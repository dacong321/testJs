// var define  = require ('define.js');

// define.ans;
// console.log(define.ans);
// //define.ans.clearAnsDatafunc();

const msg = require('./define.js');
//const define = require('./define.js');
console.log('========================ans  test============================');
console.log(msg);
msg.ans;
console.log('========================ans  test333333============================');
msg.ans.clearAnsfunc();
console.log(msg);

function tts(ansddd) {
    msg.ans.bFourCardArry = [1, 2, 3, 4, 5, 6, 7];
    console.log(ansddd);
}

let ans = msg.ans;


person = function (name, age, arr) {
    {
        name = "赵晓华",
            age = 9
        arr['0'] = [];
        arr['1'] = '985';
    }
}

ans.name = 'wwww';
ans.age = 9999;
ans.testattrr = ['a', 'b'];
ans.obj = new person(ans.name, ans.age, ans.testattrr);

tts(ans);

console.log('是否是引用', msg.ans);


let msgGv = msg.gameove_msg;
console.log('msg', msgGv);

let msg22 = require('./defines1.js');
console.log(msg22);






userData = {
    name: 'Tracer',
    level: 1,
    gold: 100
};
 
let ttss = JSON.stringify(userData);
console.log(ttss);


//let arrpp = [1,88,8,9];

//var arrpp={length:3,0:'first',1:'second',2:'sepcond'};
var arrpp = ['first','second','third'];
var args = Array.prototype.slice.call(arrpp,1);
console.log("asrgas", args);


//-- 遍历map，找到所有元素，并且返回
forEach6 = function(data, itemCallback) {
    console.log("foreach -- this", this);
    if (isFunction(itemCallback)) {
       
        for(var key in data) {
             console.log("typeof value === function666");
            itemCallback(key, data[key]);
        }
    }
}

isFunction = function(value) {
    if (typeof value != "function") {
        return false;
    }
    return true;
}

var events={length:3,0:'first',1:'second',2:'sepcond'};
forEach6(events, function(key, value) {
    console.log("key ==", key);
    console.log("value ==", value);
    //if (gg.tools.isObject(value)) {
    //    console.log("======eee");
        // value.cb.apply(value.context, args);
        // if (value.isOne) {
        //     this.un([eventName, key]);
        // }
    //}
}.bind(this));

console.log("===========================");

var a = function(){
    console.log(this);    // 'littledu'
    console.log(bianl); 
    console.log(typeof this);      //  Object
    console.log(typeof bianl); 
    console.log(this instanceof String);    // true
}


//let bianl = ['littledu'];
let bianl = 'littledu';
a.call(bianl);


let aass = require("./quanju");
console.log("reqi", aass.window);


var cars = ["Saab", "Volvo", "BMW"];
console.log('cars   ,', cars.constructor);
console.log('prototype  %o ,', Array.prototype);

console.log("====================================");
let arguments = ["arrya = ", {Key1:123, Key2: 456}];
let data = Array.prototype.slice.call(arguments).join("::");

//let data = arguments.join("::");
console.log("data = %o", data);