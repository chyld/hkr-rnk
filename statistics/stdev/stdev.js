function processData(input) {
  const nums = input.split('\n')[1].split(' ').map(n => +n);
  const len = nums.length;
  const sum = nums.reduce((a,x) => a+x);
  const avg = sum / len;
  const variance = nums.reduce((a,x) => a + Math.pow(x - avg, 2),0);
  const stdev = Math.sqrt(variance / len);
  console.log(stdev.toFixed(1));
}

// *************************************************************** //

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
