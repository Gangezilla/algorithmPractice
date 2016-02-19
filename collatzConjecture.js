function collatz(num) {
  var steps = 0;
   var temp = num;
    if (num < 1) {
    console.log ('number is less than 1, invalid!');
    return;
  }
  while (temp > 1){
    if (temp%2==0) {
      steps++;
      temp = temp/2;
      console.log(temp);
    }
    else {
      steps++;
      temp = temp*3+1;
      console.log(temp);
    }
}
  console.log('number of steps for '+num+' is ' + steps + '.');
}
