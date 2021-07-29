const test = require("tape");

const add = (x, y) => x + y;

test("check add utility is working", (t) => {
  t.plan(3);

  t.equal(add(1, 1), 2); // test point 1
  t.equal(add(1, 2), 3); // test point 1
  t.equal(add(1, 3), 4); // test point 1
});
