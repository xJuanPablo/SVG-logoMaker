const Shapes= require('./shapes');

class Triangle extends Shapes{
  constructor(data){
    super(data)
  }
  render(){
    return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.logoColor}" />`;
  }
};

module.exports = Triangle;