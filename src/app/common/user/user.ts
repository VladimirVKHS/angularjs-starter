import { module } from 'angular';
import UserFactory from './user.factory';

let userModule = module('user', [])

.factory('User', UserFactory)

.name;

export default userModule;
