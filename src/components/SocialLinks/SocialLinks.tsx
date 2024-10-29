import React, { useLayoutEffect, useRef } from "react";
import styles from "./socialLinks.module.scss";
import { ReactComponent as GithubLogo } from "../../assets/svg/github.svg";
import { ReactComponent as InstagramLogo } from "../../assets/svg/instagram.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/svg/linkedin.svg";
const SocialLinks = () => {
  const svgRef = useRef(null);
  return (
    <ul className={styles.svgLogo}>
      <li>
        <a href="https://github.com/az25-boop" target="_blank">
          <GithubLogo className={styles.svgLink} height="40px" width="40px" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank">
          <InstagramLogo
            className={styles.svgLink}
            height="40px"
            width="40px"
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/pavel-melnik/" target="_blank">
          <LinkedInLogo className={styles.svgLink} height="40px" width="40px" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
