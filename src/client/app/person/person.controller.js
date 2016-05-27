(function() {
  'use strict';

  angular
    .module('app.person')
    .controller('PersonController', PersonController);

  PersonController.$inject = ['logger', '$localStorage', '$stateParams', 'filterFilter'];
  /* @ngInject */
  function PersonController(logger, $localStorage, $stateParams, filterFilter) {
    var pvm = this;
    var paramId = $stateParams.id;
    var filterArray = [];
    pvm.person = {};

    activate();

    function activate() {
      getPerson(paramId);
      logger.info('Activated Person View');
    }

    function getPerson(pId) {
      if ($localStorage.contacts) {
        filterArray = filterFilter($localStorage.contacts, {id: pId});
        pvm.person = filterArray[0];
        return pvm.person;
      } else {
        logger.error('Ah Snap!');
      }
    }
  }
})();
