function add(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    throw new Error("All arguments must be numbers");
  }
  return a + b + c;
}
function multiply(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a * b * c;
}
function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a - b;
}
module.exports = { add, multiply, subtract };
