let header = document.getElementById("header");
let btnStart = document.getElementById("btn-Start");
let main = document.getElementById("main");
let btnClose = document.getElementById("btn-close");

btnStart.addEventListener("click", () => {
  header.style.display = "none";
  main.style.display = "grid";
});
btnClose.addEventListener("click", () => {
  header.style.display = "flex";
  main.style.display = "none";
});

// export { start, close, btnStart, btnClose, header, main };
