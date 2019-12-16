import React from 'react';

import classes from './index.less';
import Icon from '../../elements/Icon';
import Temperature from './Temp';
import Description from './Desc';
import Date from './Date';

const weatherDetails = (props) => {
    return(
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon type={props.data.description} />    
            </div>
            <div className={classes.WeatherDataWrapper}>
                <Temperature degrees={props.data.temperature} />
                <Description type={props.data.description} />
                <Date />
            </div>
        </div>
    );
}

export default weatherDetails;