import React from 'react';
import { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PersonDescriptionBox from './PersonDescriptionBox';
import VotesPercentageBar from './VotesPercentageBar';

const styles = {
    paper: {
        textAlign: 'center',
        height: 550,
        width: 490
    }
  };

class VotingBox extends Component {
    render() {
        const { classes, id, name, imageUrl, description, timeAgoInMonths, category, thumbsUp, thumbsDown } = this.props;

        return (
            <div>
                <Paper className={classes.paper}>
                    <PersonDescriptionBox
                        image={imageUrl}
                        name={name}
                        description={description}
                        timeAgo={timeAgoInMonths}
                        timeUnit={timeAgoInMonths === 1 ? 'month' : 'months' }
                        category={category}
                        thumbPosition={thumbsUp >= thumbsDown ? 'up' : 'down'}
                    />
                    <VotesPercentageBar thumbsUp={thumbsUp} thumbsDown={thumbsDown} personId={id} />
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(VotingBox);