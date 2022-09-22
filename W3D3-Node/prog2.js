const inputx = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sum = 0;

function getNumber() {
  inputx.question("Enter a number :", (num) => {
    if (num == "stop") {
      inputx.close();
      console.log("The sum is :" + sum);
    } else {
      sum += parseInt(num);
      getNumber();
    }
  });
}
getNumber();
