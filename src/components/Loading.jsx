import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <ThreeCircles type="puff" color="#000BFF" height={550} width={80} />
    </div>
  );
};

export default Loading;
