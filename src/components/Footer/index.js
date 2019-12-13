import React from "react";
import styles from "./index.less";
import Logo from "../../elements/Logo";
export default function Footer(props) {
  return (
    <div>
      <footer className={styles.Footer}>
        <Logo logoScheme="dark" clicked={props.onClickHandler} />
        <div className={styles.seperator}></div>
      </footer>
    </div>
  );
}
