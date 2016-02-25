"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
//const FAHARRAY = ["fa", "fah", "fahr", "fahre", "fahren", "fahrenh", "fahrenhe", "fahrenhei", "fahrenheit"];
const CELARRAY = ["ce", "cel", "cels", "celsi", "celsiu", "celsius"];

function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^\s*([-+]?\s*?\d+(?:\.\d*)?\s*(?:[Ee]\s*[+-]?\s*\d+)?)?\s*((c(e(l(c(i(u(s)?)?)?)?)?)?)|(f(a(h(r(e(n(h(e(i(t)?)?)?)?)?)?)?)?)?))\s*$/i;
  var m = temp.match(regexp);
  var cel_all_perms = [];

  CELARRAY.forEach(function(entry){
      Array.prototype.push.apply(cel_all_perms, find_string_perms(entry));
  })

  if (m) {
    var num = m[1].replace(/\s*/g, "");
    var type = m[2];
    var exp = false;

    if (num.match(/[Ee]/))
      exp = true;

    num = parseFloat(num);

    if (cel_all_perms.indexOf(type) != -1) {
      result = (num * 9/5)+32;
      if(exp)
         result = result.toExponential().replace(/\.(\d\d)(\d*)/, "\.$1");
      else
         result = result.toFixed(1);
      result = result +" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      if(exp)
         result = result.toExponential().replace(/\.(\d\d)(\d*)/, "\.$1");
      else
         result = result.toFixed(1);
      result = result +" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}

function find_string_perms(word){
  var split_word = word.split("");
  var allPerms = [];

  for (var i = 0, l = 1 << split_word.length; i < l; i++) {
    for (var j = i, k = 0; j; j >>= 1, k++) {
      split_word[k] = (j & 1) ? split_word[k].toUpperCase() : split_word[k].toLowerCase();
    }
    var st = split_word.join("");
    var array_st = [st];
    Array.prototype.push.apply(allPerms, array_st);
  }
  return allPerms;
}
