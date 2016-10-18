/* jshint devel:true */
/* global A11yDialog:true */
/* eslint prefer-arrow-callback: ["error", { "allowNamedFunctions": true }] */
window.addEventListener('styleguide:onRendered', function initModal() {
  const dialogElement = document.getElementById('dialog_1');

  if (dialogElement === null) {
    return;
  }

  const dialog = new A11yDialog(dialogElement);
  const bodyElement = document.querySelector('body');
  const cancelButtonElement = document.getElementById('#cancel_button');
  const okButtonElement = document.getElementById('#ok_button');

  const BODY_CLASS = 't-no-overflow';
  const CANCEL_CLASS = 'c-modal--animation-cancel';
  const OK_CLASS = 'c-modal--animation-ok';

  const DIALOG_SHOW_EVENT = 'dialog:show';
  const DIALOG_HIDE_EVENT = 'dialog:hide';
  const CLICK_EVENT = 'click';
  const TRANSITION_END_EVENT = 'transitionend';

  dialogElement.addEventListener(DIALOG_SHOW_EVENT, function dialogShow() {
    bodyElement.classList.add(BODY_CLASS);
  });

  dialogElement.addEventListener(DIALOG_HIDE_EVENT, function dialogHide() {
    bodyElement.classList.remove(BODY_CLASS);
  });

  dialogElement.addEventListener(TRANSITION_END_EVENT, function removeAnimationClasses() {
    // Ensure the element is really not visible — some browsers fire before visibility == hidden,
    // so the modal flies back across the screen.
    window.setTimeout(function delayedRemoveAnimationClasses() {
      dialogElement.classList.remove(OK_CLASS);
      dialogElement.classList.remove(CANCEL_CLASS);
    }, 100);
  });

  if (okButtonElement !== null) {
    okButtonElement.addEventListener(CLICK_EVENT, function onOkClick() {
      dialogElement.classList.add(OK_CLASS);
      dialog.hide();
    });
  }

  if (cancelButtonElement !== null) {
    cancelButtonElement.addEventListener(CLICK_EVENT, function onCancelClick() {
      dialogElement.classList.add(CANCEL_CLASS);
      dialog.hide();
    });
  }
});
