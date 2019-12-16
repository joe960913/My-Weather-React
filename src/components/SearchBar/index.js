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
        placeholder='输入一个城市'
        label='地区'
        value={props.value}
      />
      <Button goSearch={props.onClickHandler} name='searchSubmit' type='submit' position='onForm'>查询</Button>
    </div>
  );
}
