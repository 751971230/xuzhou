/*
定义命名空间：bllEntity，只用于非requirejs模式
*/

(function (w) {
    //检查依赖引用
    if (!w.hasOwnProperty("$esi")) {
        console.warn("命名空间：bllEntity依赖esiCore类库，请先引入此类库");
        return;
    }

    /*****************************基本实体类命名空间**************************/
    var baseEntity = {};

    //大模块定义
    baseEntity.sysBase = {};//系统基础模块


    w.$esi.baseEntity = baseEntity;
    
})(window);