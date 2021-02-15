import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './OrderingSequence.css'

export default class OrderingSequence extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render () {
    const { values, handleChange } = this.props;
    return (
      <div className="ordering-sequence-wrapper">
        <MuiThemeProvider>
          <React.Fragment>
            <div className="ordering-sequence_form">
              <h4>Great! First, let's give it a name.</h4>
              <TextField
                hintText="Enter your Board's Name"
                placeholder="Comment t'appelles-tu?"
                onChange={handleChange('boardName')}
                defaultValue={values.boardName}
              />
              <br />
              <TextField
                hintText="Enter your Board's Description"
                placeholder="(Optional) A short description for later use"
                onChange={handleChange('boardDescription')}
                defaultValue={values.boardDescription}
              />
            </div>
            <Button
              onClick={this.continue}
            >
              NEXT <ArrowRightIcon />
            </Button>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}
