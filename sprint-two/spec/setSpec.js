describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should work with numbers', function() {
    set.add(1);
    set.add(2);
    set.remove(2);
    expect(set.contains(2)).to.equal(false);
  });

  it('should allow multiple additions of the same value, but remove all instances when remove is called', function() {
    set.add('monkey');
    set.add('gorilla');
    set.add('monkey');
    set.remove('monkey');
    expect(set.contains('monkey')).to.equal(false);
  });


});
