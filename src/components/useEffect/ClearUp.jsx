import React, { useEffect, useState } from "react";

const ClearUp = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const currentScreenWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);

    // Clean-up function to remove the event listener
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  }, []);

  return (
    <div className="container">
      <div className="one">
        <h1>
          The size of window is <span>{width}</span>
        </h1>
      </div>
    </div>
  );
};

export default ClearUp;

// the resize event is a standard JavaScript event that triggers whenever the size of the browser window is changed by the user, typically by dragging the window edges to resize it.
