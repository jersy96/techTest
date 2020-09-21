import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import capitalize from 'lodash/capitalize';
import ThumbIcon from './ThumbIcon';

const styles = {
    root: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 500,
        width: 490,
        color: '#FFFFFF',
        fontSize: 16,
        boxShadow: 'inset -50px -50px 200px #000'
    },
    thumbContainer: {
        marginBottom: 11
    },
    nameContainer: {
        fontSize: 45,
        textAlign: 'left',
        paddingLeft: 10
    },
    descriptionContainer: {
        textAlign: 'left',
        paddingLeft: 10
    },
    fullReportButton: {
        color: '#FFFFFF',
        borderColor: '#FFFFFF'
    },
    timeAgoContainer: {
        fontSize: 12
    }
}

const PersonDescriptionBox = props => {
    const { classes, image, name, description, timeAgo, timeUnit, category, thumbPosition } = props;

    return (        
        <div>
            <Grid container style={{backgroundImage: `url(${image})`}} className={classes.root}>
                <Grid item container xs={12} spacing={3} alignItems='center' alignContent='flex-end' justify='flex-start'>
                    <Grid item container xs={12} spacing={0} alignItems='flex-end'>
                        <Grid item xs={1} className={classes.thumbContainer}>
                            <ThumbIcon position={thumbPosition}/>
                        </Grid>
                        <Grid item xs={10} className={classes.nameContainer}>
                            {name}
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} spacing={0}>
                        <Grid item xs={1} />
                        <Grid item xs={10} className={classes.descriptionContainer}>
                            {description}
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} spacing={0}>
                        <Grid item xs={1} />
                        <Grid item xs={5}>
                            <Button variant='outlined' className={classes.fullReportButton}>View Full Report</Button>
                        </Grid>
                        <Grid item container xs={6} justify='flex-end'>
                            <Grid item xs={5} className={classes.timeAgoContainer}>
                                <div>
                                    <strong>{`${timeAgo} ${timeUnit} Ago `}</strong>
                                    {`in ${capitalize(category)}`}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}></Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(PersonDescriptionBox);