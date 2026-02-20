function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;

console.log("testing");

if (require.main === module) {
  console.log(greet("world"));
}
