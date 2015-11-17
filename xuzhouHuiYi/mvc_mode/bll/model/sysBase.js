
/*
定义命名空间：bllEntity.sysBase； 并且定义bllEntity.sysBase命名空间下所有的类

如果不用requirejs，有如下依赖项：
/// <reference path="bllEntity.js" />
*/

(function (w) {
    
    /*****************************user相关实体类命名空间**************************/
    var sysBase = {};

    /*****************************use实体类**************************/
    sysBase.User = function () {
        this.name = "";
        this.age = 0;
        this.sex = "";
    }

    sysBase.User.prototype = {
        constructor: sysBase.User,
        //自我介绍
        des: function () {
            console.log("我叫" + this.name + ", 今年" + this.age + "岁了！");
        }
    };
    //-----------------------------------------------------------------

    if (typeof define === "function" && define.amd) {
        define(function () {            
            return sysBase;
        });
    } else {
        //检查依赖引用
        if (!w.hasOwnProperty("$esi")) {
            console.warn("命名空间：bllEntity.sysBase依赖esiCore类库，请先引入此类库");
            return;
        }

        if (!w.$esi.hasOwnProperty("baseEntity") || !w.$esi.baseEntity) {
            console.warn("bllEntity.sysBase实体类库需要引入bllEntity.js");
            return;
        }
        w.$esi.baseEntity.sysBase = sysBase;
    }
})(window);