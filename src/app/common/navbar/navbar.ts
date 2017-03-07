import { module } from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

let navbarModule = module('navbar', [
  uiRouter
])

.component('navbar', navbarComponent)

.name;

export default navbarModule;
