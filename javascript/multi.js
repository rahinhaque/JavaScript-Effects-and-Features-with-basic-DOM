// const elem1 = document.querySelector("#elem1");
// const elemImg = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", (event) => {
//  elemImg.style.left = event.x+"px";
//  elemImg.style.top = event.y+"px";
// });

// elem1.addEventListener("mouseenter", (event) => {
//   elemImg.style.opacity = 1;
// });
// elem1.addEventListener("mouseleave", (event) => {
//   elemImg.style.opacity = 0;
// });

const elem = document.querySelectorAll(".elem");

elem.forEach((event) => {
 
  event.addEventListener("mouseenter" , () => {
   event.childNodes[3].style.opacity = 1;
  })
  event.addEventListener("mouseleave" , () => {
   event.childNodes[3].style.opacity = 0;
  })
  event.addEventListener("mousemove", (e) => {
    event.childNodes[3].style.left = e.x+"px";
    // event.childNodes[3].style.top = e.y+"px";
  });
  
});
