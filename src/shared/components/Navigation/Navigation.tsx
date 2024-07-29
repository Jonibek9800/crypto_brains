import Link from "next/link";
import DropdownMenu from "../DropDownMenu/DropDownMenu";
import styles from "./Navigation.module.css";

const dropOne = [
  { id: 1, link: "/", lable: "Test 1" },
  { id: 2, link: "/test", lable: "Test 2" },
];

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <DropdownMenu selectName="Market" dropdownList={dropOne} />
      <DropdownMenu selectName="Trade" dropdownList={dropOne} />
      <DropdownMenu selectName="Earn" dropdownList={dropOne} />
      <Link className={styles.navbar_link} href={"/about"}>About</Link>
      <Link className={styles.navbar_link} href={"/career"}>Career</Link>
    </nav>
  );
};

export default Navigation;
