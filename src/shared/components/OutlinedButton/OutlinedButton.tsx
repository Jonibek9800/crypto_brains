import { ReactNode } from "react";
import styles from "./OutlinedButton.module.css";

const OutlinedButton = ({
  classes,
  children,
  ...attrs
}: {
  children: ReactNode | string;
  classes?: string;
}) => {
  return (
    <button className={`${classes} ${styles.outlined_btn}`} {...attrs}>
      {children}
    </button>
  );
};

export default OutlinedButton;
