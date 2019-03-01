(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['uSCModal'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "编辑";
},"3":function(container,depth0,helpers,partials,data) {
    return "添加";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <input type=\"hidden\" name=\"uCategoryId\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.uCategoryId || (depth0 != null ? depth0.uCategoryId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"uCategoryId","hash":{},"data":data}) : helper)))
    + "\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"row\">\n                        <div class=\"col-10\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"二级系统分类\" name=\"levelTwoNameList\">\n                        </div>\n                        <div class=\"col-2 text-right\">\n\n                        </div>\n                    </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mCLTwo : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n                    <div class=\"row\" id=\"'row\" + Date.now()+\"'\">\n                        <div class=\"col-10\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.uCategoryId : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            <input type=\"text\" class=\"form-control\" name=\"levelTwoList\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.uLevelTwoName || (depth0 != null ? depth0.uLevelTwoName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"uLevelTwoName","hash":{},"data":data}) : helper)))
    + "\">\n                        </div>\n                    </div>\n\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                            <input type=\"hidden\" name=\"levelTwoList\" value=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.uCategoryId : depth0), depth0))
    + "\">\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "            <button type=\"button\" class=\"btn btn-outline-success\" onclick=\"confirmAdd()\">确认添加</button>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "            <button type=\"button\" class=\"btn btn-outline-success\" onclick=\"confirmEdit()\">确认修改</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.uCategoryId : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "系统分类</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form id=\"userCategoryForm\">\n                <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">一级系统分类</label>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.uCategoryId : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <input type=\"text\" class=\"form-control\" placeholder=\"一级系统分类\" name=\"uLevelOneName\"\n                        value=\""
    + container.escapeExpression(((helper = (helper = helpers.uLevelOneName || (depth0 != null ? depth0.uLevelOneName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"uLevelOneName","hash":{},"data":data}) : helper)))
    + "\">\n                </div>\n                <div class=\"form-group\" id=\"levelTwo_formGroup\">\n                    <div class=\"row\">\n                        <div class=\"col-6\"><label>二级系统分类</label></div>\n                    </div>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.uCategoryId : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\" data-dismiss=\"modal\">关闭</button>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.uCategoryId : depth0),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n<script>\n\n    function confirmEdit() {\n        let parameter = $(\"#userCategoryForm\").serializeObject();\n        let array = new Array;\n        let obj;\n        parameter.levelTwoList.forEach(function (value, index) {\n            if ((index + 1) % 2) {\n                obj = new Object;\n                obj.uCategoryId = value;\n            } else {\n                obj.uLevelTwoName = value;\n                array.push(obj);\n            }\n        });\n        parameter.levelTwoList = array;\n        $.ajax({\n            type: \"post\",\n            contentType: \"application/json\",\n            dataType: \"json\",\n            data: JSON.stringify(parameter),\n            url: \"http://127.0.0.1:8080/STE/editUserCategory\",\n            success: function () {\n                $('#userCategoryModal').modal('hide');\n                alert(\"修改成功\");\n                init();\n            }\n        });\n    }\n\n</script>";
},"useData":true});
})();