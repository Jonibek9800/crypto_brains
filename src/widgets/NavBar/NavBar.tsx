"use client";
import Navigation from "@/shared/components/Navigation/Navigation";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className={styles.header_wrap}>
      <div
        onClick={() => {
          router.push("/");
        }}
        className={styles.logo}
      >
        <img
          className={styles.logo_img}
          src="/img/crypto_logo.png"
          alt="crypto"
        />
        <div className={styles.logo_line}></div>
      </div>
      <Navigation />
      <div className={styles.auth_wrap}>
        <Link className={styles.auth_link} href="/auth">
          Log In
        </Link>
        <Link
          className={`${styles.auth_link} ${styles.auth_link_primary}`}
          href="/auth"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
