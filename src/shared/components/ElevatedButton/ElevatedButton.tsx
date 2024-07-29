import { ReactNode } from "react";
import styles from "./ElevatedButton.module.css";

const ElevatedButton = ({
  classes,
  children,
  ...attrs
}: {
  children: ReactNode | string;
  classes?: string;
}) => {
  return (
    <button className={`${classes} ${styles.elevated_btn}`} {...attrs}>
      {children}
    </button>
  );
};

export default ElevatedButton;
