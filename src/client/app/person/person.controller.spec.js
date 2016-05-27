/* jshint -W117, -W030 */
describe('PersonController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.person');
    bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
  });

  beforeEach(function() {
    controller = $controller('PersonController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Person controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    // describe('after activate', function() {
    //   it('should have title of Dashboard', function() {
    //     expect(controller.title).to.equal('Dashboard');
    //   });

    //   it('should have logged "Activated"', function() {
    //     expect($log.info.logs).to.match(/Activated/);
    //   });

    //   it('should have at least 1 person', function() {
    //     expect(controller.people).to.have.length.above(0);
    //   });

    //   it('should have people count of 9', function() {
    //     expect(controller.people).to.have.length(7);
    //   });
    // });
  });
});
