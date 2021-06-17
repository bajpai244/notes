# Big Omega

\* I will use Omega(g(n)) -> to represent Big Omega (g(n)) as it will save time.

So, Big Omega gives us the lower bound for a function, which simply means that:

**the function will atleast have this order of growth.**

so for some function f(n) -> Omega(g(n)), implies that:

for some value c and n>=n0

c(g(n)) <= f(n)

which simply means that the function will atleast have g(n) as it's order of growth!

Omega(1) is in a way the lower bound for every function as no function in the world can grow in less than constant time.

In a function {or a codebase} with multiple branches, Omega(n) must be the order fo growth of the slowest growing branch {the optimized branch}.
