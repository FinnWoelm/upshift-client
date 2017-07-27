import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'upshift/tests/helpers/start-app';
import destroyApp from 'upshift/tests/helpers/destroy-app';

describe('Acceptance | index', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });


  it('can visit /', function() {
    visit('/');

    andThen(() => {
      expect(currentURL()).to.equal('/');
    });
  });

  it('tells the world that we are working on something big', function() {
    visit('/');
    andThen(() => {
      expect(find("h1").text().toLowerCase()).to.
        include("we are working on something big");
    });
  });
});
