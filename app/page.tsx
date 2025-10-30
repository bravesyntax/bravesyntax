"use client";

import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import { useDarkMode } from "./hooks/useDarkMode";

/**
 * Main page component for the portfolio website
 */
export default function Home() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <ErrorBoundary>
      <div className="relative">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: isDarkMode ? "#1f2937" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
            },
          }}
        />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>
          <Header />
          <About isDarkMode={isDarkMode} />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
