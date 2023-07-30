const Square = require('../lib/square')

describe('Square', () => {
  describe('Orange Circle', () => {
    it('should render square string', () => {
      const circle = new Square({
        logoName: 'pic',
        logoTextColor: 'black',
        logoColor: 'orange',
        logoShape: 'square'
      });
      expect(circle.render()).toEqual(
        `<rect width="100" height="100" rx="15" fill="orange" />`
      );
    });
  });
});