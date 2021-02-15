import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/';
import List from '@material-ui/core/List/';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import './PerfectWine.css';

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
              <h4>... and we have the PERFECT wine for it!</h4>
              <div className="perfect-wine_display">
                <img src="https://images.vivino.com/thumbs/QRQm5yweS1Sh3GNd1zriog_pb_x600.png"/>
                <div className="display_details">
                  <h5>Château Prieurs de la Commanderie Pomerol 2014</h5>
                  <h6>Red; Berdeaux Blend</h6>
                  <br />
                  <p>"A small-production treasure with a brilliant taste. It's your favorite indie band that you don't want them to get famous. Earthy > Oak > Red Fruit"</p>
                </div>
              </div>
              <br />
            </div>
            <div className="perfect-wine_buttons">
              <Button onClick={this.back}>
                ACTUALLY...
              </Button>
              <Button onClick={this.continue}>
                COOL!
              </Button>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    )
  }
}
