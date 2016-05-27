(function() {
  'use strict';

  angular
    .module('app.form')
    .controller('FormController', FormController);

  FormController.$inject = ['logger', 'person', '$state', '$localStorage', 'filterFilter'];
  /* @ngInject */
  function FormController(logger, person, $state, $localStorage, filterFilter) {
    var fvm = this;
    var list = $localStorage.contacts;
    var result = '';
    fvm.person = person;
    fvm.submit = submit;
    fvm.user = {};

    activate();

    function activate() {
      logger.info('Form view Activated');
      if (person) {
        populate();
      }
    }

    function submit() {
      if (person) {
        result = list.indexOf(person);
        list[result] = fvm.user;
      } else {
        fvm.user.id = list.length + 1;
        list.push(fvm.user);
      }
      logger.success('Success');
      $state.go('dashboard');
    }

    function populate() {
      fvm.user.id = person.id;
      fvm.user.name = person.name;
      fvm.user.phone = person.phone;
      fvm.user.email = person.email;
      fvm.user.birthday = person.birthday;
      fvm.user.avatar = person.avatar;
    }
  }
})();
