// 判斷是否為數字
function check() {
  var chekc1 = document.getElementById("element1").value;
  var chekc2 = document.getElementById("element2").value;
  var chekc3 = document.getElementById("element3").value;
  if (isNaN(chekc1)) {
    alert("白癡，只准輸入數字啦!");
    document.getElementById("element1").value = "";
  } else if (isNaN(chekc2)) {
    alert("你認真?就說只准輸入數字!");
    document.getElementById("element2").value = "";
  } else if (isNaN(chekc3)) {
    alert("只准輸入數字啦!");
    document.getElementById("element3").value = "";
  }
}

//將數字結合成陣列

function combineArray() {
  var element1 = parseInt(document.getElementById("element1").value);
  var element2 = parseInt(document.getElementById("element2").value);
  var element3 = parseInt(document.getElementById("element3").value);
  if (element1=="") {
    var myArray = [element2, element3];
    document.getElementById("output").innerHTML = myArray;
  } else if (element2 == "") {
    var myArray = [element1, element3];
    document.getElementById("output").innerHTML = myArray;
  } else if (element3 == "") {
    var myArray = [element1, element3];
    document.getElementById("output").innerHTML = myArray;
  } else {
    var myArray = [element1, element2, element3];
    document.getElementById("output").innerHTML = myArray;
  }
//   document.getElementById("output").innerHTML = myArray;
  return myArray;
}

//將陣列裡的數字算成平均
function Average() {
  var arr = combineArray();
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  aver = sum / arr.length;
  document.getElementById("average").innerHTML = aver;
  return aver;
}

//將陣列裡的數字算成變異數
function Variation() {
  var arr = combineArray();
  let average = Average();
  var sum_square = 0;
  for (let j = 0; j < arr.length; j++) {
    sum_square += (arr[j] - average) * (arr[j] - average);
  }
  vary = sum_square / 3;
  document.getElementById("variation").innerHTML = vary;
  return vary;
}

//將陣列裡的數字算成標準差
function Standard_Deviation() {
  var arr = combineArray();
  Var = Variation(arr);
  document.getElementById("sd").innerHTML = Math.sqrt(Var);
  return Math.sqrt(Var);
}
