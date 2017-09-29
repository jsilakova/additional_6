module.exports = function zeros(expression) {
  expressionArguments = expression.split('*');
  numOfTwo = 0;
  numOfFive = 0;
  for (l = 0; l < expressionArguments.length; l++) {
    factorialCount = expressionArguments[l].split('!').length - 1;
    num = parseInt(expressionArguments[l]);
    for (m = num; m >= 1;) {
      if (m % 2 == 0) {
        if ((m / 2) % 2 == 0) {
          numOfTwo++;
        }

        numOfTwo++;
      }

      if (m % 5 == 0) {
        if ((m / 5) % 5 == 0) {
          numOfFive++;
        }

        numOfFive++;
      }

      m -= factorialCount;
    }
  }

  if (numOfTwo <= numOfFive) {
    return numOfTwo;
  } else {
    return numOfFive;
  }
};
