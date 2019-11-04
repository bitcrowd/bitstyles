/* eslint-env browser */
module.exports = function(casper) {
  casper.evaluate(() => {
    document.body.style['-webkit-font-smoothing'] = 'none';
  });
};
