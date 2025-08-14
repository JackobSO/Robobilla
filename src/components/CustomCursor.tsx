import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on devices with a fine pointer (desktop)
    const finePointer = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const wrapper = cursorWrapperRef.current;
    if (!wrapper) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      
      wrapper.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={cursorWrapperRef} className="target-cursor-wrapper hidden md:block">
      <div className="target-cursor-dot"></div>
      <div className="target-cursor-corner corner-tl"></div>
      <div className="target-cursor-corner corner-tr"></div>
      <div className="target-cursor-corner corner-br"></div>
      <div className="target-cursor-corner corner-bl"></div>
    </div>
  );
};

export default CustomCursor;
