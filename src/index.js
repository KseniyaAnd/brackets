module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketParis = {};

  for (const pair of bracketsConfig){
    bracketParis[paris[1]]=pair[0];
  }

  for (const char of str){
    if (bracketParis[char] !== undefined){
      const expectedBracket = bracketParis[cher];
      if (stack.length === 0 || stack.pop() !== expectedBracket){
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
