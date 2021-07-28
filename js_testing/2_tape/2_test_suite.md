## Creating a Test Suite

Instead of having all of our test in one file we can distribute them over individual files, and then we can use a testing library like `tape` or `tap` to run them all.

So, one file can be:

1. square.js

```
const test = require('tape')

const square = (num) => num*num

// the first arg is the name of the test

test('check square utility is working', (t) => {

t.plan(3) // we are gonna run assertion 3 test points

t.equal(square(2),4)  //test point 1
t.equal(square(3),9)  //test point 2
t.equal(square(4),16)  //test point 2

} )

```

Another can be like:

2 add.js

```
const test = require('tape')

const add = (x,y) => (x+y) 

test('check add utility is working',(t) => {

t.plan(3)

t.equal(add(1,1),2) // test point 1
t.equal(add(1,2),3) // test point 1
t.equal(add(1,3),4) // test point 1

})

```

So, now we have splitted our tests for square and add utilities and we now have:
- 2 tests
- 3 test points each { assertions }

The above nomenclature of Tests and Test points is something that I took from TAP specification but tape or tap will show us 6 tests if we run both the tests { meaning it will consider each assertion as individual tests, which also makes sense in a way } 

We can run these tests individually or we can run them all together.

`tape *.js`

with the help of this wildcard we can run all them together { use npx tape if you don't have it installed globally }

Another thing that we can do is that we can have an `index.js` file and export all of the utilities that we want to test from there.
