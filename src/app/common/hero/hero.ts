import { module } from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';

let heroModule = module('hero', [
  uiRouter
])

.component('hero', heroComponent)

.name;

export default heroModule;
