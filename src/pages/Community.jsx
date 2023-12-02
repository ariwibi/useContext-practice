import React from "react";
import { community } from "../utils/content";
import LocaleContext from "../contexts/LocaleContext";
import { useContext } from "react";

function Community() {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <h1>{community[locale].header}</h1>
      <span className="subheader">{community[locale].subheader}</span>
      <p>{community[locale].paragraph}</p>
    </>
  );
}

export default Community;
