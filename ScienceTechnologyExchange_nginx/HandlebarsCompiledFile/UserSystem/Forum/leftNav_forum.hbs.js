(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['leftNav_forum'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\">\n    <div class=\"card-header\" id=\"heading"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n        <h5 class=\"mb-0\">\n"
    + ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        </h5>\n    </div>\n\n    <div id=\"collapse"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"collapse "
    + ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" aria-labelledby=\"heading"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"\n        data-parent=\"#accordion\">\n        <div class=\"card-body\">\n            <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.uCLTwo : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapse"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"true\"\n                aria-controls=\"collapse"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" style=\"text-decoration:none\">\n                "
    + alias4(((helper = (helper = helpers.uLevelOneName || (depth0 != null ? depth0.uLevelOneName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uLevelOneName","hash":{},"data":data}) : helper)))
    + "\n            </button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapse"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"\n                aria-expanded=\"false\" aria-controls=\"collapse"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" style=\"text-decoration:none\">\n                "
    + alias4(((helper = (helper = helpers.uLevelOneName || (depth0 != null ? depth0.uLevelOneName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uLevelOneName","hash":{},"data":data}) : helper)))
    + "\n            </button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " show ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.first),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <a class=\"nav-link active\" id=\""
    + alias4(((helper = (helper = helpers.uCategoryId || (depth0 != null ? depth0.uCategoryId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uCategoryId","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"pill\" href=\"#\" role=\"tab\"\n                    aria-selected=\"true\" onclick=\"showForumCard('"
    + alias4(((helper = (helper = helpers.uCategoryId || (depth0 != null ? depth0.uCategoryId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uCategoryId","hash":{},"data":data}) : helper)))
    + "')\">"
    + alias4(((helper = (helper = helpers.uLevelTwoName || (depth0 != null ? depth0.uLevelTwoName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uLevelTwoName","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <a class=\"nav-link\" id=\""
    + alias4(((helper = (helper = helpers.uCategoryId || (depth0 != null ? depth0.uCategoryId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uCategoryId","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"pill\" href=\"#\" role=\"tab\" aria-selected=\"false\"\n                    onclick=\"showForumCard('"
    + alias4(((helper = (helper = helpers.uCategoryId || (depth0 != null ? depth0.uCategoryId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uCategoryId","hash":{},"data":data}) : helper)))
    + "')\">"
    + alias4(((helper = (helper = helpers.uLevelTwoName || (depth0 != null ? depth0.uLevelTwoName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uLevelTwoName","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.userCategoryData : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<script>\n    function showForumCard(categoryId) {\n        let data = new Object();\n        data.categoryId = categoryId;\n        $.ajax({\n            xhrFields: {\n                withCredentials: true\n            },\n            type: \"post\",\n            contentType: \"application/json\",\n            data: JSON.stringify(data),\n            url: \"http://127.0.0.1:8080/STE/getForumListByCategoryId\",\n            success: function (result) {\n                $.getScript('/HandlebarsCompiledFile/UserSystem/Forum/forumCard.hbs.js').then(() => {\n                    let forumCardData = new Object;\n                    forumCardData.forumList = result;\n                    let dataHtml = Handlebars.templates.forumCard(forumCardData);\n                    $(\"#v-pills-tabContent\").html(dataHtml);\n                });\n            }\n        });\n    }\n</script>\n\n";
},"useData":true});
})();