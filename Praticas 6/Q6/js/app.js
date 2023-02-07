function factorial(num) {
  if (num === 0) {
    return 1;
  }
  let result = [1];
  for (let i = 1; i <= num; i++) {
    let carry = 0;
    for (let j = 0; j < result.length; j++) {
      let product = result[j] * i + carry;
      result[j] = product % 10;
      carry = Math.floor(product / 10);
    }
    while (carry > 0) {
      result.push(carry % 10);
      carry = Math.floor(carry / 10);
    }
  }
  console.log(result.reverse().join(''));
}

factorial(5);
