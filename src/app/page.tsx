import Image from "next/image";
import styles from "./page.module.css";
import ElevatedButton from "@/shared/components/ElevatedButton/ElevatedButton";
import OutlinedButton from "@/shared/components/OutlinedButton/OutlinedButton";
import CurrencyDrop from "@/shared/components/CurrencyDrop/CurrencyDrop";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main_content_wrap}>
        <h4 className={styles.logo_name}>--- Crypto Brians</h4>
        <h1 className={styles.main_title}>
          Buy & Sell Crypto Easy With Crypto Brains
        </h1>
        <p className={styles.main_paragraph}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className={styles.main_content_action}>
          <ElevatedButton>Start Nov</ElevatedButton>
          <OutlinedButton>Beginner’s Guide</OutlinedButton>
        </div>
      </div>
      <img className={styles.main_svg} src="/img/main.png" alt="" />

      <div className={styles.currency_wrap}>
        <CurrencyDrop title="BTC / INR" percent="5.76%" price="28,214,25.341" />
        <CurrencyDrop title="BTC / INR" percent="5.76%" price="28,214,25.341" />
        <CurrencyDrop title="BTC / INR" percent="5.76%" price="28,214,25.341" />
        <CurrencyDrop title="BTC / INR" percent="5.76%" price="28,214,25.341" />
        <CurrencyDrop title="BTC / INR" percent="5.76%" price="28,214,25.341" />
        <CurrencyDrop title="BTC / INR" percent="5.76%" price="28,214,25.341" />
        <CurrencyDrop title="BTC / INR" percent="5.76%" price="28,214,25.341" />
      </div>
    </main>
  );
}
