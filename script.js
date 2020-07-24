let darkMode = false,
  lightMode = true;

function switchTheme() {
  if (darkMode === false) {
    darkMode = true;
    lightMode = false;
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    document.querySelector("span").style.color = "yellow";
    document.getElementById("icon").src = "dark.PNG";
  } else if (darkMode === true) {
    darkMode = false;
    lightMode = true;
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector("span").style.color = "royalblue";

    document.getElementById("icon").src = "light.PNG";
  }
}
