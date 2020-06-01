import React, { useEffect, useState } from "react";

const getScrollPosition = ({ element, useWindow }) => {
  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow ? { x: window.scrollX, y: window.scrollY } : { x: position.left, y: position.top };
};

const useScroll = () => {
  const [currentYPosition, setCurrentYPosition] = useState(window.scrollY);

  const onScroll = e => {
    setCurrentYPosition(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  useEffect(() => {
    // console.log(currentYPosition);
  }, [currentYPosition]);

  return currentYPosition;
};

export default useScroll;
