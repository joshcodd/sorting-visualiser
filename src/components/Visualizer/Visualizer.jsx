import React, { useRef, useState, useLayoutEffect } from "react";
import "./visualizer.css";
import SortingBar from "../SortingBar/SortingBar";

function Visualizer(props) {
  const bars = props.bars;
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ marginSpace: 0, barWidth: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      let width = targetRef.current.offsetWidth;
      let height = targetRef.current.offsetHeight;
      let marginSpace = (width / 100) * 20;
      let barWidth = width - marginSpace;

      console.log(height);
      console.log(width);
      console.log(marginSpace);

      setDimensions({
        marginSpace: marginSpace,
        barWidth: barWidth,
      });
    }
  }, []);

  return (
    <div ref={targetRef} className="visualizer">
      {props.bars.map((barHeight, index) => {
        return (
          <SortingBar
            key={index}
            height={barHeight}
            width={dimensions.barWidth}
            margin={dimensions.marginSpace / bars.length}
          />
        );
      })}
    </div>
  );
}

export default Visualizer;
