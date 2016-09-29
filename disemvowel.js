var str = "happy birthday";
var array = str.split('');
var vowels = ['a', 'e', 'i', 'o', 'u'];

var callback = function(el, i, arr){
  vowels.includes(el) ? arr.splice(i, 1) : true;
};

array.map(callback);

console.log(array.join(""));
