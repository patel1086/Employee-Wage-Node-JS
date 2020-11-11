//Array for Pratice
var arr1=[2,3];
console.log(arr1.length);
console.log(arr1);
var arr2=new Array("Sunday","Monday","Tuesday");
console.log(arr2.length);
console.log(arr2);
console.log(arr2[1]);
console.log(arr2.join());
console.log(arr2.concat(arr1));
console.log(arr2.shift());
console.log(arr2);
console.log(arr2.unshift("Sunday"));
console.log(arr2);
arr2.forEach(function(item,value,array){
    console.log(item,value);
});
console.log(arr2.indexOf("Sunday"));
// console.log(arr2.splice(1));
arr2.splice(0,2)
console.log(arr2);
let arr3=arr2.slice();
console.log(arr3);

let msgArray = []
msgArray[0] = 'Hello'
msgArray[99] = 'world'

if (msgArray.length === 100) {
  console.log('The length is 100.')
}

