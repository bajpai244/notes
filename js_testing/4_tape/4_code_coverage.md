## Code Coverage

Code Coverage helps us to understand that how much of our total code is being tested.

We should try to aim for 100%.

There are a lot of times when we can have soem dead code { code which isn't executed } or some conditional that can decrease the percentage of our total code run.

for example:

```javascript

const test = require('tape')

const square = (n) => {

if( n==0 || n==1 ) {
 return n
}

return n*n

}

test('check square utility', (t) => {

t.plan(1)

t.equal(square(2),4)

})

```

Here our test coverage is not 100%, as the code in the `if` block is not being tested.

We can use tools like [nyc](https://github.com/istanbuljs/nyc) to check our code coverage.

To use `nyc`, we can use the following commands:

1. `npx nyc node test.js`
2. `npx nyc tape *.js`
