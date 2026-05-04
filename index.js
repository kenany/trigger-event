const createEvent = require('create-event');
const document = require('global/document');
const isString = require('lodash.isstring');

/**
 * Trigger an event of `type` on an `el` with `options`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Object} options
 */
function triggerEvent(el, type, options) {
  if (isString(el)) {
    options = type;
    type = el;
    el = document;
  }

  const e = createEvent(type, options);

  el.dispatchEvent ? el.dispatchEvent(e) : el.fireEvent(`on${type}`, e);
}

module.exports = triggerEvent;
