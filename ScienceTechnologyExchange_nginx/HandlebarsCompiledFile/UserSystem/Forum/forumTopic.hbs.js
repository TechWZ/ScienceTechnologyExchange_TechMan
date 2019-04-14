(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['forumTopic'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"row rounded mt-3\"\n    style=\"background-color:#f8f9fa; padding-top:1rem; padding-bottom:1rem; margin-right:5rem\">\n    <div class=\"col-2\">\n        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.forumData : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" alt=\"头像\" class=\"rounded\" style=\"width:7rem;height:7rem;\" />\n    </div>\n    <div class=\"col-9\">\n        <h5 class=\"mt-1\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.forumData : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h5>\n        <button type=\"button\" class=\"btn btn-warning\">关注</button>\n    </div>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.forumData : depth0)) != null ? stack1.topicList : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a target=\"_blank\" href=\"http://127.0.0.1:8082/UserSystem/Forum/topicDetail.html?topicId="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n    style=\"text-decoration:none; color:#000000;\">\n    <div class=\"row rounded mt-2\" style=\"background-color:#f8f9fa;padding-top:2%;padding-bottom:2%; margin-right:5rem\">\n        <div class=\"col\">\n            <div class=\"row\">\n                <div class=\"col-11\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <h6>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h6>\n                            <span class=\"text-muted\">"
    + alias4(((helper = (helper = helpers.createTime || (depth0 != null ? depth0.createTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"createTime","hash":{},"data":data}) : helper)))
    + "</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.forumData : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.forumData : depth0)) != null ? stack1.topicList : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();