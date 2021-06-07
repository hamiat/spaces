window.onload = init();

function init() {
  const roofPanel = document.querySelector("#to-level-two");

  roofPanel.addEventListener("click", nextLevel);

  function nextLevel() {
    
    location.href = "level-two.html";
  }

}
