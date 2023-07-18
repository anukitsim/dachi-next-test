

"use client";

  import { useState } from "react";
  import Link from "next/link";

  import { useSelectedLayoutSegment } from "next/navigation";

  const Sidebar = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const isActive = (href) => {
      if (useSelectedLayoutSegment() === href) {
        if (href === '/invasive-modification') {
          return 'invasive-bg';  // Return a different class for the /about route
        }
        return 'active';
      }
      return '';
    };
    

    const toggleMobileMenu = () => {
      setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    return (
      <aside className="sidebar z-50">
        <Link href="/">
          <h1 className="title">DACHI-GIORGI GARUCHAVA</h1>
        </Link>

        {/* Mobile dropdown menu */}
        <div className="sm:hidden">
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
              <Link
                href="/thewitness"
                className={`project_link pt-2 ${isActive("thewitness")}`}
              >
                The Witness
              </Link>
              <Link
                href="/invasive-modification"
                className={`project_link ${isActive("invasive-modification")}`}
              >
                Invasive Modification
              </Link>
              <Link href="/STEPS" className={`project_link ${isActive("STEPS")}`}>
                STEPS
              </Link>
              <Link
                href="/Hyphen"
                className={`project_link ${isActive("Hyphen")}`}
              >
                Hyphen
              </Link>
              <Link
                href="/i-need-protection"
                className={`project_link ${isActive("i-need-protection")}`}
              >
                I Need Protection
              </Link>
              <Link href="/obj" className={`project_link ${isActive("obj")}`}>
                .OBJ
              </Link>
              <Link
                href="/french-lessons"
                className={`project_link ${isActive("french-lessons")}`}
              >
                French Lessons
              </Link>
              <Link
                href="/garbage-throne"
                className={`project_link ${isActive("garbage-throne")}`}
              >
                Garbage Throne
              </Link>
              <Link href="/psr" className={`project_link ${isActive("psr")}`}>
                PSR
              </Link>
              <Link
                href="/dead-vase"
                className={`project_link ${isActive("dead-vase")}`}
              >
                Dead Vase
              </Link>
              <Link
                href="/broken-city"
                className={`project_link ${isActive("broken-city")}`}
              >
                Broken City
              </Link>
              <Link
                href="/march32"
                className={`project_link ${isActive("march32")}`}
              >
                March32
              </Link>
            </ul>
          )}
        </div>

        {/* Desktop link list */}
        <ul className="hidden sm:flex font-MPlus1 flex-col text-right gap-y-0.5">
          <Link href="/about" className="info_link">
            About
          </Link>
          <Link
            href="/thewitness"
            className={`project_link pt-2 ${isActive("thewitness")}`}
          >
            The Witness
          </Link>
          <Link
            href="/invasive-modification"
            className={`project_link ${isActive("invasive-modification")}`}
          >
            Invasive Modification
          </Link>
          <Link href="/STEPS" className={`project_link ${isActive("STEPS")}`}>
            STEPS
          </Link>
          <Link href="/Hyphen" className={`project_link ${isActive("Hyphen")}`}>
            Hyphen
          </Link>
          <Link
            href="/i-need-protection"
            className={`project_link ${isActive("i-need-protection")}`}
          >
            I Need Protection
          </Link>
          <Link href="/obj" className={`project_link ${isActive("obj")}`}>
            .OBJ
          </Link>
          <Link
            href="/french-lessons"
            className={`project_link ${isActive("french-lessons")}`}
          >
            French Lessons
          </Link>
          <Link
            href="/garbage-throne"
            className={`project_link ${isActive("garbage-throne")}`}
          >
            Garbage Throne
          </Link>
          <Link href="/psr" className={`project_link ${isActive("psr")}`}>
            PSR
          </Link>
          <Link
            href="/dead-vase"
            className={`project_link ${isActive("dead-vase")}`}
          >
            Dead Vase
          </Link>
          <Link
            href="/broken-city"
            className={`project_link ${isActive("broken-city")}`}
          >
            Broken City
          </Link>
          <Link href="/march32" className={`project_link ${isActive("march32")}`}>
            March32
          </Link>
        </ul>
      </aside>
    );
  };

  export default Sidebar;
