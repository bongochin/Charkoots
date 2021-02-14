import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './OrderingSequence.css'

export default class OrderingSequence extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render () {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h4>Let's give it a name.</h4>
          <TextField
            hintText="Enter your Board's Name"
            placeholder="Board Name"
            onChange={handleChange('boardName')}
            defaultValue={values.boardName}
          />
          <br />
          <TextField
            hintText="Enter your Board's Description"
            placeholder="Board Description"
            onChange={handleChange('boardDescription')}
            defaultValue={values.boardDescription}
          />
          <br />
          <Button
            onClick={this.continue}
          >
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
