//課題1
const message = 'Hello World' 
console.log(message)

//課題2
var list = ["apple","mango","banana"]
console.log(list)

//課題3
function print(value) {
  console.log(value + '\n');
}//print関数を定義
for (var i = 0; i < list.length; i++) {
  print(list[i]);
}

//課題4
function sumnum() {
  var s = 0;
  for (var i = 1; i <= 100; i++) {
    s += i;
  }
  return s;
}//から100までループして足して結果を返す関数
var sum = sumnum()

console.log(sum);