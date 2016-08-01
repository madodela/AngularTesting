describe('main controller', function() {
  it('should display a welcome message', function() {
    var homepage = new HomePage();
    homepage.get();
    expect(homepage.pageHeading.getText()).toEqual('Welcome to this pizza store!');
  });
});
