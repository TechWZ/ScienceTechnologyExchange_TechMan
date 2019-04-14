(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['topicDetailData'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"row rounded mt-2\" style=\"background-color:#f8f9fa;padding-top:2%;padding-bottom:2%; margin-right:5rem\">\n    <div class=\"col\">\n        <div class=\"row\">\n            <div class=\"col-2 text-center\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tCUserInfo : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" alt=\"头像\" class=\"rounded-circle mt-1\"\n                            style=\"width:3rem;height:3rem\" />\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tCUserInfo : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-10\">\n                <div class=\"row mt-3\">\n                    <div class=\"col\">"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"row rounded mt-2\" style=\"background-color:#f8f9fa;padding-top:2%;padding-bottom:2%; margin-right:5rem\">\n    <div class=\"col\">\n        <div class=\"row\">\n            <div class=\"col-2 text-center\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <img src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.topicData : depth0)) != null ? stack1.topicUserInfo : stack1)) != null ? stack1.avatar : stack1), depth0))
    + "\" alt=\"头像\" class=\"rounded-circle mt-1\"\n                            style=\"width:3rem;height:3rem\" />\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.topicData : depth0)) != null ? stack1.topicUserInfo : stack1)) != null ? stack1.nickname : stack1), depth0))
    + "</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-10\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <h6>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.topicData : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h6>\n                        <span class=\"text-muted\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.topicData : depth0)) != null ? stack1.createTime : stack1), depth0))
    + "</span>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.topicData : depth0)) != null ? stack1.content : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.topicData : depth0)) != null ? stack1.topicCommentList : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
})();