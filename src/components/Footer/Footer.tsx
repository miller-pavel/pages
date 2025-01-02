import React from "react";
import footerBg from "../../assets/img/footerBg.webp";
import styles from "./footer.module.scss";
import SocialLinks from "../SocialLinks/SocialLinks";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={footerBg} alt="" />
      <h3>Melnik Pavel</h3>
      <SocialLinks />
      <p>All Rights Reserved 2025 Melnik Pavel</p>
    </footer>
  );
};

export default Footer;
