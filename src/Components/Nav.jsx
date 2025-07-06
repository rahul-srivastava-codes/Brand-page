import Nike from "./Images/brand_logo.png";

function Nav() {
  return (
    <div className="flex items-center justify-between px-6 py-2 shadow-md bg-zinc-200">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={Nike}
          alt="Brand Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Navigation Links  */}
      <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <div className="hover:text-black transition-colors duration-200 cursor-pointer">
          Menu
        </div>
        <div className="hover:text-black transition-colors duration-200 cursor-pointer">
          Location
        </div>
        <div className="hover:text-black transition-colors duration-200 cursor-pointer">
          Contact
        </div>
        <div className="hover:text-black transition-colors duration-200 cursor-pointer">
          About
        </div>
      </div>

      {/* Login Button */}
      <div>
        <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-200">
          Login
        </button>
      </div>
    </div>
  );
}

export default Nav;
