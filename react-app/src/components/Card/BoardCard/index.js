import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './BoardCard.css'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function BoardCard({board}) {
  const classes = useStyles();

  return (
    <div className="board-card-wrapper">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={board.url}
            title={board.name}
          />
          <CardContent className="content">
            <Typography gutterBottom variant="h5" component="h2">
              {board.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {board.description}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              {board.ingredients}
            </Typography>
          </CardContent>
          <CardActions id="buttons">
            <Button size="small" color="primary">
              ADD TO ORDER
            </Button>
            <Button size="small" color="primary">
              CUSTOMIZE
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}
