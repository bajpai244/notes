# Big O

Big O, is the order of growth of a function which is an upper bound for any function.

So let's consider a function f(n) describing an algorithm, let there be another function g(n).

f(n) <= cg(n)

so for some value c and n >= n0

value of f(n) <= cg(n)

which means that once the condition of c and n0 are made, cg(n) will act as an upper bound for our funtion f(n).

Now for example. if a function is f(n) = 3n^2+n

now here g(n)= n^2, c = 4.

f(n) <= 4n^2, for some value of n >= n0,

we can discover the n0 by solving the relation between the two equations.

Now, a number of function can acts as its upper bound, example we can have g(n) = n^3 , c=1 and for some n>=n0, this function will also act as an upper_bound.

So to simplfy the process we take take the function with the lowest order of growth for g(n) as it will provide more accurate analysis.

Now, taking the order of growth of such a function g(n) helps us eliminate the need of always needing a constant c.

This helps us to simply say that the function f(n) in it's worst case will grow with the order of growth of O(n) {Big O of n}

All of these notations are simply there for us to save time when conveying and analysiing complexities of functions.

ex: f(n) = 3n, when can its Big O is O(n) = n.

It simply means that in its worst case the function will grow linearly becuase we know that there will be a function g(n) along with a constant c, with an input set { n: n>=n0 } that will upper bound the function f(n).

since, f(n) <= cg(n), for {n:n>=n0}

so we know that in its worst case f(n) will grow linearly. 

O(n) helps us to come to this conlusion in an easier and faster way as it removes the need of c,g(n) and n0 to express this statemnent.

## Big O for multiple variable functions

f(m,n) => 100n^2 + 1000m + n : O(n^2+m) ---> its Big O
f(m,n) => 1000m^2+ 200mn+ 300m : O(m^2 + mn ) ---> its Big O

Here Big O is letting us understand how the function would grow in it's worst case in terms of its two input variables m and n.

## Use of Big O to represent fastest growing branch.

So what is fastest growing branch?

Our code can branch into multiple intructions on the basis of conditionals, one or more of these branches will have higher order of growththen some others.

The branch which will grow the fastest will be our big O for that whole block of code.

Example let's take a big code blog with two branches A and B.

f(n) -> A if n is even , B is n is odd.

so here intructions in A will be executed if n is even otherwise the instructions in B will be executed.

Let's say A takes O(1) time and B takes O(n^2).

So clearly our Big O is n^2, as in the worst case scenario our function f(n) will grow quadratically.

Big O is only usefull if our function f(n) {or in other words our codebase} has multiple branches in which it can grow.

We can then use the order of growth of the fastest growing branch to represent our worst case scenario, which is our Big O.

I don't know whether "fastest growing branch" is an academic term or not and to be honest I also don't care, I like the name I gave it :) {If I gave it because I think I have heard this term somewhere }
