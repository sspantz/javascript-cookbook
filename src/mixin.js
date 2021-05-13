/**
 *
 * @param {Object} receiver
 * @param {Object supplier
 * @returns {Object}
 *
 */
function mixin(receiver, supplier) {
  for (let prop in supplier) {
    if (supplier.hasOwnProperty(prop)) {
      receiver[prop] = supplier[prop];
    }
  }
  return receiver;
}