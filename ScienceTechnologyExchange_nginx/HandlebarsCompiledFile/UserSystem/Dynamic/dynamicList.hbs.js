(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dynamicList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"row rounded mt-2\" style=\"background-color:#f8f9fa;padding-top:2%;padding-bottom:2%; \">\n    <div class=\"col\">\n        <div class=\"row\">\n            <div class=\"col-1 text-center\">\n                <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.createUserInfo : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" alt=\"头像\" class=\"rounded-circle mt-1\"\n                    style=\"width:3rem;height:3rem\" />\n            </div>\n            <div class=\"col-11\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <h6>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.createUserInfo : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "<span class=\"text-muted badge badge-warning\"\n                                style=\"margin-left:1rem;\">Lv."
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.createUserInfo : depth0)) != null ? stack1.level : stack1), depth0))
    + "</span></h6>\n                        <span class=\"text-muted\">"
    + alias2(((helper = (helper = helpers.createTimeFormat || (depth0 != null ? depth0.createTimeFormat : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"createTimeFormat","hash":{},"data":data}) : helper)))
    + "</span>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col\">"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"row\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.dynamicImages : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                            <div class=\"col-4 text-center\">\n                                <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" width=\"130rem\" height=\"130rem\">\n                            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.dynamicList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
})();