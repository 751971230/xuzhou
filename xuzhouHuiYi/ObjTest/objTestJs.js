/**继承*/

/**
function class1(name, age) {
    this.name = name;
    this.age = age;
    this.showname = function (name , age) {
        alert("名字:" + name + "年龄:" + age
            );
    }
}

function class2() {
    class1.call(this);

}


var obj2 = new class2();
obj2.showname("小肚肚",12);
*/

/***/
/**
function class1(name, age) {
    this.name = name;
    this.age = age;
    this.showname = function () {
        alert("名字:" + this.name + "年龄:" + this.age
            );
    }
}

var o = new Object();
var obj1 = new class1("小嘟嘟嘟", "22");
class1.call(o, "花花", "11");
o.showname();
o.sex="男"
alert(o.age);
alert(o.sex);
*/

/**重写原型对象*/
/**
function person() {

}

person.prototype.name = "你好";

person.prototype = {
    name: '小肚肚',
    age: 23,
    getInformation: function () {
        alert("名字："+this.name)
    }
}

var friend = new person();

friend.name;

friend.getInformation();
*/


/**递归*/
function f(num) {
    if (num >= 10) {
        return 0;
    } else {
        return num + f(num + 1);
    }
}
alert(f(1));


function sortArr() {
    var arr = [2, 41, 5, 76, 34, 65];
}