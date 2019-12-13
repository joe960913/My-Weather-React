import React from "react";
import styles from "./index.less";
import Logo from "../../elements/Logo";
export default function Header(props) {
  return (
    <header>
      <header
        className={styles.Header}
        style={{ backgroundColor: props.color }}
      >
        <Logo logoScheme={"light"} clicked={props.onClickHandler} />
      </header>
    </header>
  );
}
