// pages/_app.js
import { useState, useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  const [dark, setDark] = useState(true); // default dark mode

  // Persist dark mode in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) setDark(saved === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className={dark ? "dark bg-gray-950 text-white min-h-screen" : "bg-gray-50 text-gray-900 min-h-screen"}>
      <Navbar dark={dark} setDark={setDark} />
      <Component {...pageProps} dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
