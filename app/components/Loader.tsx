import React from "react";

/**
 * Loading component displayed while the application initializes
 */
const Loader: React.FC = () => {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="app_loader dark:border-[#ffffff5c] dark:shadow-none">
        <span className="app_shadow"></span>
        <span className="app_shadow"></span>
        <span className="app_shadow"></span>
        <span className="app_dot"></span>
        <span className="app_text">&nbsp;&nbsp;&nbsp;loading...</span>
      </div>
      <span className="sr-only">Loading content...</span>
    </div>
  );
};

export default Loader;
