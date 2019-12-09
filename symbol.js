let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"


const obj = {
  toString() {
    return 'abc';
  }
};
const symbol = Symbol(obj);
symbol // Symbol(abc)