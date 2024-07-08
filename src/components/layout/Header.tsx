import { Suspense, useEffect, useState } from "react";
import classNames from "classnames";
import { RiDashboardLine, RiGroupLine, RiHome3Line, RiMessage3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import React from 'react';

const ButtonDownload = React.lazy(() => import("./ButtonDownload"));

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={classNames("w-full h-20 flex items-center justify-center gap-5 px-10 bg-secondary-100 fixed top-0 z-40 dark-mode-fill", { "shadow-lg": scrolled })}>
      <div className="md:w-11xl flex items-center justify-between">
        <Link to={"/"} className="outline-none">
          <img src="/logos/logo.png" alt="Mikrotik" className="w-36" />
        </Link>

        <div className="flex items-center gap-2">
          <nav className="flex items-center justify-between gap-10 md:gap-4 bg-primary dark:bg-secondary-600 md:dark:bg-transparent text-white px-10 py-5 md:py-0 rounded-xl md:rounded-none fixed bottom-10 left-1/2 transform -translate-x-1/2 border-2 border-secondary-100 dark:border-secondary-500 md:border-none md:bg-transparent md:text-gray-700 md:dark:text-secondary-100 md:static md:bottom-auto md:left-auto md:transform-none z-40 ">
            <Link to={"/"} className="outline-none font-medium flex flex-col items-center gap-2" aria-label="Inicio">
              <RiHome3Line className="text-xl md:hidden" />
              <span className="hidden md:block">Inicio</span>
            </Link>
            <Link to={"/about"} className="outline-none font-medium flex flex-col items-center gap-2" aria-label="Nosotros">
              <RiGroupLine className="text-xl md:hidden" />
              <span className="hidden md:block">Nosotros</span>
            </Link>
            <Link to={"/services"} className="outline-none font-medium flex flex-col items-center gap-2" aria-label="Servicios">
              <RiDashboardLine className="text-xl md:hidden" />
              <span className="hidden md:block">Servicios</span>
            </Link>
            <Link to={"/contact"} className="outline-none font-medium flex flex-col items-center gap-2" aria-label="Contáctanos">
              <RiMessage3Line className="text-xl md:hidden" />
              <span className="hidden md:block">Contáctanos</span>
            </Link>
          </nav>
          
          <Suspense>
            <ButtonDownload />
          </Suspense>
        </div>
      </div>
    </header>
  );
};
