import React from "react";
import Posts from "../components/Posts";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

function Tutorial() {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <h1>Tutorial</h1>
      <Posts locale={locale} />
    </>
  );
}

export default Tutorial;
