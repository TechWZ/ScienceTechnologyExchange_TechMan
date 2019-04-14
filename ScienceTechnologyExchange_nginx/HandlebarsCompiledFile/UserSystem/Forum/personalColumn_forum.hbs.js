(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['personalColumn_forum'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"row rounded mt-3\" style=\"background-color:#f8f9fa; padding-top:1rem; padding-bottom:1rem;\">\n    <div class=\"col-4\">\n        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" alt=\"头像\" class=\"rounded-circle\" style=\"width:5rem;height:5rem;\" />\n    </div>\n    <div class=\"col-8 text-center\">\n        <h5 class=\"mt-1\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "</h5>\n        <span class=\"badge badge-pill badge-warning\" style=\"font-size:90%;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.level : stack1), depth0))
    + "级</span><br />\n        <span class=\"badge badge-pill badge-info\" style=\"font-size:90%\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.integral : stack1), depth0))
    + "积分</span>\n    </div>\n</div>\n\n<script>\n\n</script>\n\n";
},"useData":true});
})();