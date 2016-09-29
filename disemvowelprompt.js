const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What would you like to disemvowel? ', (answer) => {
  var array = answer.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  var callback = function(el, i, arr){
    vowels.includes(el) ? arr.splice(i, 1) : true;
  };

  array.map(callback);

  console.log(array.join(""));

  rl.close();
});
