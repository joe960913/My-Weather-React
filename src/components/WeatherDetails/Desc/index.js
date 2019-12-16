import React from 'react';

import classes from './index.less';

const description = (props) => {
    return(
        <div className={classes.DescriptionWrapper}>
            {props.type}
        </div>
    );
}

export default description;