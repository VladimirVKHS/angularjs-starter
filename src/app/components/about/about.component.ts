const template = require('./about.html');
import controller from './about.controller';
import './about.scss';

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default aboutComponent;