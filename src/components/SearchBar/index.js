import React from "react";
import InputField from "../../elements/InputField";
import Button from "../../elements/Button";
import styles from './index.less'
export default function SearchBar(props) {
  return (
    <div className={styles.SearchBar}>
      <InputField
        type="text"
        name={props.city}
        onChange={props.onChangeHandler}
        error={props.error}
        placeholder='Enter a city'
        label='Location'
        value={props.value}
      />
      <Button goSearch={props.onClickHandler} name='searchSubmit' type='submit' position='onForm'>Search</Button>
    </div>
  );
}
