import React from 'react';
import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer}>
      &copy; {year} Project by Ben Marvyn
    </div>
  )
}

export default Footer