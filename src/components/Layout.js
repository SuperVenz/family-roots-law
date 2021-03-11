import React from "react";
import Header from "./Header";
import "../static/cssReset.css";
import "../static/global.css";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}