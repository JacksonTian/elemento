var escodegen = require('escodegen');
// (function (){});
var wrapAst = {
  "type": "ExpressionStatement",
  "expression": {
    "type": "FunctionExpression",
    "id": null,
    "params": [],
    "defaults": [],
    "body": {
      "type": "BlockStatement",
      "body": []
    },
    "rest": null,
    "generator": false,
    "expression": false
  }
};
var code = escodegen.generate(wrapAst);
console.log(code);

var esprima = require('esprima');
var ast = esprima.parse('var create = function () {\nreturn {a: "hello"};\n};\n');
console.log(JSON.stringify(ast, null, 2));
var ast = esprima.parse('var create = function (){\nreturn {};\n};\n');
console.log(JSON.stringify(ast, null, 2));


var ast = esprima.parse('var create = function (){};');
console.log(JSON.stringify(ast, null, 2));

var str = "var create = function (root) {\
  return {\
    root: root,\
    template: (function () {\
      var tpl = document.createElement('template');\
      tpl.innerHTML = '';\
      return tpl;\
    })()\
  };\
};";

var ast = esprima.parse(str);
console.log(JSON.stringify(ast, null, 2));
