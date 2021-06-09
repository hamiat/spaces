window.onload = init();

function init() {
  const toLevelThree = document.querySelector("#door-to-level-three");

  toLevelThree.addEventListener("click", nextLevel);

  function nextLevel() {
    
    location.href = "level-three.html";
  }

}
