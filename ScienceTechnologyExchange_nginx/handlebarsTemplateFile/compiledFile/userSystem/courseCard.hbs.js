(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['courseCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.courseProgramArray : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"col-3 mb-2\">\n        <div class=\"card\">\n            <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">"
    + container.escapeExpression(((helper = (helper = helpers.programName || (depth0 != null ? depth0.programName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"programName","hash":{},"data":data}) : helper)))
    + "</h5>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\n                    card's content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.courseProgramArray : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();