let testButton = document.querySelector("#test-button");

testButton.addEventListener("click", testCode);

function testCode() {
  console.log("Button Clicked");
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

function successCallback(position) {
  const latitude = position.coords.latitude;
  console.log("Latitude: " + latitude);
}

function errorCallback(error) {
  console.log(error.message);
}
