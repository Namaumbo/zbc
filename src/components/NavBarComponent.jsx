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
    "text-white    hover:text-gray-300 px-2 sm:px-4 py-2 text-base sm:text-lg font-heading transition duration-300";

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50 w-full pt-5 pb-5 shadow-md">
      <div className="container mx-auto px-2 sm:px-6 ">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="/image.png"
              alt="ZBC Logo"
              className="w-14 h-14 sm:w-16 sm:h-16"
              loading="eager"
              width="80"
              height="80"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2 ">
            {[
              { href: "/about", text: "About" },
              { href: "/ministries", text: "Ministries" },
              { href: "/services", text: "services" },
              { href: "/contact", text: "Contact" },
              { href: "/events", text: "Events" },
            ].map((link) => (
              <a key={link.href} href={link.href} className={linkStyle}>
                {link.text}
              </a>
            ))}
            <Button className="ml-4 bg-[#6B21A8] hover:bg-[#6B21A8] " size="xl">
              Get Involved
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { href: "/about", text: "About" },
              { href: "/ministries", text: "Ministries" },
              { href: "/services", text: "services" },
              { href: "/contact", text: "Contact" },
              { href: "/events", text: "Events" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white hover:text-gray-300 px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base font-medium lg:px-2"
              >
                {link.text}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-[#6B21A8]">Get Involved</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBarComponent;
