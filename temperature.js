"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^([-+]?\s*?\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?)?\s*([fFcC])$/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1].replace(/\s*/g, "");
    var type = m[2];
    var exp = false;

    if (num.match(/[Ee]/))
      exp = true;

    num = parseFloat(num);

    if (type == 'c' || type == 'C') {
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
