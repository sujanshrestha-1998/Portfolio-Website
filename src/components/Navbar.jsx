import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-between gap-8">
            <div>
              <a href="#" className="font-semibold">
                sujanshrestha
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                <li>
                  {" "}
                  <a href="">About</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Projects</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Contact Me</a>{" "}
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <a href="">
                <img src="/images/Github.png" alt="" width={20} />
              </a>
              <a href="">
                <img src="/images/LinkedIn.png" alt="" width={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className=" px-10 rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="font-semibold">
                sujanshrestha
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <IoIosClose className="m-2 h-6 w-5" />
                ) : (
                  <IoIosMenu className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              <li>
                {" "}
                <a href="" className="block w-full text-xl font-semibold">
                  About
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="" className="block w-full text-xl font-semibold">
                  Projects
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="" className="block w-full text-xl font-semibold">
                  Contact Me
                </a>{" "}
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
