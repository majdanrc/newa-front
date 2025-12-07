import React from "react";
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
  return (
    <details className="dropdown">
      <summary className="hover:bg-newa-green/20 transition-colors">{name}</summary>
      <ul className="p-2 shadow-lg bg-gray-800 rounded-box w-52 z-[100] border border-gray-700">
        {dropdownItems.map(({ name, url }, index) => (
          <li key={index}>
            <Link href={url} className="hover:bg-newa-green/30 transition-colors">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
};
export default Dropdown;
