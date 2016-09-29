var array = "happy birthday stephanie".split('');
var vowels = ['a', 'e', 'i', 'o', 'u'];

array.map(function(el, i, arr){
  vowels.includes(el) ? arr.splice(i, 1) : true;
});

console.log(array.join(""));
