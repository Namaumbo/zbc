import { Button } from "flowbite-react";
import React from "react";

/**
 * The `NavBarComponent` is a React functional component that renders the navigation bar for the application.
 * It includes a logo, links to various pages, and a "Get Involved" button.
 * The navigation bar is sticky and positioned at the top of the page with a z-index of 50.
 * The component uses the `flowbite-react` library for the button component.
 */
const NavBarComponent = () => {
  const linkStyle =
    "text-white hover:text-gray-300 px-2 sm:px-4 py-2 text-base sm:text-lg font-semibold font-paragraph transition duration-300";
  return (
    <nav className=" bg-black sticky top-0 z-50 w-full">
      <div className=" container flex flex-col sm:flex-row justify-between items-center relative z-10 p-2">
        <div
          className="logo mb-2 sm:mb-0 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 font-coiny ml-6">
            <img
              src="/image.png"
              alt="ZBC Logo"
              className=" w-16 h-16 sm:w-18 sm:h-18 inline-block ml-2-mt-2-mb-2"
              loading="eager"
              width="80"
              height="80"
            />
          </h1>
        </div>

        <div className="links flex flex-wrap justify-center">
          {[
            { href: "/about", text: "About" },
            { href: "/ministries", text: "Ministries" },
            { href: "/services", text: "sermons" },
            { href: "/contact", text: "Contact" },
            { href: "/events", text: "Events" },
          ].map((link) => (
            <a key={link.href} href={link.href} className={linkStyle}>
              {link.text}
            </a>
          ))}
          <Button className="">Get Involved</Button>
        </div>
      </div>
    </nav>
  );
};
export default NavBarComponent;
