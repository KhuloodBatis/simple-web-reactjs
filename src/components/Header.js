import React from "react";

function Header() {
  return (
    <div className="header">
          <blockquote className="  text-lg md:text-2xl font-semibold italic text-center text-slate-300 ">
        Welcom in My--
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-200 relative inline-block ">
                  <span className="relative text-slate-600 "> React Web </span>
        </span>
        --you look for evry thing good
      </blockquote>
    </div>
  );
}

export default Header;
