(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger', '$localStorage'];
  /* @ngInject */
  function DashboardController($q, dataservice, logger, $localStorage) {
    var vm = this;
    vm.addNew = 'Add New Contact';

    vm.people = [];
    vm.title = 'Dashboard';

    activate();

    function activate() {
      var promises =  [getPeople()];
      return $q.all(promises).then(function() {
        logger.info('Activated Dashboard View');
      });
    }

    function getPeople() {
      if ($localStorage.contacts) {
        vm.people = $localStorage.contacts;
        return vm.people;
      } else {
        return dataservice.getPeople().then(function(data) {
          vm.people = data;
          $localStorage.contacts = data;
          return vm.people;
        });
      }
    }
  }
})();
