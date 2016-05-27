/* jshint -W117, -W030 */
describe('person routes', function() {
  describe('state', function() {
    var view = 'app/person/person.html';

    beforeEach(function() {
      module('app.person', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should map state person to url / ', function() {
      expect($state.href('person', {})).to.equal('/');
    });

    it('should map /person route to person View template', function() {
      expect($state.get('person').templateUrl).to.equal(view);
    });

    it('of person should work with $state.go', function() {
      $state.go('person');
      $rootScope.$apply();
      expect($state.is('person'));
    });
  });
});
