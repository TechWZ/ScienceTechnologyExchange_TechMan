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
    + "积分</span>\n\n    <div class=\"row justify-content-center\" style=\"margin-top:15%;\">\n        <div class=\"col-7\">\n            <div class=\"list-group\">\n                <button type=\"button\" class=\"list-group-item list-group-item-action active\">\n                    个人收藏\n                </button>\n                <button type=\"button\" class=\"list-group-item list-group-item-action\">个人视频</button>\n                <button type=\"button\" class=\"list-group-item list-group-item-action\">发布视频</button>\n                <button type=\"button\" class=\"list-group-item list-group-item-action\">待上线视频</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();