const test = require("tape");

const square = (n) => {
  if (n == 0 || n == 1) {
    return n;
  }

  return n * n;
};

test("check square utility", (t) => {
  t.plan(2);

  t.equal(square(0), 0); // to make sure code-coverage is 100%
  t.equal(square(2), 4);
});
