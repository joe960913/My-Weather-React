import React from "react";
import styles from './index.less'

export default function Logo(props) {
  let changeLogoScheme = [
    styles.Logo,
    props.logoScheme === "dark" ? styles.dark : styles.light
  ];
  return (
    <div>
      <h1 className={changeLogoScheme.join(' ')}>My weather</h1>
    </div>
  );
}
