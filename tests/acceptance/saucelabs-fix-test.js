import { describe, it, beforeEach, afterEach } from 'mocha';
import startApp from 'upshift/tests/helpers/start-app';
import destroyApp from 'upshift/tests/helpers/destroy-app';

describe('Sauce Labs Fix', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  /**
   * This is the most pointless acceptance test. We are just making everything
   * wait for a second. This is because our few existing tests sometimes execute
   * so fast that Sauce Labs considers them as failed when they have actually
   * passed.
   *
   * We can probably remove this once we have some more tests.
   **/

  it('should wait a second to make sure Sauce Labs registers the result', function(done) {
    this.timeout(15000);
    setTimeout(function(){
      done();
    }, 10000);
  });
});
