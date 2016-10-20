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
    let numerator = parseInt(readLine());
    let max = 0, count = 0;
    while(true){
      const quotient = numerator >> 1;
      const remainder = numerator%2;
      if(remainder === 1) count += 1; else count = 0;
      if(count > max) max = count;
      if(quotient !== 0) numerator = quotient; else break;
    }
    console.log(max);
}
