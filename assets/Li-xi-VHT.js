let home = document.getElementById("home");
let spin = document.getElementById("spin");
let buttonConfirm = document.getElementById("button-confirm");
let buttonDefault = document.getElementById("buttonDefault");
let spinVideo = document.getElementById("myVideo");
let spinReward = document.getElementById("spinReward");
let reward = document.getElementById("reward");
let myVideo5 = document.getElementById("myVideo5");
let getReward = document.getElementById("getReward");
let myVideo6 = document.getElementById("myVideo6");
let activeButton1 = document.getElementById("active-button1");
let activeButton2 = document.getElementById("active-button2");
let firework1 = document.getElementById("firework1");
let firework2 = document.getElementById("firework2");
let firework3 = document.getElementById("firework3");
let firework4 = document.getElementById("firework4");

console.log(home);
console.log(spin);
console.log(buttonConfirm);
buttonConfirm.onclick = () => {
    home.classList.add('hidden-video');
    spin.classList.remove('hidden-video');
}
buttonDefault.onclick = () => {
  spinVideo.play();
  activeButton1.classList.remove('hidden-video');
  activeButton2.classList.remove('hidden-video');
  buttonDefault.classList.add('hidden-video');
  firework1.classList.add("firework-animation");
  firework2.classList.add("firework-animation");
  firework3.classList.add("firework-animation");
  firework4.classList.add("firework-animation");
  
  setTimeout(() => {
    spinVideo.pause();
    spinReward.classList.add('hidden-video');
  }, 7400);

  setTimeout(() => {
    myVideo5.classList.remove('hidden-video');
    myVideo5.play();
  }, 7450);
  setTimeout(() => {
    getReward.classList.remove('hidden-video');
  }, 15900);
}

getReward.onclick = () => {
  setTimeout(() => {
    getReward.classList.add('hidden-video');
    myVideo5.classList.add('hidden-video');
    myVideo5.pause();
    myVideo6.classList.remove("hidden-video");
    myVideo6.play();
  }, 50);
}