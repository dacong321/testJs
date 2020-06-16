function base(){
    this.show = function(){
        console.log("this is base show");
    };
};
//类方法
base.show = function(){
    console.log("this is base 的类方法 show");
}

function child(){
    this.show = function(){
        console.log("this is child show");
    };
};

//--测试：先调实例的show函数在调用prototype的show函数
let bObj = new base();
//-- child类型的原型对象 为 base类型的实例，child类型将Base类型的方法和属性克隆了一遍，类似于构成了继承关系。
child.prototype = bObj;
let cObj = new child();
//调用实例属性的show
cObj.show();         //this is child show
//调用原型属性的show
bObj.show.call(cObj);//this is base show

//-- 测试：创建新对象dObj的原型 继承于child.prototype
let dObj = Object.create(child.prototype);
//-- 实例属性中没有show，调用的是原型属性中的show
dObj.show();//this is base show
console.log(dObj.__proto__);
console.log(cObj.__proto__);
console.log(bObj.__proto__);

//调用base的类方法
base.show.call(dObj);
base.show();