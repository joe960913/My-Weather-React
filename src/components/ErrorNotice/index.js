import React from 'react';

import classes from './index.less';
import Button from '../../elements/Button';

const errorNotice = (props) => {
    return(
        <div className={classes.ErrorNoticeWrapper}>
            <h1 className={classes.NotFound404}>404</h1>
            <div className={classes.ErrorTextWrapper}>
                <h2 className={classes.NotFoundHeading}>糟糕!</h2>
                <p className={classes.NotFoundDetails}>找不到你想找的城市呀</p>
                <Button 
                    name="tryAgain" 
                    type="button" 
                    position="onErrorNotice"
                    goSearch={props.onClickHandler}>Try again</Button>
            </div>
        </div>
    );
}
export default errorNotice;