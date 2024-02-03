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
    <details>
      <summary>{name}</summary>
      <ul className="p-2">
        {dropdownItems.map(({ name, url }, index) => (
          <li key={index}>
            <Link href={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </details>
  );
};
export default Dropdown;
