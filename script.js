let darkMode = false,
  lightMode = true;

const bodyStyle = document.querySelector("body").style,
  accentStyle = document.getElementsByClassName("accent"),
  icon = document.getElementById("icon"),
  headerStyle = document.querySelector("header").style,
  codeStyle = document.getElementsByClassName("code-snippet");

function switchTheme() {
  if (darkMode === false) {
    darkMode = true;
    lightMode = false;

    icon.src = "dark.PNG";
    bodyStyle.backgroundColor = "black";
    bodyStyle.color = "white";
    headerStyle.backgroundColor = "black";

    for (var i = 0; i < accentStyle.length; i++) {
      accentStyle[i].style.color = "yellow";
    }

    for (var i = 0; i < codeStyle.length; i++) {
      codeStyle[i].style.backgroundColor = "#1c1919";
    }
  } else if (darkMode === true) {
    darkMode = false;
    lightMode = true;

    icon.src = "light.PNG";
    bodyStyle.backgroundColor = "white";
    bodyStyle.color = "black";
    headerStyle.backgroundColor = "white";

    for (var i = 0; i < accentStyle.length; i++) {
      accentStyle[i].style.color = "royalblue";
    }

    for (var i = 0; i < codeStyle.length; i++) {
      codeStyle[i].style.backgroundColor = "#f4f4f4";
    }
  }
}
