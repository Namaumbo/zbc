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

    // FIXME: i can not get hte API_URL for some reasone
    
  const API_URL = process.env.REACT_APP_STRAPI_LOGIN;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const InfoNavComponent = () => {
    return (
      <>
        <div className="border-b border-gray-100 bg-gray-100">
          <div className="container mx-auto flex items-center justify-between px-4 py-2">
            {/* Contact Info */}
            <div className="hidden items-center gap-6 md:flex">
              <a
                href="tel:+265 993 740 261"
                className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-purple-600"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span>(+265) 993 740 261</span>
              </a>
              <a
                href="mailto:zombabaptistchurch@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-purple-600"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>zombabaptistchurch@gmail.com</span>
              </a>
            </div>

            {/* Right Section */}
            <div className="ml-auto flex items-center gap-6">
              {/* Client Login */}
              {/* FIXME */}
              <a
                href={API_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 cursor-pointer text-sm font-medium text-purple-600 hover:text-purple-600"
              >
                <svg
                  className="h-4 w-4 transition-transform group-hover:-rotate-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Client Login</span>
              </a>

              {/* Social Links */}
              <div className="hidden items-center gap-3 md:flex">
                <a
                  href="https://www.facebook.com/zombabaptist"
                  className="text-gray-400 transition-colors hover:text-blue-600"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const LinksNavbarComponent = () => {
    return (
      <>
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
                  <Button
                    onClick={() => (window.location.href = "/about")}
                    className="ml-4 bg-[#6B21A8] hover:bg-[#6B21A8] "
                    size="xl"
                  >
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
                height: isMenuOpen ? "auto" : 0,
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
      </>
    );
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sms">
      <InfoNavComponent />
      <LinksNavbarComponent />
    </header>
  );
};
export default NavBarComponent;
