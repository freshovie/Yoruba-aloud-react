import React, { useState, useEffect, useRef } from "react";
import "./page404.css";

const Page404 = () => {
  const [fill, setFill] = useState(90);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    const fishbowl = document.getElementById("fishbowl");
    const fish = document.getElementById("fish");
    const tap = document.getElementById("tap");

    const updateFishState = (newFill) => {
      fishbowl.style.setProperty("--filling", newFill);
      if (newFill <= 0) {
        fish.classList.add("fishbowl__fish--floating");
      } else {
        fish.classList.remove("fishbowl__fish--floating");
      }

      if (newFill < 20) {
        fish.classList.add("fishbowl__fish--dead");
        fish.classList.remove("fishbowl__fish--dying");
      } else if (newFill < 50) {
        fish.classList.add("fishbowl__fish--dying");
        fish.classList.remove("fishbowl__fish--dead");
      } else {
        fish.classList.remove("fishbowl__fish--dying", "fishbowl__fish--dead");
      }
    };

    const emptyingFn = () => {
      return setInterval(() => {
        setFill((prevFill) => {
          const newFill = prevFill - 1;
          updateFishState(newFill);
          if (newFill <= 0) {
            clearInterval(intervalIdRef.current);
          }
          return newFill;
        });
      }, 200);
    };

    intervalIdRef.current = emptyingFn();

    const handleTapClick = () => {
      tap.classList.add("fishbowl__tap--active");
      setTimeout(() => tap.classList.remove("fishbowl__tap--active"), 500);
      setFill((prevFill) => {
        const newFill = Math.min(prevFill + 20, 90);
        if (prevFill <= 0 && newFill > 0) {
          intervalIdRef.current = emptyingFn();
        }
        return newFill;
      });
    };

    tap.addEventListener("click", handleTapClick);

    return () => {
      clearInterval(intervalIdRef.current);
      tap.removeEventListener("click", handleTapClick);
    };
  }, []);

  useEffect(() => {
    const fishbowl = document.getElementById("fishbowl");
    const fish = document.getElementById("fish");
    updateFishState(fill);

    function updateFishState(newFill) {
      fishbowl.style.setProperty("--filling", newFill);
      if (newFill <= 0) {
        fish.classList.add("fishbowl__fish--floating");
      } else {
        fish.classList.remove("fishbowl__fish--floating");
      }

      if (newFill < 20) {
        fish.classList.add("fishbowl__fish--dead");
        fish.classList.remove("fishbowl__fish--dying");
      } else if (newFill < 50) {
        fish.classList.add("fishbowl__fish--dying");
        fish.classList.remove("fishbowl__fish--dead");
      } else {
        fish.classList.remove("fishbowl__fish--dying", "fishbowl__fish--dead");
      }
    }
  }, [fill]);

  return (
    <div className="page404">
      <div id="fishbowl" className="fishbowl">
        <div className="fishbowl__pool"></div>
        <div className="fishbowl__background"></div>
        <div className="fishbowl__bottom"></div>
        <div className="fishbowl__decoration">
          <div className="fishbowl__seaweed fishbowl__seaweed--1"></div>
          <div className="fishbowl__seaweed fishbowl__seaweed--2"></div>
          <div className="fishbowl__seaweed fishbowl__seaweed--3"></div>
        </div>
        <div className="fishbowl__water">
          <div id="fish" className="fishbowl__fish">
            <div className="fishbowl__fish-tail"></div>
          </div>
          <div className="fishbowl__water-color"></div>
        </div>
        <div className="fishbowl__top"></div>
        <div id="tap" className="fishbowl__tap">
          <div className="fishbowl__tap-base"></div>
          <div className="fishbowl__tap-handle"></div>
          <div className="fishbowl__tap-stream"></div>
          <div className="fishbowl__tap-end"></div>
          <div className="fishbowl__tap-head"></div>
          <div className="fishbowl__tap-text">Click to refill</div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
