function processData(input) {
  const n = +input;
  console.log(factorial(n));
} 

function factorial(n){
  if(n <= 1){
    return 1;
  }else{
    return n * factorial(n - 1);
  }
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
