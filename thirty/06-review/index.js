function processData(input) {
  const r = input.split('\n').slice(1).map(w => {
    return [...w].reduce((a,l,i) => {
      if(i%2===0) a[0].push(l); else a[1].push(l);
      return a;
    }, [[],[]]).map(a => a.join(''));
  }).join('\n').replace(/,/g, ' ');
  console.log(r);
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
