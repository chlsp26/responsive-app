import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import restaurant from '../images/restaurant.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import Icon from '@material-ui/core/Icon';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
    gridHeader1: {
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            height: '100%'
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: '100%',
            height: '100%'
        },
        [theme.breakpoints.between("md", "lg")]: {
            width: '65%',
            height: '100%'
        },
    },
    gridHeader2: {
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            height: '100%'
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: '100%',
            height: '100%'
        },
        [theme.breakpoints.between("md", "lg")]: {
            width: '35%',
            height: '100%'
        },
    },
    cardContent1: {
        textAlign: 'left',
        padding: '0px',
    },
    cardContent2: {
        textAlign: 'left'
    },
    cardHeader: {
        height: '110px'
    },
    deals: {
        color: 'orange'
    },
    cardVisit: {
        background: 'orange'
    },
    cardHeaderVisit: {
        color: 'white',
        paddingLeft: '16px',
        paddingTop: '8px',
        paddingBottom: '0px'
    },
    cardContentVisit: {
        color: 'white',
        paddingLeft: '16px',
        paddingTop: '8px',
        paddingBottom: '4px'
    },
    mobile: {
        color: 'orange'
    },
    phone: {
        color: 'orange',
        width: '20px',
        height: '20px',
        overflow: 'hidden',
        fontSize: '1rem',
        verticalAlign: 'middle'
    },
    unlink: {
        marginRight: 'auto'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    select: {
        width: '100%'
    },
    button1: {
        background: 'orange',
        width: '50%',
        verticalAlign: 'bottom'
    },
    button2: {
        background: 'orange',
        width: '100%'
    },
    elements: {
        padding: '40px'
    },
    container: {
        position: 'relative'
    },
    text: {
        position: 'absolute',
        top: '20px',
        color: 'white',
        paddingReft: '20px',
        paddingRight: '20px',
        textAlign: 'center',
        width: '100%'
    },
    pad: {
        paddingBottom: '10px'
    }
}));

export default function SpacingGrid() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        group: '',
        name: 'group1',
    });

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            name: event.target.value,
        }));
    }

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={1}>
                    <Grid item classes={{ item: classes.gridHeader1 }}>
                        <Card className={classes.card}>
                            <CardContent classes={{ root: classes.cardContent1 }}>
                                <div className={classes.container}>
                                    <img src={restaurant} height="100%" width="100%" />
                                    <div className={classes.text}>
                                        <h4>Hello</h4>
                                        <h3>Sachin</h3>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item classes={{ item: classes.gridHeader2 }}>
                        <Card className={classes.card}>
                            <CardContent classes={{ root: classes.cardContent2 }}>
                                <div style={{ paddingBottom: "10px" }}>
                                    <Icon classes={{ root: classes.deals }}>redeem</Icon>
                                    <span>Recent Deals</span>
                                </div>
                                <Grid item xs={12} className={classes.pad}>
                                    <Grid container justify="center" spacing={1}>
                                        <Grid item xs={6}>
                                            <Card>
                                                <img src={img1} height="100%" width="100%" />
                                            </Card>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Card>
                                                <img src={img2} height="100%" width="100%" />
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} className={classes.pad}>
                                    <Grid container justify="center" spacing={1}>
                                        <Grid item xs={6}>
                                            <Card className={classes.cardVisit}>
                                                <CardHeader title="Total Visits" className={classes.cardHeaderVisit} />
                                                <CardContent className={classes.cardContentVisit}>
                                                    256
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Card className={classes.cardVisit}>
                                                <CardHeader title="Last Visit" className={classes.cardHeaderVisit} />
                                                <CardContent className={classes.cardContentVisit}>
                                                    30 Days back
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justify="center" spacing={1}>
                                        <Grid item xs={12}>
                                            <Card>
                                                <CardHeader avatar={
                                                    <Icon classes={{ root: classes.mobile }}>phone_iphone</Icon>
                                                } title="Registered to device" subheader="9000899999" />
                                                <div style={{ textAlign: 'end' }}><Link style={{ cursor: 'pointer' }}>Unlink device</Link></div>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <div style={{ textAlign: 'center' }}>
                                    <div className={classes.elements}>
                                        <div>Are you a part of</div>
                                        <div style={{ color: 'orange', fontWeight: 'bold' }}>OPENWIFI - OFFICE?</div>
                                    </div>
                                    <div style={{ textAlign: 'left' }}>Yes, I am from</div>
                                    <div>
                                        <form autoComplete="off">
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="group-simple">Select group</InputLabel>
                                                <Select
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    inputProps={{
                                                        name: 'group',
                                                        id: 'group-simple',
                                                    }}
                                                    className={classes.select}
                                                >
                                                    <MenuItem value={'group1'}>group1</MenuItem>
                                                    <MenuItem value={'group2'}>group2</MenuItem>
                                                    <MenuItem value={'group3'}>group3</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <Button variant="contained" className={classes.button1}>
                                                Register
                                            </Button>
                                        </form>
                                    </div>
                                    <div className={classes.elements}>
                                        <Icon classes={{ root: classes.phone }}>phone</Icon>
                                        Support - contact admin krishna @8999977998
                                    </div>
                                    <div>
                                        Powered By
                                        <Icon>wifi</Icon>
                                        openwifi
                                    </div>
                                    <div className={classes.elements}>
                                        <form autoComplete="off">
                                            <Button variant="contained" className={classes.button2}>
                                                Connect
                                        </Button>
                                        </form>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
