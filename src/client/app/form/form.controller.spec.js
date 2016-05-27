/* jshint -W117, -W030 */
describe('FormController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.form');
    bard.inject('$controller', '$log', '$q', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('FormController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  // describe('Form controller', function() {
  //   it('should be created successfully', function() {
  //     expect(controller).to.be.defined;
  //   });

  //   // describe('after activate', function() {
  //   //   it('should have title of Dashboard', function() {
  //   //     expect(controller.title).to.equal('Dashboard');
  //   //   });

  //   //   it('should have logged "Activated"', function() {
  //   //     expect($log.info.logs).to.match(/Activated/);
  //   //   });

  //   //   it('should have at least 1 person', function() {
  //   //     expect(controller.people).to.have.length.above(0);
  //   //   });

  //   //   it('should have people count of 9', function() {
  //   //     expect(controller.people).to.have.length(7);
  //   //   });
  //   // });
  // });
});
