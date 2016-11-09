module.exports = function(casper) {
  const TRANSITION_DURATION = 1000;

  casper.click('.o-link');
  casper.wait(TRANSITION_DURATION);
}
