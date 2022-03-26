import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="questions">
      <div className="question">
        <h3>How React Works?</h3>
        <p>
          React is a JavaScript library (not a framework). Which has brought us
          many advantages in our use. React is a component batch language. React
          Components we can use multiple times which makes us much easier.
          React's code is converted to JSX in Babel's. So we can write HTML code
          in JS code which converts our Babel to JSX.
        </p>
      </div>
      <div className="question">
        <h3>What is the difference between state and props?</h3>
        <p>
          The state is the component within which we can load data. We can load
          AIP data in the math of the state. Props is a medium that carries our
          data. Our data makes it easy to move from one component to another. In
          the math of props, we can also function and carry. So we get a lot of
          benefits by using our data.
        </p>
      </div>
    </div>
  );
};

export default Question;
