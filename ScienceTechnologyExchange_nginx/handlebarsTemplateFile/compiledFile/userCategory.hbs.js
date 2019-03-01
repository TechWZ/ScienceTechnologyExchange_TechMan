(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['userCategory'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.userCategoryData : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <tr>\n                    <th scope=\"row\">"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</th>\n                    <td>"
    + alias4(((helper = (helper = helpers.uLevelOneName || (depth0 != null ? depth0.uLevelOneName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uLevelOneName","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>\n                        <button type=\"button\" class=\"btn btn-outline-warning\"\n                            onclick=\"editUserCategory('"
    + alias4(((helper = (helper = helpers.uCategoryId || (depth0 != null ? depth0.uCategoryId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uCategoryId","hash":{},"data":data}) : helper)))
    + "')\"><i\n                                class=\"fa fa-wrench\"></i></button>\n                    </td>\n                </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\n    <div class=\"col-12\">\n\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">序号</th>\n                    <th scope=\"col\">一级分类名称</th>\n                    <th scope=\"col\">操作</th>\n                </tr>\n            </thead>\n            <tbody>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.userCategoryData : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n    </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"userCategoryModal\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n</div>\n\n<script>\n\n    $.getScript(\"../../handlebarsTemplateFile/compiledFile/uSCModal.hbs.js\");//引入modal\n    function editUserCategory(uCategoryId) {\n        $.ajax({\n            type: \"get\",\n            contentType: \"application/json\",\n            dataType: \"json\",\n            data: {\n                \"id\": uCategoryId\n            },\n            url: \"http://127.0.0.1:8080/STE/getUserCategoryById\",\n            success: function (result) {\n                let dataHtml = Handlebars.templates.uSCModal(result);\n                $(\"#userCategoryModal\").html(dataHtml);\n                $(\"#userCategoryModal\").modal('show');\n            }\n        });\n    }\n</script>";
},"useData":true});
})();