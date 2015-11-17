/*
定义命名空间：baseController,，只用于非requirejs模式
*/

(function (w) {
    //检查依赖引用
    if (!w.hasOwnProperty("$esi")) {
        console.warn("命名空间：baseController依赖esiCore类库，请先引入此类库");
        return;
    }

    /*****************************数据访问类命名空间**************************/
    var baseController = {};

    //数据访问基本配置
    baseController.config = {
        serverIP: "http://10.1.1.7:8080",//服务器IP和端口
        httpMethod: { "POST": "post", "GET": "get" },//请求类型：post或者get
        isAjax: true, //是否ajax请求
        ajaxDataType: "json",//ajax返回数据类型

        //数据访问返回类型
        serviceResult: function () {
            this.isSuccess = false;//请求是否执行成功
            this.data = null;//如果成功，可能返回的json数据
            this.info = "请求失败，请稍后再试";//错误信息
        },
        getJQueryAjaxOptions: function () {
            return {
                async: this.isAjax,
                data: {},
                dataType: this.ajaxDataType,
                method: this.httpMethod.POST,
                timeout: 20000
            };
        }
    };

    //配置命名空间
    baseController.sysBase = {}

    w.$esi.baseController = baseController;
})(window);