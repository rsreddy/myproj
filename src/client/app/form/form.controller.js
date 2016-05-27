(function() {
  'use strict';

  angular
    .module('app.form')
    .controller('FormController', FormController);

  FormController.$inject = ['logger', '$localStorage', '$stateParams'];
  /* @ngInject */
  function FormController(logger, $localStorage, $stateParams) {
    var fvm = this;
    var list = $localStorage.contacts;
    var contacts = [];

    fvm.submit = submit;
    fvm.user = {};

    function submit() {
      logger.info('Activated Form View');
      if (list) {
        if (containsObject(list)) {
          console.log('test');
          populate();
          //update
          //push new object to local storage
        } else {
          contacts = list;
          fvm.user.id = list.length + 1;
          list.push(fvm.user);
        }
      }
      //go to dashboard
    }

    function containsObject(obj, list) {
      console.log('in containsObject');

    }

    function upsertObj() {
      console.log('in upserObj');
    }

    function populate() {
      console.log('in poulate');
    }
  }
})();
