function processData(input) {
  const lines = input.split('\n');
  const n = +lines.shift();
  const ns = lines.splice(0,n);
  const q = +lines.shift();
  const qs = lines.splice(0,q);
  const res = qs.map((qry, idx) => {
    return ns.reduce((acc, str) => {
      return acc + (str === qry ? 1 : 0);
    }, 0);
  });
  console.log(res.join('\n'));
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
