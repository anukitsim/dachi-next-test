    "use client"


    import { useState } from "react";
    import Link from "next/link";

    const Sidebar = () => {
    
      const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

      const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
      };
    
      return (
        <aside className="sidebar z-10">
          <Link href="/" >
            <h1 className="title">DACHI-GIORGI GARUCHAVA</h1>
          </Link>
        
          <button className="menu_button sm:hidden" onClick={toggleMobileMenu}>
                  Menu
                </button>
                {
                  isMobileMenuVisible && (
                    <ul className="mobile_menu">
                    <Link className="info_link" href="/about">About</Link>
                      <Link  href="/thewitness" className="project_link pt-2">The Witness</Link>
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
                  )
                }
                <ul className={`project_links hidden sm:flex flex-col text-right ${isMobileMenuVisible ? 'mobile_menu_open' : ''}`}>
                <Link className="info_link" href="/about">About</Link>
                      <Link  href="/thewitness" className="project_link pt-2">The Witness</Link>
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

        
      
      
        </aside>
      );
    };

    export default Sidebar;
