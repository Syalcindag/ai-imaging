import Link from "next/link";
import GithubIcon from "@/assets/icons/github.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/syalcindag" target="_blank">
        <GithubIcon />
      </Link>
      <Link href="#" target="_blank">
        <TwitterIcon />
      </Link>
      <p>
        Made by <b>Sefa Yalçındağ</b>
        <br />
        and, built with <b>Next.js</b>
      </p>
    </footer>
  );
}

export { Footer };