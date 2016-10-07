function processData(input) {
  const [meal, tip, tax] = input.split('\n');
  const tipAmt = meal * (tip/100);
  const taxAmt = meal * (tax/100);
  const totAmt = Math.round(+meal + tipAmt + taxAmt);
  console.log(`The total meal cost is ${totAmt} dollars.`);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
