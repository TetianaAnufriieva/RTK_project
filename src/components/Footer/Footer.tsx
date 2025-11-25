import type { JSX } from "react";
import style from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={style.footer}>
      <div className={style.footerText}>
        &copy; 2025 RTK Company. All rights reserved.
      </div>
      <div className={style.footerSocials}>
        <a href="https://facebook.com" className={style.footerSocialLink}>Facebook</a>
        <a href="https://twitter.com" className={style.footerSocialLink}>Twitter</a>
        <a href="https://instagram.com" className={style.footerSocialLink}>Instagram</a>
      </div>
    </footer>
  );
}