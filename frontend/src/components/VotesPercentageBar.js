import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ThumbIcon from './ThumbIcon';

const styles = {
    root: {
        height: 50,
        width: 490,
        display: 'flex'
    },
    thumbsUpBar: {
        height: 50,
        backgroundColor: '#1CBBB4'
    },
    thumbsDownBar: {
        height: 50,
        backgroundColor: '#FFAD1D'
    },
    thumbsUpBarLegend: {
        height: 50,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 20,
        color: '#FFFFFF'
    },
    thumbsDownBarLegend: {
        height: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: 20,
        color: '#FFFFFF'
    }
};

class VotesPercentageBar extends Component {
    state = {
        thumbsUpBarBorder: false,
        thumbsDownBarBorder: false,
        thumbsUpCount: this.props.thumbsUp,
        thumbsDownCount: this.props.thumbsDown
    }

    render() {
        const { classes } = this.props;
        const { thumbsUpBarBorder, thumbsDownBarBorder, thumbsUpCount, thumbsDownCount } = this.state;
        const thumbsTotal = thumbsUpCount + thumbsDownCount;
        const thumbsUpPercentage =  Math.round((thumbsUpCount / thumbsTotal) * 100);
        const thumbsDownPercentage =  Math.round((thumbsDownCount / thumbsTotal) * 100);

        return (
            <div className={classes.root}>
                <div className={classes.thumbsUpBar} style={{width: `${thumbsUpPercentage}%`}}>
                    <div className={classes.thumbsUpBarLegend}>
                        <div
                            onMouseEnter={() => this.setState({thumbsUpBarBorder: true})}
                            onMouseLeave={() => this.setState({thumbsUpBarBorder: false})}
                            onClick={ () => {
                                this.updateThumbsCount('up');
                            }}
                        >
                            <ThumbIcon position='up' border={thumbsUpBarBorder} />
                        </div>
                        <div>{`${thumbsUpPercentage}%`}</div>
                    </div>
                </div>
                <div className={classes.thumbsDownBar} style={{width: `${thumbsDownPercentage}%`}}>
                    <div className={classes.thumbsDownBarLegend}>
                        <div>{`${thumbsDownPercentage}%`}</div>
                        <div
                            onMouseEnter={() => this.setState({thumbsDownBarBorder: true})}
                            onMouseLeave={() => this.setState({thumbsDownBarBorder: false})}
                            onClick={ () => {
                                this.updateThumbsCount('down');
                            }}
                        >
                            <ThumbIcon position='down' border={thumbsDownBarBorder} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    updateThumbsCount(position) {
        axios.put(`http://localhost:8000/persons/${this.props.personId}`, {thumb: position})
        .then(res => {
            const person = res.data.data.person;
            if (position === 'up') {
                this.setState({thumbsUpCount: person.thumbsUp});
            } else {
                this.setState({thumbsDownCount: person.thumbsDown});
            }
            this.notifyVote();
        }).catch(err => {
            console.log(err);
            console.log(err.message);
        })
    }

    notifyVote() {
        alert('Thank you for voting!');
    }
}

export default withStyles(styles)(VotesPercentageBar);