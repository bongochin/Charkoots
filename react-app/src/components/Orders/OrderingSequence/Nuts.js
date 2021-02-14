import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './OrderingSequence.css'

export default class Nuts extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render () {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h4>Nuts</h4>
          <br />
          <Button onClick={this.back}>
            PREVIOUS
          </Button>
          <Button onClick={this.continue}>
            NEXT
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}