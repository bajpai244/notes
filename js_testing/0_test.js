const assert = require("assert");
const { count } = require("console");

const fs = require("fs");

count_lines((err, n) => {
  assert.ifError(err);
  assert.equal(n, 3);
});

function count_lines(cb) {
  fs.readFile("file.txt", "utf8", (err, src) => {
    if (err) cb(err);
    else cb(null, src.trim().split("\n").length); // trimming string to release the trailing empty string

    //else cb(null, src.split("\n").length);
    // the number of lines in the file is 3, but the split method will make an array of size of 4 { it will have a last string as empty }, hence an error
  });
}
