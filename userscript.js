// ==UserScript==
// @name         正方教务系统评教
// @version      0.1
// @description  正方教务系统一键评教
// @author       Sp4ce
// @match        *://【这里替换成教务系统网址】/xsjxpj.aspx*
// ==/UserScript==

(function () {
    var selects = document.getElementsByTagName('select');
    var scorelist = [];
    document.getElementById('TextBox1').value = 0;

    // 找到下拉菜单列表
    for (var i = 0; i < selects.length; i++) {
        if (selects[i].id.indexOf("DataGrid1__") > -1) {
            scorelist.push(selects[i]);
        }
    }

    // 选取下拉菜单项
    for (var a = 0; a < scorelist.length; a++) {
        var ops = scorelist[a].options;
        for (var j = 0; j < ops.length; j++) {
            var tempValue = ops[j].value;
            if (tempValue == '优秀') {
                ops[j].selected = true;
            }
            var btn_save = document.getElementById('Button1');
            btn_save.click();
            if (a == scorelist.length) {
                break;
            }
        }
    }
    var btn_submit = document.getElementById('Button2');
    btn_submit.click();
})();
