import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List/';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './PerfectWine.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, index) {
  return { name, index };
}

const board_rows = [
  createData('Boldness', 4.0),
  createData('Sharpness', 4.3),
  createData('Saltiness', 3.7),
  createData('Spiciness', 1.3),
  createData('Sweetness', 2.7),
];

const wine_rows = [
  createData('Boldness', 4.7),
  createData('Sharpness', 2.6),
  createData('Saltiness', 3.4),
  createData('Spiciness', 1.6),
  createData('Sweetness', 3.7),
];

export default class PerfectWine extends Component {
  continue = e => {
    e.preventDefault();
    // Process form to API...
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render () {
    const { values: {
      boardName, boardDescription, boardCost, meat1, meat2, meat3, cheese1, cheese2, cheese3, cracker, fruit, nut, spread
    } } = this.props;

    return (
      <div className="perfect-wine-wrapper">
        <MuiThemeProvider>
          <React.Fragment>
            <h3>" Mmmmhmm! That's one tasty Charkoot board! "  - Samuel L. Jackson</h3>
            <div className="perfect-wine_details">
              <div className="perfect-wine_boards">
                <List className="perfect-wine_board-rendering">
                  <ListItem>{ meat1 }</ListItem>
                  <ListItem>{ meat2 }</ListItem>
                  <ListItem>{ meat3 }</ListItem>
                </List>
                <br />
                <List className="perfect-wine_board-rendering">
                  <ListItem>{ cheese1 }</ListItem>
                  <ListItem>{ cheese2 }</ListItem>
                  <ListItem>{ cheese3 }</ListItem>
                </List>
                <List className="perfect-wine_board-rendering">
                  <ListItem>{ cracker }</ListItem>
                  <ListItem>{ fruit }</ListItem>
                  <ListItem>{ nut }</ListItem>
                  <ListItem>{ spread }</ListItem>
                </List>
              </div>
              <h4>It seems like your Charkoot board is...</h4>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Characteristics (avg)</TableCell>
                      <TableCell align="right">Index</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {board_rows.map((row) => (
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
              <h4>... and we have the PERFECT wine for it!</h4>
              <div className="perfect-wine_display">
                <img src="https://images.vivino.com/thumbs/QRQm5yweS1Sh3GNd1zriog_pb_x600.png"/>
                <div className="display_details">
                  <h5>Château Prieurs de la Commanderie Pomerol 2014</h5>
                  <h6>Red; Berdeaux Blend</h6>
                  <br />
                  <p>"A small-production treasure with a brilliant taste. It's your favorite indie band that you don't want them to get famous. Earthy > Oak > Red Fruit"</p>
                </div>
                <div className="display_stats">
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Characteristics (avg)</TableCell>
                          <TableCell align="right">Index</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {wine_rows.map((row) => (
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
                </div>
              </div>
              <br />
              <div className="perfect-wine_buttons">
                <Button id="buttons" onClick={this.back}>
                  <ArrowLeftIcon />ACTUALLY...
                </Button>
                <Button id="buttons" onClick={this.continue}>
                  CHECKOUT<ArrowRightIcon />
                </Button>
              </div>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    )
  }
}
