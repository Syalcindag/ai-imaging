"use client"
import styles from "./styles.module.scss";

export const Tag = ({title, onClick}) => {
    const handleClick = () => {
        if(onClick) {
            onClick(title);
        }
    }

  return (
    <button className={styles.tag} onClick={handleClick}>{title}</button>
  )
}
