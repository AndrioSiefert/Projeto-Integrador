import { useState, useEffect } from "react";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function backtotop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  function checkScrollTop() {
    if (!showScroll && window.pageYOffset > 350) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 350) {
      setShowScroll(false);
    }
  }

  function scrollTop() {
    window.scrollTo({ top: 0});
  }

  return (
    <div>
      <button
        className="border border-2 border-white text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fixed bottom-10 right-10 rounded-full p-4"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}