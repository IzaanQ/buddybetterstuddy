var myArr = [];
let currentPage = window.location.href;

document.getElementById("myButton").addEventListener("click", pushData);

function pushData()
{
    var inputText = document.getElementById("inputText").value;

    myArr.push(inputText);
    console.log(myArr);
}

pushData()
