import { Button } from "flowbite-react";
import React from "react";
import { motion } from "framer-motion";

/**
 * The `NavBarComponent` is a React functional component that renders the navigation bar for the application.
 * It includes a logo, links to various pages, and a "Get Involved" button.
 * The navigation bar is sticky and positioned at the top of the page with a z-index of 50.
 * The component uses the `flowbite-react` library for the button component.
 */
const NavBarComponent = () => {
  const linkStyle =
    "text-black hover:text-gray-300 px-2 sm:px-4 py-2 text-base sm:text-lg font-heading transition duration-300";

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white sticky top-0 z-50 w-full pt-5 pb-5 shadow-md"
    >
      <div className="container mx-auto px-2 sm:px-6 ">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="/image.png"
              alt="ZBC Logo"
              className="w-20 h-20 sm:w-24 sm:h-24"
              loading="eager"
              width="160"
              height="160"
            />
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2 ">
            {[
              { href: "/about", text: "About" },
              { href: "/ministries", text: "Ministries" },
              { href: "/services", text: "services" },
              { href: "/contact", text: "Contact" },
              { href: "/events", text: "Events" },
            ].map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={linkStyle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {link.text}
              </motion.a>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="ml-4 bg-[#6B21A8] hover:bg-[#6B21A8] " size="xl">
                Get Involved
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { href: "/about", text: "About" },
              { href: "/ministries", text: "Ministries" },
              { href: "/services", text: "services" },
              { href: "/contact", text: "Contact" },
              { href: "/events", text: "Events" },
            ].map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="block text-white hover:text-gray-300 px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base font-medium lg:px-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.text}
              </motion.a>
            ))}
            <motion.div
              className="px-3 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full bg-[#6B21A8]">Get Involved</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
export default NavBarComponent;