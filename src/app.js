function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;

console.log("test push-pr ci file __ ??");

if (require.main === module) {
  console.log(greet("world"));
}
