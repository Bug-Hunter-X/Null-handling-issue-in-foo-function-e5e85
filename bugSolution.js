function foo(a, b) {
  if (a == null || b == null) {
    return;
  }
  // ...
}

//or with Optional Chaining (ES2020 and later)

function foo(a, b) {
  if (a?.length === 0 || b?.length === 0){
    return;
  }
  // ...
}