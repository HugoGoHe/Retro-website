function loadImage() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const img = document.createElement("img");
      img.src = this.responseURL;
      if (!document.querySelector("#demo img")) {
        document.getElementById("demo").appendChild(img);
      }
    }
  };
  xhttp.open("GET", "image2.jpg");
  xhttp.setRequestHeader("Content-Type", "image/jpeg");
  xhttp.send();
}

// function playSound() {
//     const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
//     const buttons = document.querySelectorAll("button");
//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//           audio.play();
//         });
//       });
// }