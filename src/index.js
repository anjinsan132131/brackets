module.exports = function check(str, bracketsConfig) {
  let array = [];
  let brackets = new Map(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    if (str[i] == brackets.get(array[array.length - 1])) {
      array.pop();
    } else {
      array.push(str[i]);
    }
  }

  if(array.length !== 0) {
    return false;
  } else {
    return true;
  }
};