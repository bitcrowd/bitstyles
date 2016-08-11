window.addEventListener('styleguide:onRendered', function(event) {
  "use strict";

  var dialogElement = document.getElementById('dialog_1');

  if (dialogElement === null) {
    return
  }

  var dialog = new A11yDialog(dialogElement);
  var bodyElement = document.querySelector('body');
  var cancelButtonElement = document.getElementById('#cancel_button');
  var okButtonElement = document.getElementById('#ok_button');

  var BODY_CLASS = 't-no-overflow';
  var CANCEL_CLASS = 'c-modal--animation-cancel';
  var OK_CLASS = 'c-modal--animation-ok';

  var DIALOG_SHOW_EVENT = 'dialog:show';
  var DIALOG_HIDE_EVENT = 'dialog:hide';
  var CLICK_EVENT = 'click';
  var TRANSITION_END_EVENT = 'transitionend';

  dialogElement.addEventListener(DIALOG_SHOW_EVENT, function dialogShow() {
    bodyElement.classList.add(BODY_CLASS);
  });

  dialogElement.addEventListener(DIALOG_HIDE_EVENT, function dialogHide() {
    bodyElement.classList.remove(BODY_CLASS);
  });

  dialogElement.addEventListener(TRANSITION_END_EVENT, function removeAnimationClasses(event) {
    // Ensure the element is really not visible — some browsers fire before visibility:hidden,
    // so the modal flies back across the screen.
    window.setTimeout(function () {
      dialogElement.classList.remove(OK_CLASS);
      dialogElement.classList.remove(CANCEL_CLASS);
    }, 100);
  });

  okButtonElement.addEventListener(CLICK_EVENT, function onOkClick() {
    dialogElement.classList.add(OK_CLASS);
    dialog.hide();
  });

  cancelButtonElement.addEventListener(CLICK_EVENT, function onCancelClick() {
    dialogElement.classList.add(CANCEL_CLASS);
    dialog.hide();
  });
});
