function add(a, b, c) {
  if (a === undefined || b === undefined || c === undefined) {
    throw new Error("add() now requires 3 arguments");
  }
  return a + b + c;
}

function multiply(a, b, c) {
  if (a === undefined || b === undefined || c === undefined) {
    throw new Error("multiply() now requires 3 arguments");
  }
  return a * b * c;
}
module.exports = { add, multiply };
