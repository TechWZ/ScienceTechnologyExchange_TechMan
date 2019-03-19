(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['personalCollectCourseCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.personalProgramArray : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"col-4 mb-2\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <h5 class=\"card-title\">"
    + container.escapeExpression(((helper = (helper = helpers.programName || (depth0 != null ? depth0.programName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"programName","hash":{},"data":data}) : helper)))
    + "</h5>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <p class=\"card-text\">35课时</p>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                        <p class=\"card-text\">考神</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <a href=\"#\" class=\"btn btn-outline-primary\">进入学习</a>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-outline-danger\">取消收藏</button>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.personalProgramArray : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();