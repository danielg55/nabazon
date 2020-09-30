import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";
import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        width: 600,
        height: 400
    },
    media: {
        height: 140,
    },
});


export default function EventModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                <Icon style={{fontSize: 30}}>add</Icon>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <Card align="right" className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require("assets/img/sign.jpg")}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography align="center" gutterBottom variant="h4">
                                {props.title}
                            </Typography>
                            <Typography style={{fontSize: 16}} variant="body2" color="textSecondary" component="p">
                                {props.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Dialog>
        </div>
    );
}
