// a = new Date();
// properF = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
// console.log(properF);

// b = document.getElementById("time").innerHTML = properF;
// console.log(b);

secondH = document.querySelector(".secondHeading");

var realtime = new Date();
let count = 0;
other.onclick = function () {
  count++;
  // console.log(count);
};

timeof = () => {
  a = new Date();
  properF = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  //   console.log(properF);

  b = document.getElementById("time").innerHTML = properF;
  //   console.log(b);
};
setInterval(timeof, 1000);

other.addEventListener("click", function () {
  console.log("you got clicked");
  invisibleFile = document.getElementsByClassName("OtherCity");
  if (count % 2 !== 0) {
    invisibleFile[0].style.display = "block";
  } else {
    invisibleFile[0].style.display = "none";
  }
});
let count2 = 0;
london.onclick = function () {
  count2++;
};

london.addEventListener("click", function () {
  console.log("london got clicked");
  londonPara = document.getElementsByClassName("timepara");
  if (count2 % 2 !== 0) {
    londonPara[0].innerHTML = timeOfLondon;
  } else {
    londonPara[0].innerHTML = "";
  }
  // document.getElementById("time").innerHTML = timeOfLondon;
});

let count3 = 0;
New_York.onclick = function () {
  count3++;
};

New_York.addEventListener("click", function () {
  console.log("New York got clicked");
  newYorkPara = document.getElementsByClassName("timepara");
  if (count3 % 2 !== 0) {
    newYorkPara[1].innerHTML = timeOfNewyork;
  } else {
    newYorkPara[1].innerHTML = "";
  }
});

//
//
//
//
//
//
//
var timeOfLondon = realtime.toLocaleTimeString("en-In", {
  timeZone: "Europe/London",
});
console.log(timeOfLondon);

var timeOfNewyork = realtime.toLocaleTimeString("en-IN", {
  timeZone: "America/New_York",
});
console.log(timeOfNewyork);
