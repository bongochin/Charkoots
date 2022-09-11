import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ItemCard.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  table: {
    minWidth: 650,
  },
});

function createData(name, index) {
  return { name, index };
}


export default function ItemCard({type}) {
  const classes = useStyles();

  const rows = [
    createData('Boldness', type.boldness),
    createData('Sharpness', type.sharpness),
    createData('Saltiness', type.saltiness),
    createData('Spiciness', type.spiciness),
    createData('Sweetness', type.sweetness),
  ];

  return (
    <div className="item-card-wrapper">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={type.item_image}
            title={type.item_name}
          />
          <CardContent className="item-content">
            <Typography gutterBottom variant="h5" component="h2">
              {type.item_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {type.item_description}
            </Typography>
            <br />
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.index}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
