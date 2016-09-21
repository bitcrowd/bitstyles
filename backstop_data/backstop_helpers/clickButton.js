module.exports = function(casper) {
  const TRANSITION_DURATION = 1000;

  casper.click('.o-button');
  casper.wait(TRANSITION_DURATION);
}
