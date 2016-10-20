function processData(input) {
  const data = input.split('\n');
  const num = +data[0];
  const map = {};
  for(let i = 1; i <= num; i++){
    const [name, phone] = data[i].split(' ');
    map[name] = phone;
  }
  for(let j = num + 1; j < data.length; j++){
    const query = data[j];
    const res = map[query] ? `${query}=${map[query]}` : 'Not found';
    console.log(res);
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

// sam=99912222
// Not found
// harry=12299933
