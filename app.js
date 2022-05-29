 myArr = [
   "https://www.instagram.com/",
   "https://www.youtube.com/",
   "https://www.facebook.com/",
   "https://www.reddit.com/",
 ];

let counter = 0;

document.getElementById("myButton").addEventListener("click", pushData);

function pushData() {
  var inputText = document.getElementById("inputText").value;
  myArr.push(inputText);

  console.log(myArr);
}

pushData();

chrome.tabs.query(
  {
    active: true,
    lastFocusedWindow: true,
  },
  function (tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    function checkArray() {
      for (i = 0; i < myArr.length; i++) {
        if (tab.url == myArr[i]) {
            console.log("ohhhhh you in troble mah boy");
            counter++;
            console.log(counter);
            window.alert("YOU'VE BREACHED THE TRUST "+ counter +" TIMES" );
        } else {
          console.log("u chillen");
        }
      }
    }
    checkArray();
    console.log(tab.url);
  }
);
