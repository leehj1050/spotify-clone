let mb_icon = document.querySelector(".menuIcon");

mb_icon.addEventListener("click", () => {
  document.querySelector(".mb_nav").classList.toggle("active");
});

//open n close
OpenClose = () => {
  let list = document.querySelectorAll(".section_4_ul>li");
  let openList = document.querySelectorAll(".openP");
  let openIcon = document.querySelectorAll(".open");
  let closeIcon = document.querySelectorAll(".close");

  for (let i = 0; i <= list.length; i++) {
    list[i].addEventListener("click", () => {
      openList[i].classList.toggle("active");
      openIcon[i].classList.toggle("active");
      closeIcon[i].classList.toggle("active");
    });
  }
};
OpenClose();
