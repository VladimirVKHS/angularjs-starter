import { module } from 'angular';
import Home from './home/home';
import About from './about/about';

let componentModule = module('app.components', [
  Home,
  About
])

  .name;

export default componentModule;
