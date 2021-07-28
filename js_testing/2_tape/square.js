const test = require("tape");

const square = (num) => num * num;

// the first arg is the name of the test

test("check square utility is working", (t) => {
  t.plan(3); // we are gonna run assertion 3 test points

  t.equal(square(2), 4); //test point 1
  t.equal(square(3), 9); //test point 2
  t.equal(square(4), 16); //test point 2
});
