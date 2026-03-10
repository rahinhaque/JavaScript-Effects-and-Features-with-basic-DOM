let isStatus =  document.querySelector("h5");
let addFriend = document.querySelector("#add");
let check = 0;

addFriend.addEventListener('click' , function(){
  if(check == 0){
    isStatus.innerText = "Friends";
    isStatus.style.color = "lightskyblue";
    addFriend.innerText = "Remove";
    check = 1;
  }else if(check == 1){
    isStatus.innerText = "Stranger";
    isStatus.style.color = "lightcoral";
    addFriend.innerText = "Add Friends";
    check = 0;
  }
});

document.getElementById("next").addEventListener('click' , ()=>{
  window.location.assign('insta.html')
})





