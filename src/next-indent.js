(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var indentString = require('indent-string');

  nx.indent = indentString;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.indent;
  }
})();
