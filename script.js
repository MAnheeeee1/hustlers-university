let dialog = document.querySelector("dialog");
let button = document.querySelector("#closeD");
let dialogbackground = document.querySelector(".dialogbackground");

setTimeout(() => {
  dialogbackground.setAttribute("id", "dialogBg");
  dialog.show();
}, 3000);
button.addEventListener("click", () => {
  dialog.close();
  let dialogbg = document.querySelector("#dialogBg");
  dialogbg.remove();
});
