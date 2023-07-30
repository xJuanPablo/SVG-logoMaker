const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

const CreateShape = (data) =>{
  const {logoShape} = data;
switch (logoShape){

  case 'circle':
    const createCircle =new Circle(data);
    return createCircle;
    break;

    case 'triangle':
      const createTriangle = new Triangle(data);
      return createTriangle;
      break;

      case 'square':
        const createSquare = new Square(data);
        return createSquare;
        break;

        default :
        return 'Please choose a shape'
        break;
}
};

module.exports = { CreateShape };