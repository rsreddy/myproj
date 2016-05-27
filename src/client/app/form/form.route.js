(function() {
  'use strict';

  angular
    .module('app.form')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'form',
        config: {
          url: '/form/:id',
          resolve: {
            person: ['$stateParams', '$localStorage', function ($stateParams, $localStorage) {
              var result;
              for (var i = 0; i < $localStorage.contacts.length; i++) {
                if (($localStorage.contacts[i].id).toString() === $stateParams.id) {
                  result = $localStorage.contacts[i];
                }
              }
              return result;
            }]
          },
          templateUrl: 'app/form/form.html',
          controller: 'FormController',
          controllerAs: 'fvm',
          title: 'form'
        }
      }
    ];
  }
})();
