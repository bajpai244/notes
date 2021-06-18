#Theta Notation

theta(g(n)) gives us the exact bound for any function f(n);

A function f(n) has exact bound as theta(n) if there exists two constants c1 & c2, 
c1>0 c2>0 and there exists an input set {n:n>=n0}

such that:

c1g(n) <= f(n) <=c2g(n)

So what, here c1g(n) is acting as an upper bound while c2g(n) is acting as an lower bound.

And we know that our function will grown only in the range permitted by these two bounds.

Now for theta notation to work, we can easily see here that the function's BigO and BOmega must have the same order of growth! {because both of them are using g(n) to represetn their order of growth}

Which means that we need a g(n) which can be used to represent both the BigO and BigOmega for a function f(n).
