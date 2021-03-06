process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  const n = parseInt(readLine());
  const r = Array.apply(null, Array(10)).map((_, i) => {
    return `${n} x ${i+1} = ${n*(i+1)}`;
  }).join('\n');
  console.log(r);
}
