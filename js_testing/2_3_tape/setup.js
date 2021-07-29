const test = require("tape");
const http = require("http");
const concat = require("concat-stream");
const _ = require("ramda");

let server;

test("setup", (t) => {
  server = http.createServer((req, res) => {
    const n = req.url.slice(1); // this will return us the number from path, i.e 1 from /1 , 2 from /2 etc

    res.end(_.toString(n * n)); // so basically server will return the square of number
    // example if url = base_url/3 then res = 9, if url = base_url/4 res = 16
  });

  server.listen(0, () => {
    t.end();
  }); // when you pass 0, Operating System will provide you a random port
});

test("square of number (via https server)", (t) => {
  t.plan(3);

  const mk_request = make_request(t); // using currying

  mk_request("/1", 1);
  mk_request("/2", 4);
  mk_request("/3", 9);
});

test("teardown", (t) => {
  server.close(() => {
    t.end();
  });
});

const make_request = _.curry((t, path, expected) => {
  const req = http.request(
    { host: "localhost", port: server.address().port, path: path },
    (res) => {
      // now we get a stream back as response { as far as I know }
      // so we will use concat to convert this stream to a buffer

      res.pipe(
        concat((body) => {
          t.equal(Number(body.toString()), expected);
        })
      );
    }
  );

  req.end();
});
