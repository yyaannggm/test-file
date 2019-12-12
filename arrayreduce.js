Array.prototype.reduce = Array.prototype.reduce || function (callback, initialValue) {
  var previous = initialValue, k = 0, length = this.length;
  if (typeof initialValue === "undefined") {
    previous = this[0];
    k = 1;
  }

  if (typeof callback === "function") {
    for (k; k < length; k++) {
      this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
    }
  }
  return previous;
};


Array.prototype.reduceRight = Array.prototype.reduceRight || function (callback, initialValue) {
  var length = this.length, k = length - 1, previous = initialValue;
  if (typeof initialValue === "undefined") {
    previous = this[length - 1];
    k--;
  }
  if (typeof callback === "function") {
    for (k; k > -1; k -= 1) {
      this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
    }
  }
  return previous;
};