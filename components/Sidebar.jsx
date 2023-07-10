"use client"


import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
 
 
  return (
    <aside className="sidebar">
      <Link href="/" >
        <h1 className="title">DACHI-GIORGI GARUCHAVA</h1>
      </Link>
    
      <Link className="info_link" href="/about">About</Link>
      <ul className="project_links  ">
        
        <Link  href="/thewitness" className="project_link">The Witness</Link>
        <Link className="project_link" href="/invasive-modification">Invasive Modification</Link>
        <Link className="project_link" href="/STEPS">STEPS</Link>

        <Link className="project_link" href="/Hyphen">Hyphen</Link>

        <Link className="project_link" href="/i-need-protection">I Need Protection</Link>

        <Link className="project_link" href="/obj">.OBJ</Link>

        <Link className="project_link" href="/french-lessons">French Lessons</Link>
        <Link className="project_link" href="/garbage-throne">Garbage Throne</Link>
        <Link className="project_link" href="/psr">PSR</Link>
        <Link className="project_link" href="/dead-vase">Dead Vase</Link>
        <Link className="project_link" href="/broken-city">Broken City</Link>
        <Link className="project_link" href="/march32">March32</Link>
      </ul>
      <div className="sm:hidden flex relative">

      </div>
    </aside>
  );
};

export default Sidebar;
