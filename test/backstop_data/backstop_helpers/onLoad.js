module.exports = function(casper) {
  casper.evaluate(function() {
    document.body.style['-webkit-font-smoothing'] = 'none';
  })
}
