let arr = [];

for (var i = 0; i < 10; i++) {

    arr[i] = Math.floor(Math.random() * 900) + 100;
}
console.log(arr);

var temp;

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}
console.log("Sorted Array: " + arr);
console.log("2nd Maximum number: " + arr[arr.length - 2] + "\n2nd Minimum number: " + arr[1]);