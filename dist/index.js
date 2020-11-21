/*!
 * name: @jswork/next-indent
 * description: Indent string with indent-string.
 * homepage: https://github.com/afeiship/next-indent
 * version: 1.0.0
 * date: 2020-11-21 09:28:48
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var indentString = require('indent-string');

  nx.indent = indentString;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.indent;
  }
})();
