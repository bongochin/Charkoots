import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import List from '@material-ui/core/List/'
import ListItem from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './PerfectWine.css'

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
      <MuiThemeProvider>
        <React.Fragment>
          <h4>" Mmmmhmm! That's one tasty Charkoot board! " - Samuel L. Jackson</h4>
          <div>
            <List>
              <ListItem>{ meat1 }</ListItem>
              <ListItem>{ meat2 }</ListItem>
              <ListItem>{ meat3 }</ListItem>
              <ListItem>{ cheese1 }</ListItem>
              <ListItem>{ cheese2 }</ListItem>
              <ListItem>{ cheese3 }</ListItem>
              <ListItem>{ cracker }</ListItem>
              <ListItem>{ fruit }</ListItem>
              <ListItem>{ nut }</ListItem>
              <ListItem>{ spread }</ListItem>
            </List>
          </div>
          <br />
          <Button onClick={this.back}>
            ACTUALLY...
          </Button>
          <Button onClick={this.continue}>
            COOL!
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
