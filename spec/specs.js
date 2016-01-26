describe('Movies', function() {
  it("selects the name of a movie", function() {
    var testMovies = new Movies ("Star Wars");
    expect(testMovies.nameMovie).to.equal("Star Wars");
  });

  it("selects the time of a movie", function() {
    var testMovies = new Movies ("Star Wars", "12:00");
    expect(testMovies.timeMovie).to.equal("12:00");
  });

  it("selects the age of viewer", function() {
    var testMovies = new Movies ("Star Wars", "12:00", 16, []);
    expect(testMovies.age).to.equal(16);
    expect(testMovies.displayMovie).to.eql([]);
  });

  it("adds the full price method to the time and selections", function() {
    var testMovies = new Movies ("Star Wars", "12:00", 13, []);
    expect(testMovies.fullPrice()).to.equal("$5");
  });

});
