/* jshint devel:true */
/* global objectFitImages:true */

const initObjectFit = () => {
  objectFitImages();
};

window.addEventListener('styleguide:onRendered', initObjectFit);
