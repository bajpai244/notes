const test = require("tape");

/**
 *test(test_name,arg)
 * test_name is going to be the name of test, arg will have all the methods required to carry on the assertions
 * */

test("test 1", (t) => {
  //t.plan(1); // it decalares that 4 assertions have to run
  t.equal(1, 1);
  t.equal(1, 1);
  t.end();

  // t.end(); // it decalares that the testing has ended, not required if you have test.plan()
});

test("test 2", (t) => {
  t.ok(true, "the value is trusty");

  t.end();
});
