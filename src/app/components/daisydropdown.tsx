"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

type DropdownItem = {
  name: string;
  url: string;
};

type DropdownProps = {
  name: string;
  dropdownItems: DropdownItem[];
};

const Dropdown: React.FC<DropdownProps> = ({ name, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={ref}>
      <div
        tabIndex={0}
        role="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="hover:bg-newa-green/20 transition-colors cursor-pointer"
      >
        {name}
      </div>
      {isOpen && (
        <ul className="absolute left-0 top-full mt-2 p-2 shadow-lg bg-gray-800 rounded-box w-52 z-[100] border border-gray-700">
          {dropdownItems.map(({ name, url }, index) => (
            <li key={index}>
              <Link
                href={url}
                onClick={() => setIsOpen(false)}
                className="hover:bg-newa-green/30 transition-colors"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
