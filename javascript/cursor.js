document.getElementById("next").addEventListener("click", () => {
  window.location.assign("multieffect.html");
});


const mainContainer =  document.querySelector("#main");
const cursor = document.querySelector(".cursor");

mainContainer.addEventListener("mousemove" , (event) => {
 cursor.style.left = event.clientX + "px";
 cursor.style.top = event.clientY + "px";
})