import { ReactNode } from "react";
import styles from "./CurrencyDrop.module.css";

const CurrencyDrop = ({
  title,
  percent,
  price,
}: {
  title: string;
  percent: string | number | ReactNode;
  price: string | number;
}) => {
  return (
    <div className={styles.currency_drop_wrap}>
      <div className={styles.currency_drop_info}>
        <p className={styles.currency_drop_info_title}>{title}</p>
        <p className={styles.currency_drop_info_percent}>{percent}</p>
      </div>
      <div className={styles.currency_drop_price}>{price}</div>
    </div>
  );
};

export default CurrencyDrop;
