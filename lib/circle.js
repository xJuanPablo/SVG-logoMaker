const Shapes= require('./shapes');

class Circle extends Shapes{
  constructor(logoName, logoTextColor, logoColor, logoShape){
    super(logoName, logoTextColor, logoColor, logoShape)
    
  }
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.logoColor}" />`;
}
};

module.exports= Circle;