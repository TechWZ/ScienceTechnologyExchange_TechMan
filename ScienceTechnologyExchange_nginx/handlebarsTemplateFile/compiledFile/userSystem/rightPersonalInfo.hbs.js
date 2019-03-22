(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['rightPersonalInfo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"text-center mt-5\">\n    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" alt=\"头像\" class=\"rounded mt-1\" style=\"width:30%;height:21%\">\n    <h5 class=\"mt-1\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "</h5>\n    <span class=\"badge badge-pill badge-info\" style=\"font-size:90%;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.level : stack1), depth0))
    + "级</span><br/>\n    <span class=\"badge badge-pill badge-info\" style=\"font-size:90%\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.integral : stack1), depth0))
    + "积分</span>\n\n    <div class=\"row justify-content-center\" style=\"margin-top:15%;\">\n        <div class=\"col-7\">\n            <div class=\"list-group\">\n                <button type=\"button\" class=\"list-group-item list-group-item-action active\" id=\"personalCollectionBtn\">\n                    个人收藏\n                </button>\n                <button type=\"button\" class=\"list-group-item list-group-item-action\" id=\"personalVideoBtn\">个人视频</button>\n                <button type=\"button\" class=\"list-group-item list-group-item-action\" id=\"releaseVideoBtn\">发布视频</button>\n                <button type=\"button\" class=\"list-group-item list-group-item-action\" id=\"waitOnlineVideoBtn\">待上线视频</button>\n            </div>\n        </div>\n    </div>\n</div>\n<script>\n    //清除四个导航按钮的active状态\n    function clearButtonActive(){\n        $(\"#personalCollectionBtn,#personalVideoBtn,#releaseVideoBtn,#waitOnlineVideoBtn\").removeClass(\"active\");\n    }\n\n    //个人收藏按钮\n    $(\"#personalCollectionBtn\").click(function(){\n        clearButtonActive();\n        $(\"#personalCollectionBtn\").addClass(\"active\");\n    });\n\n    //个人视频按钮\n    $(\"#personalVideoBtn\").click(function(){\n        clearButtonActive();\n        $(\"#personalVideoBtn\").addClass(\"active\");\n    });\n\n    //发布视频按钮\n    $(\"#releaseVideoBtn\").click(function(){\n        clearButtonActive();\n        $(\"#releaseVideoBtn\").addClass(\"active\");\n        $(\"#personalMainDiv\").load('/UserSystem/LearningCommunity/Personal/uploadVideo.html');\n        console.log(\"123456789\")\n    });\n\n    //待上线视频按钮\n    $(\"#waitOnlineVideoBtn\").click(function(){\n        clearButtonActive();\n        $(\"#waitOnlineVideoBtn\").addClass(\"active\");\n    });\n</script>\n\n";
},"useData":true});
})();