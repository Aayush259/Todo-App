import { useState } from "react";
import Header from "./components/Header";
import "./styles/styles.css";
import moonIcon from "./images/icon-moon.svg";
import sunIcon from "./images/icon-sun.svg";

function App() {

  // Initializing theme state with light theme.
  let [theme, setTheme] = useState("light");
  let themeLogo;
  let themeAlt;

  // If theme is light then set theme logo to moon icon and alt text accordingly else set the opposite logo and alt text.
  if (theme === "light") {
    themeLogo = moonIcon;
    themeAlt = "Shift to dark mode";
  } else {
    themeLogo = sunIcon;
    themeAlt = "Shift to light mode.";
  }

  return (
    <>
      <div id="app">
        <div id="background" className={theme}>
        </div>
        <main id="main">
          <Header themeLogo={themeLogo} themeAlt={themeAlt} />
        </main>
      </div>
    </>
  )
}

export default App
