const onLoad = require('./onLoad.js');

module.exports = function(casper) {
  onLoad(casper);
  const TRANSITION_DURATION = 1000;

  casper.click('.o-link');
  casper.wait(TRANSITION_DURATION);
}
