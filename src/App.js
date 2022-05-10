import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  //Theme toggler saved in local storage hook.
  const useLocalState = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue === null ? defaultValue : JSON.parse(storedValue);
    });

    useEffect(() => {
      const listener = (e) => {
        if (e.storageArea === localStorage && e.key === key) {
          setValue(JSON.parse(e.newValue));
        }
      };
      window.addEventListener("storage", listener);

      return () => {
        window.removeEventListener("storage", listener);
      };
    }, [key]);

    const setValueInLocalStorage = (newValue) => {
      setValue((prevState) => {
        const result =
          typeof newValue === "function" ? newValue(prevState) : newValue;

        localStorage.setItem(key, JSON.stringify(result));
        return result;
      });
    };
    return [value, setValueInLocalStorage];
  };

  const [darkThemeState, setDarkThemeState] = useLocalState("theme", false);
  return (
    <div className={darkThemeState ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkThemeState} setDarkTheme={setDarkThemeState} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
