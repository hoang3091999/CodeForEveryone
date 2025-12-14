export function greet(name) {
  return "Hello, " + name + "!";
}

export function multiply(a, b) {
  return a * b;
}
// export { greet, multiply };

function exportDefault() {
  console.log("This is the default export function");
}
export default exportDefault;