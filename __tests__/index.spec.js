(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.indent', function () {
      nx.indent('hello');
      nx.indent('hello', 2);
      expect(nx.indent('hello')).toBe(' hello');
      expect(nx.indent('hello', 2)).toBe('  hello');
    });
  });
})();
