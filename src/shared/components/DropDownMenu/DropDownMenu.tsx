"use client";
import React, { FC, useState } from "react";
import styles from "./DropDownMenu.module.css";
import { useRouter } from "next/navigation";

interface IDropdownProps {
  dropdownList: {
    lable: string;
    link: string;
    id: number;
  }[];
  selectName: string;
}

const DropdownMenu: FC<IDropdownProps> = ({ dropdownList, selectName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (key: string) => {
    router.push(key);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdown_button} onClick={toggleDropdown}>
        {selectName} <img className={styles.dropdown_arrow} src="/img/dropdown_arrow.png" alt="drop" />
      </button>
      {isOpen && (
        <ul className={styles.dropdown_menu}>
          {dropdownList.map((item) => {
            return (
              <li key={item.id} onClick={() => handleOptionClick(item.link)}>
                {item.lable}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
