(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['forumCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.forumList : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-4 mb-2\">\n        <a target=\"_blank\"\n            href=\"http://127.0.0.1:8082/UserSystem/Forum/forumDetail.html?forumId="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n            style=\"text-decoration:none; color:#000000;\">\n            <div class=\"card\">\n                <div class=\"card-body\" style=\"padding-bottom:1rem;margin-left:1rem;margin-right:1rem;\">\n                    <div class=\"media\">\n                        <img class=\"mr-3\" src=\"/Images/forum_JavaScript.jpeg\" alt=\"Generic placeholder image\">\n                        <div class=\"media-body\">\n                            <h5 style=\"margin-bottom:1%;\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h5>\n                            <p data-toggle=\"tooltip\" data-placement=\"top\" title=\""
    + alias4(((helper = (helper = helpers.introduction || (depth0 != null ? depth0.introduction : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"introduction","hash":{},"data":data}) : helper)))
    + "\"\n                                style=\"display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow:hidden; margin-bottom:2%;\"\n                                class=\"text-muted\">"
    + alias4(((helper = (helper = helpers.introduction || (depth0 != null ? depth0.introduction : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"introduction","hash":{},"data":data}) : helper)))
    + "</p>\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <p style=\"margin-bottom:1%;\"><i class=\"fa fa-users\"></i>&nbsp; <span\n                                            class=\"text-muted\">271</span></p>\n                                </div>\n                                <div class=\"col-6\">\n                                    <p style=\"margin-bottom:1%;\"><i class=\"fa fa-comments-o\"></i>&nbsp; <span\n                                            class=\"text-muted\">54</span></p>\n                                </div>\n                            </div>\n                            <span class=\"badge badge-warning\">程序设计</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </a>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.forumList : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<script>\n    $(function () {\n        $('[data-toggle=\"tooltip\"]').tooltip();\n    })\n</script>\n\n";
},"useData":true});
})();