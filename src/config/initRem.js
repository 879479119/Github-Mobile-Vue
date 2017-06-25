/**
 * we don't debounce the resize function as usual, since it's so rare
 */

(function (doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    cal = function () {
      let clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, cal, false);
  doc.addEventListener('DOMContentLoaded', cal, false);
})(document, window);
