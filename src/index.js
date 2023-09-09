module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketPairs = {};

  for (const pair of bracketsConfig){
    bracketPairs[pair[1]]=pair[0];
  }

  for (const char of str){
    if (bracketPairs[char] !== undefined){
      const expectedBracket = bracketPairs[char];
      if (stack.length === 0 || stack.pop() !== expectedBracket){
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
