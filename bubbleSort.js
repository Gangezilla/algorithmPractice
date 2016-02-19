function bubble(arr) {
  var holder = 0;
  for (var i =0; i<arr.length; i++) {
    for (var j=0; j< arr.length-i-1; j++){
      if (arr[j]>arr[j+1]) {
      holder = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = holder;
    }
  }
  console.log(arr);
  }
}

bubble([5,1,4,2,8,100,99]);
