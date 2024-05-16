import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./styles/styles.css";
import moonIcon from "./images/icon-moon.svg";
import sunIcon from "./images/icon-sun.svg";

function App() {

  // Initializing theme state with light theme.
  let [theme, setTheme] = useState("light");
  let [taskList, updateTaskList] = useState(["Complete online JavaScript course", "Jog around the park 3x", "10 minutes meditation", "Read for 1 hour", "Pick up groceries", "Complete Todo App"]);

  let themeLogo;
  let themeAlt;

  // This function toggles the app theme when called.
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // Change body class when theme is changed to change its background color.
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
          <Header themeLogo={themeLogo} themeAlt={themeAlt} changeTheme={changeTheme} />
          <AddTask theme={theme} />
          <TaskList taskList={taskList} theme={theme} />
        </main>
      </div>
    </>
  )
}

export default App
