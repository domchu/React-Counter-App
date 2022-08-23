import React, { useState } from "react";

const Assets = () => {
  const [count, setCount] = useState(0);

  const handleIncreasement = () => {
    setCount(count + 1);
  };
  const handleDecreasement = () => {
    setCount(count - 1);
  };

  return (
    <div div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2 className="my-5 ">{count}</h2>

            <button
              className="btn btn-success mx-3"
              onClick={handleIncreasement}
            >
              Increasement
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={handleDecreasement}
              disabled={count === 0}
            >
              Decreasement
            </button>
            <button
              className="btn btn-secondary mx-3"
              onClick={() => setCount(0)}
              disabled={count === 0}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
