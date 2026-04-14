"use client";
import { useEffect, useState } from "react";
import { createPath, getAssetPath } from "../lib/paths";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [basePath, setBasePath] = useState("");

  useEffect(() => {
    // Get basePath on client side
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const bp = path.startsWith("/ppc-shield") ? "/ppc-shield" : "";
      setBasePath(bp);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`navbar navbar-expand-lg navbar-custom fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* LOGO */}
        <a className="navbar-brand" href={basePath || "/"}>
          <div className="navbar-logo-wrapper">
            <img src={getAssetPath("/logo.png", basePath)} alt="PPC Shield" className="navbar-logo-icon" />
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href={basePath || "/"}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={createPath("about", basePath)}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={createPath("pricing", basePath)}>Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={createPath("faq", basePath)}>FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={createPath("reviews", basePath)}>Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={createPath("contact", basePath)}>Contact</a>
            </li>
            <li className="nav-item ms-3">
              <a className="btn btn-gradient" href={createPath("contact", basePath)}>
                Schedule a Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
