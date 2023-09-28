import React from "react";

const Navbar = () => {
  return (
    <div className="px-4 py-2 bg-black ">
      <div className="flex items-center justify-between gap-3 text-blue-300 h-27">
        Navbar
        <div className="flex gap-2">
          <button className="button1">Home</button>
          <button className="button1">About</button>
          <button className="button1">Project</button>
          <button className="button1">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
