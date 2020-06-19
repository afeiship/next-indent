/*!
 * name: @feizheng/next-indent
 * description: Indent string with indent-string.
 * homepage: https://github.com/afeiship/next-indent
 * version: 1.0.0
 * date: 2020-06-19T08:54:50.346Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var indentString = require('indent-string');

  nx.indent = indentString;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.indent;
  }
})();

//# sourceMappingURL=next-indent.js.map
