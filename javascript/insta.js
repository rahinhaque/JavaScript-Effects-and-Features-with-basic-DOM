//insta love feature
const con = document.querySelector("#container");
const love = document.querySelector("i");

con.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50% ,-50%) scale(1)"; 
 love.style.color =  "red"
  setTimeout(() => {
    love.style.transform = "translate(-50% ,-50%) scale(0)";
  }, 2000);
});

setTimeout(() => {
  love.classList.remove("translate(-50% ,-50%) scale(0)");
}, 1000);

document.getElementById("next").addEventListener("click", () => {
  window.location.assign("cursor.html");
});
