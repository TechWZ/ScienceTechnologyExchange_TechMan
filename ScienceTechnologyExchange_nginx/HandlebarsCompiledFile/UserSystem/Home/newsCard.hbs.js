(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['newsCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.newsArray : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-6 mb-2\">\n        <a target=\"_blank\"\n            href=\"http://127.0.0.1:8082/UserSystem/LearningCommunity/programVideo.html?programId="
    + alias4(((helper = (helper = helpers.programId || (depth0 != null ? depth0.programId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"programId","hash":{},"data":data}) : helper)))
    + "\"\n            style=\"text-decoration:none; color:#000000;\">\n            <div class=\"card\">\n                <div class=\"card-body\" style=\"padding-bottom:1rem;margin-left:1rem;margin-right:1rem;\">\n                    <div class=\"media\">\n                        <img class=\"mr-3\" src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" width=\"200rem\" height=\"150rem\">\n                        <div class=\"media-body\">\n                            <h5 style=\"margin-bottom:1%;\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h5>\n                            <p data-toggle=\"tooltip\" data-placement=\"top\" title=\""
    + alias4(((helper = (helper = helpers.introduction || (depth0 != null ? depth0.introduction : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"introduction","hash":{},"data":data}) : helper)))
    + "\"\n                                style=\"display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow:hidden; margin-bottom:2%;\"\n                                class=\"text-muted\">"
    + alias4(((helper = (helper = helpers.introduction || (depth0 != null ? depth0.introduction : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"introduction","hash":{},"data":data}) : helper)))
    + "</p>\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <p style=\"margin-bottom:1%;\"><i class=\"fa fa-users\"></i>&nbsp; <span\n                                            class=\"text-muted\">271</span></p>\n                                </div>\n                                <div class=\"col-6\">\n                                    <p style=\"margin-bottom:1%;\"><i class=\"fa fa-comments-o\"></i>&nbsp; <span\n                                            class=\"text-muted\">54</span></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </a>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.newsArray : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<script>\n    $(function () {\n        $('[data-toggle=\"tooltip\"]').tooltip();\n    })\n</script>\n\n";
},"useData":true});
})();