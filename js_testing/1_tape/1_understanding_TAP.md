# About TAP ( Test Anything Protocol )

TAP stands for [test anything protocol](http://testanything.org/)

It was used for testing in programming languages as old as PERL.

As the names suggests it is a protocol which means that it establishes how communication between two/or-more components will happen!

Here, the two Components are:
	1. Tap Producers
	2. Tap Consumers {Harness}

## Tap Producers

Tap Producers are those programs/software-components that can producs TAP **output.**

Tap output is the output that is produced when any test following TAP is executed.

It generally looks like this: 

```
1..N
ok 1 Description # Directive
# Diagnostic
....
ok 47 Description
ok 48 Description
more tests....
```

Here, 1..N tells about our plan { where N denotes the total number of assertions we have }.

Here `ok n` followed means that the assertion was successful and `n` denotes the assertion number.

If the assertion failed then it will produce `not ok n`, here `n` means that assertion number.

Now unlike the the `assert` that comes with Node.js core, Tap:
	1. Will fail until all the planned assertions are executed, which means that number of assertion you claimed in your plan must tally equal to how many were actually executed.
	2. It will not stop execution of other test(s) if one in between fails.

## Tap Consumers

Tap consumers are also called "Harness", they intercept the Tap Output produced by consumers or in other words consumer the output produced by these Producers.

Then they use it to create test reports, they consume the output via standard output which makes the relation between a **Producers and a Consumer is language agnostic.**

They use the concept of [hooking](https://en.wikipedia.org/wiki/Hooking).

## Philosophy

So, the philosophy of TAP is to have a protocol that seperates Production of test outputs { TAP outputs } and the Harness { the softwares that consume this output } which helps us prepare better report from these TAP outputs.

Since they are independent { from each other } hence they make their relation with each other language agnostic.

### Test Points

Each test condition is a Test Point which will be asserted and will produce a test line which will either be `ok` or be `not ok`.

These  statements {`not ok` or `ok`  } will be followed by the Test Point Number.

Then It will be followed by a Description and that will be followed by a Directive.

```
not ok/ok Test-Point-Number Description # Directive 
```

Description is a simple description of what the test point being asserted is testing.

**The Description should not start with a number** as it can confuse the Harness/Consumer to think it is Test Point Number. 

#### Directive

Directive are special notes followed by # {hash} on the test line.

There are 2 directives allowed:
	1. TODO
	2. SKIP

1. TODO tests

a # {directive} followed by **TODO** means that it is a **TODO test.** Text after the word TODO is the explaination.

```
not-ok/ok Test-Point-Number Description # TODO explaination of it {can be why it is in TODO}
```

Anything that is TODO is simply marked as a Test Point, which represents A new feature to be implemented or a bug that needs to be fixed.

So, these test points are expected to fail, but it they do pass then they are marked as a BONUS by the harness.

This bonus is a sign that this test { which we marked as TODO, meaning something we yet have to do } has passed and we should-consider to promote it as a normal test point.

2. SKIP test

If # {directive} is followed by Skip then the test point is marked as to be skipped during test.

The count of SKIP is included in the report by the Harness.

#### Diagnostics

It is some additional information that we can produce. They have to be on seperate lines and have to start with a # { hash }, also don't confuse them with Directives as they are not used to analyze test results.

The Harness is free to display them however.

example:
```
ok 1 - The value of was true
# This marks end of test file 1
# A new Daemon is started on port 2112
```

In this output by the harness everything in lines starting with # is a Diagnostic.

Typically diagnostics are used to provide information about the environment in which test file is running, or to describe a group of tests.

Bibliography:
1. [TAP specification](http://testanything.org/tap-specification.html).

