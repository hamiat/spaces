
window.onload = init();

function init() {
    const endSwirl = document.querySelector("#end-the-game");
   

    endSwirl.addEventListener("click", endGame);

    function endGame() {
        location.href = "index.html";
    }
  }




