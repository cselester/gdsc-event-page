import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Highlights from "./components/Highlights";
import Challenges from "./components/Challenges";
import Schedule from "./components/Schedule";
import RegistrationForm from "./components/RegistrationForm";
import Location from "./components/Location";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);

  return (
    <div className={darkTheme ? "App dark" : "App"}>
      <Navbar toggleTheme={toggleTheme} darkTheme={darkTheme} />
      <Hero />
      <Countdown />
      <Highlights />
      <Challenges />
      <Schedule />
      <RegistrationForm />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
