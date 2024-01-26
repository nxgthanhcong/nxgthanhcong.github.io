import React, { useEffect, useRef } from "react";

const Cursor = () => {
  // const cursorRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const handleMouseOver = (event: any) => {
  //     const x = event.clientX;
  //     const y = event.clientY;
  //     const gradientStyle = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  //     if (cursorRef && cursorRef.current) {
  //       cursorRef.current.style.backgroundImage = gradientStyle;
  //     }
  //   };

  //   document.addEventListener("mouseover", handleMouseOver);

  //   return () => {
  //     document.removeEventListener("mouseover", handleMouseOver);
  //   };
  // }, []);

  return (
    <div className="cursor-overlay pointer-events-none fixed left-0 top-0 z-10 hidden h-screen w-screen lg:block"></div>
  );
};

export default Cursor;
