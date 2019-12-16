  
import React from 'react'

import classes from './index.less';

const Card = (props) => {
    return(
        <div className={classes.Card}>
            {props.children}
        </div>
    );
}

export default Card;