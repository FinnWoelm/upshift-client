import { test } from 'qunit';
import moduleForAcceptance from 'upshift/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should tell the world that we are working on something big.', function (assert) {
  visit('/');
  andThen(function() {
    assert.notEqual(
      find('h1').text().toLowerCase().indexOf("we are working on something big"),
      -1,
      'contains our message for the world');
  });
});
