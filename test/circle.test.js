const Circle = require('../lib/circle')

describe('Circle', () => {
  describe('Red Circle', () => {
    it('should render circle string', () => {
      const circle = new Circle({
        logoName: 'pic',
        logoTextColor: 'red',
        logoColor: 'red',
        logoShape: 'circle'
      });
      //circle.setColor("red");
      expect(circle.render()).toEqual(
        `<circle cx="50" cy="50" r="50" fill="red" />`
      );
    });
  });
});