window.onload = init();

function init() {
  const toLevelThree = document.querySelector("#door-to-level-three");

  toLevelThree.addEventListener("click", nextGame);

  function nextGame() {
    
    location.href = "level-three.html";
  }

  

}
