import React from 'react';
import { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import VotingBox from './VotingBox';
import listToMatrix from '../utils/DataConversion';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'
import ThumbIcon from './ThumbIcon';

const styles = {
    headerRoot: {
        backgroundImage: 'url(https://i.ibb.co/0KWFnwW/Layer-3-copy-1-X.png)',
        width: '100%',
        height: 928,
        color: '#FFFFFF',
        boxShadow: 'inset 50px 50px 100px #000'
    },
    pageName: {
        fontSize: 32
    },
    mainMenu: {
        fontSize: 16
    },
    popeVotingBoxRoot: {
        height: 300,
        backgroundColor:'rgb(128,128,128, 0.7)',
        marginLeft: 150
    },
    popeVotingBoxTextContainer: {
        padding: 20
    },
    popeName: {
        fontSize: 60
    },
    popeVotingBoxThumbsContainer: {
        height: 80
    },
    popeVotingBoxThumbUpContainer: {
        backgroundColor: '#1CBBB4',
    },
    popeVotingBoxThumbDownContainer: {
        backgroundColor: '#FFAD1D'
    },
    messageRoot: {
        backgroundColor: '#EBEBEB',
        padding: 20
    },
    messageText1: {
        fontSize: 19,
        textAlign: 'center'
    },
    messageText2: {
        fontSize: 34,
        textAlign: 'center'
    },
    messageText3: {
        fontSize: 15,
        textAlign: 'left'
    },
    previousRulingsTitle: {
        fontSize: 40
    },
    submitNameRoot: {
        backgroundImage: 'url(https://i.ibb.co/92Bb2GR/Layer-4-1-X.png)',
        height: 80,
        boxShadow: 'inset 10px 10px 200px #fff'
    },
    submitNameMessage: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000'
    },
    submitNameButton: {
        color: '#000',
        borderColor: '#000'
    },
    followUsIcons: {
        textAlign: 'right'
    },
    link: {
        color: '#FFFFFF'
    }
};

class VotingPage extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        this._fetchPersons()
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container justify='center' spacing={4}>
                    <Grid item container xs={12}>
                        {this._renderHeader(classes)}
                    </Grid>
                    <Grid item container xs={10}>
                        {this._renderMessage(classes)}
                    </Grid>
                    <Grid item container xs={10}>
                        {this._renderPreviousRulingsTitle(classes)}
                    </Grid>
                    {this._renderVotingBoxes(classes)}
                    <Grid item container xs={10}>
                        {this._renderSubmitNameContainer(classes)}
                    </Grid>
                    <Grid item xs={10}>
                        <Divider />
                    </Grid>
                    <Grid item container xs={10}>
                        {this._renderFooter(classes)}
                    </Grid>
                </Grid>
            </div>
        );
    }

    _fetchPersons() {
        axios.get('http://localhost:8000/persons')
        .then(res => {
            const persons = res.data.data.persons;
            this.setState({ persons });
        }).catch(err => {
            console.log(err);
            console.log(err.message);
        })
    }

    _renderHeader(classes) {
        return (
            <Grid item container xs={12} className={classes.headerRoot}>
                <Grid item container xs={12}>
                    <Grid item container xs={6} justify='center'>
                        <Grid item xs={7} className={classes.pageName}>
                            Rule of Thumb
                        </Grid>
                    </Grid>
                    <Grid item container xs={6} className={classes.mainMenu}>
                        <Grid item xs={3}>
                            <Link to='/pastTrials' className={classes.link}>
                                Past Trials
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link to='/howItWorks' className={classes.link}>
                                How it Works
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link to='/Login' className={classes.link}>
                                Log In/Sign Up
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <img src='https://i.ibb.co/0Yh2Zw2/Composite-Path-1-X.png' alt=''/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12}>
                    {this._renderPopeVotingbox(classes)}
                </Grid>
            </Grid>
        );
    }

    _renderPopeVotingbox(classes) {
        return (
            <Grid item container xs={4} className={classes.popeVotingBoxRoot}>
                <Grid item container xs={12} className={classes.popeVotingBoxTextContainer} spacing={3}>
                    <Grid item container xs={12}>
                        <Grid item xs={12}>
                            <div>What’s your opinion on</div>
                            <div className={classes.popeName}>Pope Francis?</div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={1}>
                            <img src='https://i.ibb.co/TwjhKyt/Wiki-1X.png' alt=''/>
                        </Grid>
                        <Grid item xs={2}>
                            <u>More info</u>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <strong>What’s Your Verdict?</strong>
                    </Grid>
                </Grid>
                <Grid item container xs={12} className={classes.popeVotingBoxThumbsContainer}>
                    <Grid item container xs={6} justify='center' alignItems='center' className={classes.popeVotingBoxThumbUpContainer}>
                        <Grid item xs={1}>
                            <ThumbIcon position='up'/>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6} justify='center' alignItems='center' className={classes.popeVotingBoxThumbDownContainer}>
                        <Grid item xs={1}>
                            <ThumbIcon position='down'/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    _renderMessage(classes) {
        return (
            <Grid item container className={classes.messageRoot} xs={12} alignItems='center'>
                <Grid item container xs={2}>
                    <Grid item className={classes.messageText1} xs={12}>
                        Speak out. Be heard. 
                    </Grid>
                    <Grid item className={classes.messageText2} xs={12}>
                        <strong>Be counted</strong>
                    </Grid>
                </Grid>
                <Grid item xs={8} className={classes.messageText3}>
                    Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
                </Grid>
                <Grid item container xs={2} justify='flex-end'>
                    <Grid item xs={1}>
                        X
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    _renderPreviousRulingsTitle(classes) {
        return (
            <Grid item container xs={12}>
                <Grid item xs={12} className={classes.previousRulingsTitle}>
                    Previous Rulings
                </Grid>
            </Grid>
        );
    }

    _renderVotingBoxes(classes) {
        const { persons } = this.state;
        const matrixData = listToMatrix(persons, 2);

        return (
            matrixData.map( row => {
                return (
                    <Grid item container xs={10}>
                        {
                            row.map( (person, index) => {
                                const justifyType = (index % 2) === 0
                                    ? 'flex-start'
                                    : 'flex-end';
                                return (
                                    <Grid key={person.id} item container xs={6} justify={justifyType}>
                                        <Grid item>
                                            <VotingBox {...person} />
                                        </Grid>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                );
            })
        );
    }

    _renderSubmitNameContainer(classes) {
        return (
            <Grid item container xs={12} alignItems='center' className={classes.submitNameRoot}>
                <Grid item xs={8} className={classes.submitNameMessage}>
                    Is there anyone else you would want us to add?
                </Grid>
                <Grid item container xs={4} justify='flex-end'>
                    <Grid item xs={5}>
                        <Button variant='outlined' className={classes.submitNameButton}>Submit Name</Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    _renderFooter(classes) {
        return (
            <Grid item container xs={12}>
                <Grid item container xs={6} alignItems='center'>
                    <Grid item xs={4}>
                        Terms and Conditions
                    </Grid>
                    <Grid item xs={3}>
                        Privacy Policy
                    </Grid>
                    <Grid item xs={3}>
                        Contact Us
                    </Grid>
                </Grid>
                <Grid item container xs={6} justify='flex-end' alignItems='center'>
                    <Grid item xs={2} className={classes.followUsIcons}>
                        Follow Us
                    </Grid>
                    <Grid item xs={1} className={classes.followUsIcons}>
                        <img src='https://i.ibb.co/xGJz1Cj/Layer-2-1-X.png' alt=''/>
                    </Grid>
                    <Grid item xs={1} className={classes.followUsIcons}>
                        <img src='https://i.ibb.co/bKr0QGB/Layer-1-1-X.png' alt=''/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(VotingPage);