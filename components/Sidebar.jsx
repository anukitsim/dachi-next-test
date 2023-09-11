"use client";

  import { useState } from "react";
  import Link from "next/link";
  import { usePathname } from "next/navigation";

  const Sidebar = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
    const pathname = usePathname();

    const isActive = (href) => {
      if (pathname.startsWith(href)) {
        return 'text-[#909090]'; 
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
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/thewitness") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            The Witness
          </Link>
          <Link
            href="/invasive-modification"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/invasive-modification") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            Invasive Modification
          </Link>
          <Link href="/STEPS"  className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/STEPS") ? 'text-[#909090]' : 'text-[#484848]'}`}>
            STEPS
          </Link>
          <Link href="/Hyphen"  className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/Hyphen") ? 'text-[#909090]' : 'text-[#484848]'}`}>
            Hyphen
          </Link>
          <Link
            href="/i-need-protection"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/i-need-protection") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            I Need Protection
          </Link>
          <Link href="/obj"  className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/obj") ? 'text-[#909090]' : 'text-[#484848]'}`}>
            .OBJ
          </Link>
          <Link
            href="/french-lessons"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/french-lessons") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            French Lessons
          </Link>
          <Link
            href="/garbage-throne"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/garbage-throne") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            Garbage Throne
          </Link>
          <Link href="/psr"  className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/psr") ? 'text-[#909090]' : 'text-[#484848]'}`}>
            PSR
          </Link>
          <Link
            href="/dead-vase"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/dead-vase") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            Dead Vase
          </Link>
          <Link
            href="/broken-city"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/broken-city") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            Broken City
          </Link>
          <Link href="/march32"  className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/march32") ? 'text-[#909090]' : 'text-[#484848]'}`}>
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
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/thewitness") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            The Witness
          </Link>
          <Link
            href="/invasive-modification"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/invasive-modification") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            Invasive Modification
          </Link>
          <Link href="/STEPS"  className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/STEPS") ? 'text-[#909090]' : 'text-[#484848]'}`}>
            STEPS
          </Link>
          <Link href="/Hyphen"  className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/Hyphen") ? 'text-[#909090]' : 'text-[#484848]'}`}>
            Hyphen
          </Link>
          <Link
            href="/i-need-protection"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/i-need-protection") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            I Need Protection
          </Link>
          <Link href="/obj"  className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/obj") ? 'text-[#909090]' : 'text-[#484848]'}`}>
            .OBJ
          </Link>
          <Link
            href="/french-lessons"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/french-lessons") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            French Lessons
          </Link>
          <Link
            href="/garbage-throne"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/garbage-throne") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            Garbage Throne
          </Link>
          <Link href="/psr"  className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/psr") ? 'text-[#909090]' : 'text-[#484848]'}`}>
            PSR
          </Link>
          <Link
            href="/dead-vase"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/dead-vase") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            Dead Vase
          </Link>
          <Link
            href="/broken-city"
            className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/broken-city") ? 'text-[#909090]' : 'text-[#484848]'}`}
          >
            Broken City
          </Link>
          <Link href="/march32"  className={`no-underline cursor-pointer font-MPlus1 leading-6 font-thin tracking-wider ${isActive("/march32") ? 'text-[#909090]' : 'text-[#484848]'}`}>
            March32
          </Link>
        </ul>
      </aside>
    );
  };

  export default Sidebar;