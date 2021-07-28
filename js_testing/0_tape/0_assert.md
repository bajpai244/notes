## assert

asset is a package that node js provides us, we can use it do some basic testing

```javascript

const assert = require('assert')

assert.equal(1,1) // won't do anything

assert.equal(1,2) // this will raise an execption

// assert.ok(val) checks if val is truthy {1,true,2,"hey",etc}

assert.ok(true) // won't do anything

assert.ok(false) // will throw an execption

```

Some problems with assert that Node js provides is:
1. exceptions stop execution:
	whenever there will be an exception raised the flow of execution will stop there.
2. false positive when test blocks don't run:
	if the block of code that actually runs your test, fail to run { example: you forgot to call them in the script } still the feedback from the testing code will same as would you have got from successfull test.
	
	Another example can be of an empty file, executing it will give you this false realization that all tests ran successfully. { you will still get an exit code of 0 }
