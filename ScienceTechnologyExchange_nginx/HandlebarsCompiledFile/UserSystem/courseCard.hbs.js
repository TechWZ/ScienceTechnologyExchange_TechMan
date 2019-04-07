(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['courseCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.courseProgramArray : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-3 mb-2\">\n        <a target=\"_blank\"\n            href=\"http://127.0.0.1:8082/UserSystem/LearningCommunity/programVideo.html?programId="
    + alias4(((helper = (helper = helpers.programId || (depth0 != null ? depth0.programId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"programId","hash":{},"data":data}) : helper)))
    + "\"\n            style=\"text-decoration:none; color:#000000;\">\n            <div class=\"card\">\n                <div class=\"card-body\" style=\"padding-bottom:1rem;margin-left:1rem;margin-right:1rem;\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <span class=\"badge badge-warning\">官方课程</span>\n                        </div>\n                    </div>\n                    <div class=\"row mt-2\">\n                        <div class=\"col\">\n                            <h5 class=\"card-title\" data-toggle=\"tooltip\" data-placement=\"top\" title=\""
    + alias4(((helper = (helper = helpers.programName || (depth0 != null ? depth0.programName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"programName","hash":{},"data":data}) : helper)))
    + "\" style=\"overflow:hidden;text-overflow:ellipsis;white-space: nowrap;\">\n                                "
    + alias4(((helper = (helper = helpers.programName || (depth0 != null ? depth0.programName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"programName","hash":{},"data":data}) : helper)))
    + "</h5>\n                        </div>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"col\">\n                            <p class=\"text-muted\">35课时&nbsp;&nbsp;|&nbsp;&nbsp;更新时间：2019.03.22 21:15</p>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <p class=\"text-muted\">讲师：</p>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-3\">\n                            <div class=\"row\">\n                                <div class=\"col text-center\">\n                                    <img class=\"rounded-circle\" src=\"/Images/qukun.png\" style=\"width:100%\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col text-center\">\n                                    <p class=\"text-muted\">曲坤</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </a>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.courseProgramArray : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<script>\n    $(function () {\n        $('[data-toggle=\"tooltip\"]').tooltip();\n    })\n</script>\n\n";
},"useData":true});
})();