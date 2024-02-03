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
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="">
        {name}
      </label>
      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-right text-gray-300">
        {dropdownItems.map(({ name, url }, index) => (
          <li key={index}>
            <Link href={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
