import React from "react";
import styles from "./index.less";
export default function Button(props) {
    let buttonClasses = [
        styles.ButtonWrapper,
        styles.FormButtonWrapper
    ]
  return (
    <div className={buttonClasses.join(' ')}>
      <button onClick={props.goSearch} type={props.type} name={props.name}>
        {props.children}
      </button>
    </div>
  );
}
