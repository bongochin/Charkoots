import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './MenuCard.css'


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 0,
  },
});

export default function MenuCard({boardItem}) {
  const classes = useStyles();

  return (
    <div className="menu-card-wrapper">
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent className="menu-content">
            <div className="menu-content_type">
            {boardItem.type}
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {boardItem.items[0]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {boardItem.items[1]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {boardItem.items[2]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {boardItem.items[3]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {boardItem.items[4]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {boardItem.items[5]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {boardItem.items[6]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {boardItem.items[7]}
            </Typography>
          </CardContent>
          <CardActions id="buttons">
            <Button size="small" color="primary">
              DETAILS
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}
