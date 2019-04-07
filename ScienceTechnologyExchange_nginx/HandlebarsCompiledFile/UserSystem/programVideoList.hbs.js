(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['programVideoList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <button type=\"button\" class=\"list-group-item list-group-item-action\" id=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "Btn\" name=\""
    + alias4(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
    + "\" onclick=\"switching('"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "')\" style=\"outline:none;\">\n        "
    + alias4(((helper = (helper = helpers.videoTitle || (depth0 != null ? depth0.videoTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoTitle","hash":{},"data":data}) : helper)))
    + "\n    </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-group\" style=\"margin-top:4.5rem;\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.videoList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<script>\n    $(function(){\n        let firstVideoBtn = $(\"button.list-group-item:first\");\n        firstVideoBtn.addClass(\"active\");\n        $('#videoPlayer').attr('src',firstVideoBtn.attr('name'));\n    });\n\n    function switching(index){\n        let activeVideoBtn = $('#'+index+'Btn');\n        $(\"button.list-group-item\").removeClass(\"active\");\n        activeVideoBtn.addClass(\"active\");\n\n        let videoPlayer = $('#videoPlayer');\n        videoPlayer.attr('src',activeVideoBtn.attr('name'));\n    }\n</script>\n\n";
},"useData":true});
})();