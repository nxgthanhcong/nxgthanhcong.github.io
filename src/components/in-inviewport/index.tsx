import React, { useRef, useEffect, useState } from "react";

const MyComponent = () => {
  const ref = useRef(null);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on whether the component is in the viewport
        setInViewport(entry.isIntersecting);
      },
      {
        // Optional: Set root margin to trigger intersection earlier/later
        rootMargin: "0px",
        // Optional: Set threshold (0-1) for intersection ratio
        threshold: 0.5, // 0.5 means 50% of the component is in the viewport
      }
    );

    // Start observing the target element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to disconnect the observer
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div ref={ref}>
      {inViewport ? (
        <p>This component is in the viewport!</p>
      ) : (
        <p>This component is not in the viewport.</p>
      )}
    </div>
  );
};

export default MyComponent;
