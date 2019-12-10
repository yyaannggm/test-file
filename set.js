const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}

const set = new Set([1, 2, 3, 4, 4,]);

console.log([...set]);

const items = new Set([1, 2, 3, 4, 5, 5, 5, 5,]);
console.log(items.size);

const set2 = new Set(document.querySelectorAll('div'));
console.log(set.size);

const set2 = new Set();
document
  .querySelectorAll('div')
  .forEach(div => set.add(div));
console.log(set.size);

let set3 = new Set();
let a = NaN;
let b = NaN;
set3.add(a);
set3.add(b);
console.log(set3)

let set4 = new Set();
set4.add({});
console.log(set4.size);

set4.add({});
console.log(set4.size);