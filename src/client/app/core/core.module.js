(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate', 'ngSanitize', 'ngStorage',
      'blocks.exception', 'blocks.logger', 'blocks.router',
      'ui.router', 'ngplus'
    ]);
})();
