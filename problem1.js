/* If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

function sumMultiples(num) {
  if (num < 3) return 0;
  if (num < 6) return 3;
  const max = num - 1;
  const min = 2;
  const numArr = Array.from(Array(max-min+1).keys(), (i) => i + min);
  const multiplesArr = numArr.filter((i) => i % 3 == 0 || i % 5 == 0)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return multiplesArr.reduce(reducer);
}

// Test
console.log(sumMultiples(10) == 23 ? 'Pass' : 'Fail');
console.log(sumMultiples(1) == 0 ? 'Pass' : 'Fail');
console.log(sumMultiples(3) == 3 ? 'Pass' : 'Fail');
console.log(sumMultiples(6) == 8 ? 'Pass' : 'Fail');
console.log(sumMultiples(11) == 33 ? 'Pass' : 'Fail');
console.log(sumMultiples(13) == 45 ? 'Pass' : 'Fail');
