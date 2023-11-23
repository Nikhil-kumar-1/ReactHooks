import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

const One = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title =count;
  }, [count]);

  return (
    <>
      <div className="container">
        <h1 style={{ color: "white", fontSize: "50px" }}>Counter</h1>

        <div className="child">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="add"
          >
            <FontAwesomeIcon icon={faPlus} /> {/* Use the imported icon */}
          </button>
          
          <h1 className="count">{count}</h1>

          <button
            onClick={() => {
              setCount(count - 1);
            }}
            disabled={count === 0}
            className="minus"
            style={{
              backgroundColor: count === 0 ? 'red' : '',
              color: count === 0 ? 'white' : ''
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
    </>
  );
};

export default One;

