let isStatus =  document.querySelector("h5");
let addFriend = document.querySelector("#add");
let remove = document.querySelector("#remove");

addFriend.addEventListener('click' , function(){
  isStatus.innerText = "Friend";
  isStatus.style.color = "cornflowerblue";
});

remove.addEventListener("click" , function(){
  isStatus.innerText = "Stranger";
  isStatus.style.color = "red";
})