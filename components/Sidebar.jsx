"use client"

import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <aside className="sidebar z-50">
      <Link href="/">
        <h1 className="title">DACHI-GIORGI GARUCHAVA</h1>
      </Link>

      {/* Mobile dropdown menu */}
      <div className="lg:hidden">
        <button

          className="text-[#484848] no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider mb-2"
          onClick={toggleMobileMenu}
        >
          Menu
        </button>
        {isMobileMenuVisible && (
         
            <ul className="project_links">
        <Link href="/about" className="info_link">
          About
        </Link>
        <Link href="/thewitness" className="project_link pt-2">
          The Witness
        </Link>
        <Link href="/invasive-modification" className="project_link">
          Invasive Modification
        </Link>
        <Link href="/STEPS" className="project_link">
          STEPS
        </Link>
        <Link href="/Hyphen" className="project_link">
          Hyphen
        </Link>
        <Link href="/i-need-protection" className="project_link">
          I Need Protection
        </Link>
        <Link href="/obj" className="project_link">
          .OBJ
        </Link>
        <Link href="/french-lessons" className="project_link">
          French Lessons
        </Link>
        <Link href="/garbage-throne" className="project_link">
          Garbage Throne
        </Link>
        <Link href="/psr" className="project_link">
          PSR
        </Link>
        <Link href="/dead-vase" className="project_link">
          Dead Vase
        </Link>
        <Link href="/broken-city" className="project_link">
          Broken City
        </Link>
        <Link href="/march32" className="project_link">
          March32
        </Link>
      </ul>
        
        )}
      </div>

      {/* Desktop link list */}
      <ul className="hidden lg:flex font-MPlus1 flex-col text-right gap-y-0.5">
        <Link href="/about" className="info_link">
          About
        </Link>
        <Link href="/thewitness" className="project_link pt-2">
          The Witness
        </Link>
        <Link href="/invasive-modification" className="project_link">
          Invasive Modification
        </Link>
        <Link href="/STEPS" className="project_link">
          STEPS
        </Link>
        <Link href="/Hyphen" className="project_link">
          Hyphen
        </Link>
        <Link href="/i-need-protection" className="project_link">
          I Need Protection
        </Link>
        <Link href="/obj" className="project_link">
          .OBJ
        </Link>
        <Link href="/french-lessons" className="project_link">
          French Lessons
        </Link>
        <Link href="/garbage-throne" className="project_link">
          Garbage Throne
        </Link>
        <Link href="/psr" className="project_link">
          PSR
        </Link>
        <Link href="/dead-vase" className="project_link">
          Dead Vase
        </Link>
        <Link href="/broken-city" className="project_link">
          Broken City
        </Link>
        <Link href="/march32" className="project_link">
          March32
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
