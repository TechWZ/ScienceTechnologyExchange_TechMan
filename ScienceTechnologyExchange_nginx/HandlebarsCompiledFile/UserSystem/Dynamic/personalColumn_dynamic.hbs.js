(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['personalColumn_dynamic'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"row rounded mt-3\" style=\"background-color:#f8f9fa; padding-top:1rem; padding-bottom:1rem;\">\n    <div class=\"col-4\">\n        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" alt=\"头像\" class=\"rounded-circle\" style=\"width:5rem;height:5rem;\" />\n    </div>\n    <div class=\"col-8 text-center\">\n        <h5 class=\"mt-1\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "</h5>\n        <span class=\"badge badge-pill badge-warning\" style=\"font-size:90%;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.level : stack1), depth0))
    + "级</span><br />\n        <span class=\"badge badge-pill badge-info\" style=\"font-size:90%\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.integral : stack1), depth0))
    + "积分</span>\n    </div>\n</div>\n<div class=\"row\" style=\"margin-top:5%;\">\n    <div class=\"col\" style=\"padding-left:0%;padding-right:0%;\">\n        <div class=\"list-group\">\n            <button type=\"button\" class=\"list-group-item list-group-item-action active\" id=\"activeDynamicBtn\"\n                style=\"outline:none\" onclick=\"loadActiveDynamic()\">\n                热门\n            </button>\n            <button type=\"button\" class=\"list-group-item list-group-item-action\" id=\"friendsCircleBtn\"\n                style=\"outline:none\">好友圈</button>\n            <button type=\"button\" class=\"list-group-item list-group-item-action\" id=\"discoverBtn\"\n                style=\"outline:none\">发现</button>\n            <button type=\"button\" class=\"list-group-item list-group-item-action\" id=\"personalDynamicBtn\"\n                style=\"outline:none\">个人动态</button>\n        </div>\n    </div>\n</div>\n<script>\n    //清除四个导航按钮的active状态\n    function clearButtonActive() {\n        $(\"#activeDynamicBtn,#friendsCircleBtn,#discoverBtn,#personalDynamicBtn\").removeClass(\"active\");\n    }\n\n    //热门动态按钮\n    function loadActiveDynamic() {\n        clearButtonActive();\n        $(\"#activeDynamicBtn\").addClass(\"active\");\n        $.ajax({\n            xhrFields: { withCredentials: true },\n            type: \"get\",\n            url: \"http://127.0.0.1:8080/STE/getActiveDynamic\",\n            success: function (result) {\n                $.getScript('/HandlebarsCompiledFile/UserSystem/Dynamic/dynamicList.hbs.js').then(() => {\n                    let data = new Object;\n                    data.dynamicList = result;\n                    let dataHtml = Handlebars.templates.dynamicList(data);\n                    $(\"#dynamicActiveDiv\").html(dataHtml);\n                });\n            }\n        });\n    }\n\n    loadActiveDynamic();\n\n    //个人栏目按钮\n    $(\"#personalVideoBtn\").click(function () {\n        clearButtonActive();\n        $(\"#personalVideoBtn\").addClass(\"active\");\n    });\n\n    //待上线视频按钮\n    $(\"#waitOnlineVideoBtn\").click(function () {\n        clearButtonActive();\n        $(\"#waitOnlineVideoBtn\").addClass(\"active\");\n    });\n</script>\n\n";
},"useData":true});
})();