import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center h-screen">
      <div className="app_loader dark:shadow-none dark:border-[#ffffff5c]">
        <span className="app_shadow"></span>
        <span className="app_shadow"></span>
        <span className="app_shadow"></span>
        <span className="app_dot "></span>
        <span className="app_text">&nbsp;&nbsp;&nbsp;loading...</span>
      </div>
    </div>
  );
};

export default Loader;
