import "./styles/styles.css";
import bgDesktopLight from "./images/bg-desktop-light.jpg";
import bgDesktopDark from "./images/bg-desktop-dark.jpg";
import bgMobileLight from "./images/bg-mobile-light.jpg";
import bgMobileDark from "./images/bg-mobile-dark.jpg";

function App() {

  let backgroundImage = bgDesktopLight;

  return (
    <>
      <div id="app">
        Todo App
        <div id="background">
          <img src={backgroundImage} alt="Background" />
        </div>
      </div>
    </>
  )
}

export default App
