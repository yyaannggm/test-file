Array.prototype.every = Array.prototype.every || function (fn, context) {
  var passed = true;
  if (typeof fn === "function") {
    for (var k = 0, length = this.length; k < length; k++) {
      if (passed === false) break;
      passed = !!fn.call(context, this[k], k, this);
    }
  }
  return passed;
};