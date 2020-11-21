(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var indentString = require('indent-string');

  nx.indent = indentString;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.indent;
  }
})();
