import React from 'react';

import classes from './index.less';

const temperature = (props) => {
    return(
        <div className={classes.TemperatureWrapper}>
            {Math.round(props.degrees)}<span className={classes.TemperatureSymbol}>°</span>
        </div>
    );
}

export default temperature;