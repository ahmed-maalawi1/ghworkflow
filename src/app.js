function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;

console.log("test push-pr ci file");

if (require.main === module) {
  console.log(greet("world"));
}
