/* jshint devel:true */
window.addEventListener('styleguide:onRendered', function initExpander() {
  const expanderButtonElement = document.getElementById('expander_button');

  if (expanderButtonElement === null) {
    return;
  }

  const expanderBodyElement = document.getElementById(expanderButtonElement.getAttribute('aria-controls')); // eslint-disable-line max-len
  const HIDDEN_ATTRIBUTE = 'aria-hidden';
  const EXPANDED_ATTRIBUTE = 'aria-expanded';

  let isExpanded = expanderBodyElement.getAttribute(EXPANDED_ATTRIBUTE);

  function hideBody() {
    expanderBodyElement.setAttribute(HIDDEN_ATTRIBUTE, true);
    expanderButtonElement.setAttribute(EXPANDED_ATTRIBUTE, false);
    isExpanded = false;
    expanderButtonElement.focus();
  }

  function showBody() {
    expanderBodyElement.setAttribute(HIDDEN_ATTRIBUTE, false);
    expanderButtonElement.setAttribute(EXPANDED_ATTRIBUTE, true);
    isExpanded = true;
    expanderBodyElement.focus();
  }

  function toggleBody() {
    if (isExpanded) {
      hideBody();
    } else {
      showBody();
    }
  }

  expanderButtonElement.addEventListener('click', toggleBody);
});
