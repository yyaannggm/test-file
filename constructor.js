
function Number(num) {
  this._num = num
}

Number.prototype = {
  get num() {
    return this._num;
  },

  set num(num) {
    this._num = num;
  }
}

var test = new Number(1);
console.log(test.num);
test.num = 11;
console.log(test.num);
