import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        height: 19,
        width: 19
    }
};

const ThumbIcon = props => {
    const { classes, position, border=false } = props;
    const iconUrl = position === 'up'
        ? 'https://i.ibb.co/Vg6Hrzz/Rectangle-9-copy-17-1-X.png'
        : 'https://i.ibb.co/0JK5QPD/Rectangle-9-copy-5-1-X.png';
    const backgroundColor = position === 'up' ? '#1CBBB4' : '#FFAD1D';

    return (
        <div
            className={classes.root}
            style={{
                backgroundColor: backgroundColor,
                borderStyle: border ? 'solid' : 'none',
                borderColor: '#FFFFFF'
            }}
        >
            <div className={classes.iconContainer} style={{backgroundImage: `url(${iconUrl})`}} />
        </div>
    );
};

export default withStyles(styles)(ThumbIcon);