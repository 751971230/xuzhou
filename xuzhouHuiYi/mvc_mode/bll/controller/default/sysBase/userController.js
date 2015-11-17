/*
定义命名空间：defaultController.sysBase下的类：userController

如果不用requirejs，有如下依赖项：
///1. jquery
///2. <reference path="../../entity/bllEntity.js" /> 
///3. <reference path="../../entity/sysBase.js" />
///4. <reference path="../bllService.js" />

*/

(function (w, $) {
    //检查依赖引用
    if (!w.hasOwnProperty("$esi")) {
        console.warn("命名空间：baseController依赖esiCore类库，请先引入此类库");
        return;
    }

    //检查用户是否导入了baseController，如果没有导入，控制台打印错误信息
    if (!w.$esi.hasOwnProperty("baseController")) {
        console.warn("依赖于baseController但未导入，请先导入js文件");
        return;
    }

    //检查用户是否导入了bllEntity，如果没有导入，控制台打印错误信息
    if (!w.$esi.hasOwnProperty("baseEntity")) {
        console.warn("依赖于baseEntity但未导入，请先导入js文件");
        return;
    }

    var serviceConfig = w.$esi.baseController.config;//获取配置信息
    var ajaxDefaultOptions = serviceConfig.getJQueryAjaxOptions();//获取ajax设置

    var _User = $esi.baseEntity.sysBase.User;//获取实体 => User

    //用户信息数据访问类
    var userController = {
        //页面初始化
        pageInit:function () {
            var wgx = new _User();
            wgx.name = "王宫熙";
            wgx.age = 30;
            wgx.sex = "男";
            wgx.des();
        },
        //获取所有用户
        getAllUsers: function (queryData) {
            //设置ajax回调函数
            var ajaxSetting = {
                data: queryData,//查询条件
                success: function (data, status, jqXHR) {
                    $("#bodyDiv").append("<div>成功</div>");
                },
                error: function (jqXHR, status, errorInfo) {
                    $(document.body).append("<p>" + errorInfo + "</p>");
                },
                complete: function (jqXHR, status) {
                    alert("完成");
                }
            };
            //合并ajax参数
            $.extend(ajaxDefaultOptions, ajaxSetting);
            //发送ajax请求
            $.ajax(serviceConfig.serverIP + "", ajaxDefaultOptions);
        }
    };

    w.$esi.baseController.sysBase.userController = userController;//将对象添加到命名空间
})(window, jQuery);