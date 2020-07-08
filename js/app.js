// importing

// toggler menu

const togglerDiv = document.getElementById("togglerDiv");
const togglerBtn = document.getElementById("togglerBtn");
const links = document.querySelector("#togglerDiv ul");

let temp = false;
togglerBtn.addEventListener("click", () => {
  //   alert();

  if (!temp) {
    togglerDiv.style.transform = "translateY(48px)";
    setTimeout(() => {
      links.style.opacity = 1;
      links.style.transform = "translateY(0)";
    }, 500);
    return (temp = true);
  } else if (temp) {
    togglerDiv.style.transform = "translateY(-500px)";
    links.style.opacity = 0;
    links.style.transform = "translateY(-200)";
    return (temp = false);
  }
});

const sendBtn = document.getElementById("sendBtnId");

sendBtn.addEventListener("click", () => {
  alert();
});
