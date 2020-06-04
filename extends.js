//-- 原型链继承
function Parent(name) {
    this.name = name;
    this.sum = function () {
        console.log("this.name=", this.name);
    }
}
Parent.prototype.age = 10;

function Per() {
    this.name = "Per";
}
Per.prototype = new Parent();
var per1 = new Per();
console.log("per1.age=", per1.name); //-- per1.age= Per
per1.sum(); //-- this.name= Per
console.log("per1.age", per1.age);//-- per1.age 10
//-- 判断Parent是否在per1的原型链上
console.log(per1 instanceof Parent); // -- true

//-- 重点：让新实例的原型等于父类的实例
//-- 特点：新实例具有本身构造函数的属性，继承父类构造函数的属性，继承父类原型属性。
//-- 缺点:  
//-- 1.所有新实例都共享父类的原型属性（任意实例修改了原型属性，所有的实例的原型属性都将被修改）
//-- 2.不能给父类构造传参

//------------------------------------------------------------------------------------------------------------------------------
//-- 借用构造函数继承
function Con()
{
    Parent.call(this, "ConName");
    this.age1 = 122;
}
var con = new Con();
console.log("con", con); //-- con Con { name: 'ConName', sum: [Function], age: 122 }
console.log("con.age", con.age);
//-- 重点：用call()/apply() 在子类构造函数中调用父类造函数，将父类构造函数的属性复制到子类中。
//-- 特点：
//-- 1.只继承了父类的构造函数中的属性，并没有继承父类的原型属性
//-- 2.可以继承多个构造函数的属性，即可以多次调用call(),将其他父类构造函数的属性复制到子类中。
//-- 3.可以给父类构造函数传参
//-- 缺点： 每个新实例都有父类构造函数的副本
//------------------------------------------------------------------------------------------------------------------------------
// -- 将原型链继承和调用构造函数继承进行组合使用（组合继承：常用）
function subType() {
    Parent.call(this, "subType");
}
subType.prototype = new Parent();
var subTypeObj = new subType();
console.log(subTypeObj); //-- Parent { name: 'subType', sum: [Function] }
console.log(subTypeObj.age); //-- 10
//-- 缺点： 调用两次构造，第二次子类Call调用的构造函数覆盖第一次调用的构造函数。
//------------------------------------------------------------------------------------------------------------------------------
// -- 原型式继承
function content(obj){
    function F(){
    }
    F.prototype = obj;
    console.log("F.prototype == ", F.prototype); //-- F.prototype ==  Parent { name: undefined, sum: [Function] }
    return new F();
}
var sub = new Parent();
var sub1 = content(sub);
console.log("sub == ", sub);    //-- sub ==  Parent { name: undefined, sum: [Function] }
console.log("sub1 == ", sub1);    //-- sub1 ==  Parent {}
console.log("sub1.age == ", sub1.age); //-- sub1.age ==  10
console.log("sub1.sum == ", sub1.sum); //--   sub1.sum ==  function () {
                                       //--         console.log("this.name=", this.name);
                                       //--     }

//-- 重点：用一个函数包含一个函数，最后返回这个函数对象。这个对象就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。
//-- 函数的原型等同于一个实例
//-- F构造函数里没有成员，F的原型对象继承了Parent的实例
//-- 所有实例都会继承原型上的属性
//------------------------------------------------------------------------------------------------------------------------------
// -- 寄生式继承（就是在原生集成上套了一层套子）
function content(obj){
    function F(){

    }
    F.prototype = obj;
    return new F();
}
var sub = new Parent();
//-- 以上是原生继承的一部分，下面给原生继承的 var sub1 = content(sub); 套套子。
function subObj(obj){
    var sub1 = content(obj);
    sub1.xxx = function(){
        console.log("XXXX  哈哈哈");
    }
    return sub1;
}

console.log(subObj(sub));//-- Parent { xxx: [Function] }
console.log(subObj(sub).age); //-- 10
console.log(subObj(sub).sum); // -- [Function]
//------------------------------------------------------------------------------------------------------------------------------
// -- 寄生组合式继承（常用）
// -- 就是寄生和构造的结合
// --寄生，先复制基类的prototype
function content(obj){
    function F(){}
    F.prototype = obj;
    return new F();
}
let con1 = content(Parent.prototype);

// --准备子类， 在子类中在复制构造函数的内容
function Sub(){
    Parent.call(this, "寄生构造的组合继承");
}
//-- 继承con的实例
Sub.prototype = con1;
//-- （一定要修复实例）修补构造函数
con1.constructor = Sub;
var sub = new Sub();
console.log(sub.age);  //-- 10
console.log("------------------------");
console.log(sub); //-- Sub { name: '寄生构造的组合继承', sum: [Function] }          实例属性
console.log(Parent);  //-- [Function: Parent]                                     函数对象属性
console.log(Parent.prototype);  //-- Parent { age: 10 }                           函数对象的原型属性
Parent.AAA = 656;
console.log("------------------------");
console.log(sub); //-- Sub { name: '寄生构造的组合继承', sum: [Function] }
console.log(Parent);  //-- { [Function: Parent] AAA: 656 }
console.log(Parent.prototype);  //-- Parent { age: 10 }