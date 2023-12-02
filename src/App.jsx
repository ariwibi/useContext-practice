import { useMemo, useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import "./styles/style.css";
import LocaleContext from "./contexts/LocaleContext";
function App() {
  const [locale, setLocale] = useState("id");

  function toggleLocale() {
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  }

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);
  return (
    <>
      <LocaleContext.Provider value={localeContextValue}>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
      </LocaleContext.Provider>
    </>
  );
}

export default App;
