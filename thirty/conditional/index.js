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
    if(n%2 === 1){
      return console.log('Weird');
    }

    if(n >= 2 && n <= 5){
      return console.log('Not Weird');      
    }

    if(n >= 6 && n <= 20){
      return console.log('Weird');      
    }

    return console.log('Not Weird');      
}

// If  is odd, print Weird
// If  is even and in the inclusive range of 2 to 5 , print Not Weird
// If  is even and in the inclusive range of 6 to 20 , print Weird
// If  is even and greater than 20, print Not Weird
