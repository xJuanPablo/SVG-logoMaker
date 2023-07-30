const Triangle = require('../lib/triangle')

describe('triangle', () => {
  describe('black Triangle', () => {
    it('should render triangle string', () => {
      const circle = new Triangle({
        logoName: 'pic',
        logoTextColor: 'black',
        logoColor: 'black',
        logoShape: 'triangle'
      });
      expect(circle.render()).toEqual(
        `<polygon points="100 0, 0 ,0 50, 100" fill="black" />`
      );
    });
  });
});