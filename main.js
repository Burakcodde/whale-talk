let input = "turpentine and turtles";

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let x = 0; x < input.length; x++) {
  if (input[x] === "e") {
    resultArray.push(input[x]);
  }

  if (input[x] === "u") {
    resultArray.push(input[x]);
  }

  for (y = 0; y < vowels.length; y++) {
    if (input[x] === vowels[y]) {
      resultArray.push(vowels[y]);
    }
  }
}

console.log(resultArray);

let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
