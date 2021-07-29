# Setup and Teardown

A lot of the time we need to have a setup before we can start performing our tests, for example it can be adding event listeners or rolling up a server.

This thing is called the setup for your tests.

```javascript
const test = require('tape')

test('setup',(t) => {
// ... code for your setup

t.end()
})
```

This is not some magic, you are just adding a test by the name setup and **running i t before anyother test.**

Similary you can have your last test by the name teardown.

```javascript
const test = require('tape')

test('teardown',(t) => {
// ... code for your setup

t.end()
})
```

Just like any normal test, **you have to end or plan assertions in your setup and teardown.**

If you want to have your setup and teardown in different files then **if you are using tap/tape** then you can list your setup aaa.js and teardown as zzz.js.

This is because your files when tested a whole bunch are alphabetically sorted, so you have to make sure that you setup files is the first file in the sorted Array and you teardown file is the last file in the sorted Array.

