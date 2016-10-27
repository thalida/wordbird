'use strict';

require('./main.scss');
require('./main.html');

angular.module('app')
    .config( require('./main.routes.js') )
    .controller('MainController', require('./main.controller.js') )
