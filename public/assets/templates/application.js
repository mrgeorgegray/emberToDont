!function(){return this.HandlebarsTemplates||(this.HandlebarsTemplates={}),this.HandlebarsTemplates.application=Handlebars.template(function(n,e,a,t,l){function i(){return"Home"}function r(){return"List"}function s(){return"Add"}this.compilerInfo=[3,">= 1.0.0-rc.4"],a=a||n.helpers,l=l||{};var o,p,h,c="",d=this,m=a.helperMissing,u="function",f=this.escapeExpression;return c+='<header role="banner">\n  <h1>to don\'t</h1>\n</header>\n\n<nav role="primary">\n  ',h={hash:{},inverse:d.noop,fn:d.program(1,i,l),data:l},o=a.linkTo,p=o?o.call(e,"index",h):m.call(e,"linkTo","index",h),(p||0===p)&&(c+=p),c+="\n  ",h={hash:{},inverse:d.noop,fn:d.program(3,r,l),data:l},o=a.linkTo,p=o?o.call(e,"items.index",h):m.call(e,"linkTo","items.index",h),(p||0===p)&&(c+=p),c+="\n  ",h={hash:{},inverse:d.noop,fn:d.program(5,s,l),data:l},o=a.linkTo,p=o?o.call(e,"items.new",h):m.call(e,"linkTo","items.new",h),(p||0===p)&&(c+=p),c+="\n</nav>\n\n",(p=a.outlet)?p=p.call(e,{hash:{},data:l}):(p=e.outlet,p=typeof p===u?p.apply(e):p),c+=f(p)+"\n"}),this.HandlebarsTemplates.application}.call(this);