let darkMode = false,
  lightMode = true;

const bodyStyle = document.querySelector("body").style,
  spanStyle = document.querySelector("span").style,
  icon = document.getElementById("icon"),
  headerStyle = document.querySelector("header").style;

function switchTheme() {
  
  if (darkMode === false) {
    darkMode = true;
    lightMode = false;

    bodyStyle.backgroundColor = "black";
    bodyStyle.color = "white";
    spanStyle.color = "yellow";

    icon.src = "dark.PNG";
    headerStyle.backgroundColor = "black";
  } else if (darkMode === true) {
    darkMode = false;
    lightMode = true;

    bodyStyle.backgroundColor = "white";
    bodyStyle.color = "black";
    spanStyle.color = "royalblue";

    icon.src = "light.PNG";
    headerStyle.backgroundColor = "white";
  }
}
