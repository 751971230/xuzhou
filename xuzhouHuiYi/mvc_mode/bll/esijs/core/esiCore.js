     (function (w,$jquery) {
    //项目是否使用了requirejs
    var bUseRequirejs = bUseRequireJS();
    
    //如果使用requirejs
    if (bUseRequireJS()) {
        define("esiCore", ['jquery'], function ($) {
            return getEsiObject($);
        });
    }
    else {
        w.ESIObject = w.$esi = getEsiObject($jquery);
    }

    function getEsiObject($) {
        var ESIObject = {
            version: "1.0.0",
            isDebug: true,
            alert: function (msg) {
                if (this.isDebug) {
                    alert(msg);
                }
            },
            log: function (o) {
                if (this.isDebug) {
                    console.log(o);
                }
            },
            coreFn: {
                isNumber: function (text) {//判断是否是纯数字
                    var pattern = /^[0-9]+$/;
                    return pattern.test(text);
                },
                //判断是否是小数
                //text:要判断的文本
                //number:要验证的小数位数，可选参数，不设置此参数则不验证小数位数，是小数即可
                isFloatNumber: function (text, number) {
                    var pattern;
                    if (number == undefined || number == null) {
                        pattern = /^[0-9]+(\.[0-9]+)?$/;
                        //pattern = /^[0-9]+\.[0-9]+$/;
                    }
                    else if (number <= 0) {
                        //number必须大于0
                        return false;
                    }
                    else {
                        pattern = new RegExp("^[0-9]+\.[0-9]{" + number + "}$");
                    }

                    return pattern.test(text);
                },
                isMobilePhoneNubmer: function (number) {//判断手机号
                    var pattern = /^1(3|5|8)[0-9]{9}$/;
                    return pattern.test(number);
                }
            },
            //加载提示框
            loading: {
                loadingDivID: "_esiLoadingDiv",
                _defaultTxt: "正在加载...",
                _create: function () {
                    $("body").append('<div id="' + this.loadingDivID + '" class="loadingdiv">' +
                                        '<div class="loading">' +
                                        '</div>' +
                                        '<div class="txt">' +
                                            '<span>正在加载...</span>' +
                                        '</div>' +
                                        '</div>');
                },
                //显示loading
                show: function (txt) {
                    var $loading = this.jqueryObj();
                    if (!$loading.length) {
                        this._create();
                    }
                    $loading = this.jqueryObj();
                    if (txt) {
                        $loading.find("div.txt span").html(txt);
                    } else {
                        $loading.find("div.txt span").html(this._defaultTxt);
                    }
                    $loading.show();
                },
                //隐藏loading
                hide: function () {
                    var $loading = this.jqueryObj();
                    $loading.hide();
                },
                jqueryObj: function () {
                    return $("#" + this.loadingDivID);
                },
                reCreate: function () {
                    var $loading = this.jqueryObj();
                    $loading.remove();
                    this._create();
                }
            },
            plugins: {}
        };

        return ESIObject;
    }

    //是否使用requirejs
    function bUseRequireJS() {
        return typeof define === "function" && define.amd && define.amd.jQuery;
    }
})(window, window.jQuery);


