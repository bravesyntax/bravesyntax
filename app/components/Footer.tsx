import React from "react";

/**
 * Footer component displaying copyright information
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16" role="contentinfo">
      <div className="border-t-[1px] py-4">
        <p className="text-center text-sm text-slate-600 dark:text-white">
          © {currentYear} Brave Syntax. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
