import React from 'react';

import classes from './index.less';

const preview = (props) => {
    return(
        <img
            src={require('../../assets/images/Preview.svg')}
            alt="Weather App Icon"
            className={classes.Preview} />
    );
}

export default preview;