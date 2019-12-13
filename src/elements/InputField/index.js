import React from "react";
import styles from "./index.less";
import assetMapping from "../../assets/assetMapping.json";
export default function InputField(props) {
  return (
    <div>
      <div className={styles.InputFieldWrapper}>
        <label htmlFor={props.name}>{props.label}</label>
        <input
          type={props.type}
          id={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          style={(props.error) ? {'borderBottomColor': assetMapping.colors.error} : null}
          required
        />
      </div>
    </div>
  );
}
