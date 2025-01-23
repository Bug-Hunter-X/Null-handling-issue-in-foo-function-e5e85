# JavaScript Null Handling Bug

This repository demonstrates a common bug in JavaScript related to handling null values.

The `foo` function exhibits unexpected behavior when null is passed as an argument.  This is because null is not strictly equal to undefined in JavaScript, leading to unexpected logic flow.  A simple solution is to use loose equality (==) to include undefined as well or to use optional chaining (?.) for more clarity.

## Bug

The bug is present in `bug.js`.

## Solution

The corrected code is in `bugSolution.js`.