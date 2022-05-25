const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
console.log(result);

function checkAdult(age) {
  return age >= 18;
}