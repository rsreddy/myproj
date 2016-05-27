(function() {
  'use strict';

  angular
    .module('app.person')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'person',
        config: {
          url: '/:id',
          templateUrl: 'app/person/person.html',
          controller: 'PersonController',
          controllerAs: 'pvm',
          title: 'person'
        }
      }
    ];
  }
})();
