import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="mt-16">
      <div className="py-4 border-t-[1px]">
        <p className="text-center text-sm text-slate-600 dark:text-white">
          © {year} Brave Syntax. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
