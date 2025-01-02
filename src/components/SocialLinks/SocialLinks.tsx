import React, { useRef } from "react";
import styles from "./socialLinks.module.scss";
import { ReactComponent as GithubLogo } from "../../assets/svg/github.svg";
import { ReactComponent as InstagramLogo } from "../../assets/svg/instagram.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/svg/linkedin.svg";
const SocialLinks = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const svgRef = useRef(null);
  return (
    <ul className={styles.svgLogo}>
      <li>
        <a href="https://github.com/az25-boop">
          <GithubLogo className={styles.svgLink} height="40px" width="40px" />
        </a>
      </li>
      <li>
        <a href="https://t.me/pawwaMiller">
          <InstagramLogo
            className={styles.svgLink}
            height="40px"
            width="40px"
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/pavel-melnik/">
          <LinkedInLogo className={styles.svgLink} height="40px" width="40px" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
